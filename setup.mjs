import { promises as fs } from 'fs';
import path from 'path';
import dotenv from 'dotenv';

const template = `---
title: 'My blogs!'
publishedAt: '2023-01-01'
summary: 'https://www.blogger.com/blog/posts/608058540201884098?bpli=1&pli=1.'
---

Hello, World!`;

const homePage = `export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my portfolio</h1>
      <p className="prose prose-neutral dark:prose-invert">
       I am a seasoned web developer with more than 11 years of experience in front-end development and 5 years in back-end development.
      </p>
    </section>
  );
}
`;

const workPage = `export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <p className="prose prose-neutral dark:prose-invert">
        Work experience "https://preview.webflow.com/preview/olimi-emmnuel?utm_medium=preview_link&utm_source=designer&utm_content=olimi-emmnuel&preview=b9ff829164a66d2af3970903abee2086&workflow=preview"
      </p>
    </section>
  );
}
`;

const deleteFolderRecursive = async (path) => {
  const stat = await fs.stat(path);
  if (stat.isDirectory()) {
    const files = await fs.readdir(path);
    await Promise.all(
      files.map((file) => deleteFolderRecursive(`${path}/${file}`))
    );
    await fs.rmdir(path);
  } else {
    await fs.unlink(path);
  }
};

(async () => {
  dotenv.config();

  if (process.env.IS_TEMPLATE === 'false') {
    // This means it's not the template, it's my legit site
    // I orderride the env variable for my site. This means that when
    // folks clone this repo for the first time, it will delete my personal content
    return;
  }

  const contentDir = path.join(process.cwd(), 'content');
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const appDir = path.join(process.cwd(), 'app');
  const workDir = path.join(process.cwd(), 'app', 'work');

  await deleteFolderRecursive(contentDir);
  await deleteFolderRecursive(imagesDir);
  await fs.mkdir(contentDir);
  await fs.writeFile(path.join(contentDir, 'hello-world.mdx'), template);
  await fs.writeFile(path.join(appDir, 'page.tsx'), homePage);
  await fs.writeFile(path.join(workDir, 'page.tsx'), workPage);
})();
