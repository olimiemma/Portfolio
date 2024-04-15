import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work',
  description: <a href="https://preview.webflow.com/preview/olimi-emmnuel?utm_medium=preview_link&utm_source=designer&utm_content=olimi-emmnuel&preview=b9ff829164a66d2af3970903abee2086&workflow=preview">A summary of my work and contributions</a>
'.',
};

async function Stars() {
  let res = await fetch('https://api.github.com/repos/vercel/next.js');
  let json = await res.json();
  let count = Math.round(json.stargazers_count / 1000);
  return `${count}k stars`;
}

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          On a mission to solve problems by building solutions and bridges{' '}
          <Link href="/blog/developer-experience">love</Link>, 	I've spent the last decade studying psychology, human behavioural sciences and philosophy, with a keen interest in the nature of intelligence and what it means. Now, I've turned my attention to the field of artificial intelligence, fascinated by the ways in which machines can exhibit forms of intelligence that are distinct from human cognition. With my background in these disciplines, I bring a unique perspective to the study of AI and its implications for our understanding of intelligence.". Here's a summary of my
          work so far.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Vercel</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
         MD
        </p>
        <p>
          I joined <a href="https://vercel.com/home">Vercel</a> early to grow{' '}
          <a href="https://nextjs.org">Next.js</a> In 2012, during my second year at university, I co-founded and Incorporated Wazi Group Limited, a technology branding firm serving the Tech, Brand, and Supplies industry. Over 12 years later, we've proudly served over 95 NGO clients, along with countless private and government entities.

        </p>
        <ul>
          <li>
            In 2017, I was promoted to Director of Wazi Group. We{' '}
            <a href="https://linktr.ee/olimiemma">
              translated customer pain
            </a>{' '}
            back into Real world solutions. We helped several clients{' '}
            <Link href="https://photos.google.com/share/AF1QipPDC2s3dU052zLI4jhrXByv9YyXPPASrEzDG1Em_mzVRY8TTrwbxdRUNAIJtWbRuw?key=cXFHbzZ2NE9acUxtcWNzQk9PQ0QzLVhBUnNIVzRn&pli=1">achieve their Goals</Link>, I 
          wrote  blog posts, and created videos.
          </li>
          <li>
            In 2024, I moved to Canada to start a new life a{' '}
            <a href="https://www.youtube.com/@olimiemma">and further my life journey</a> .{' '}
            <a href="https://www.youtube.com/watch?v=jiAi2e3oil4&list=PLUl4u3cNGP63YwKIMA9K08FFvdeBEl6Lo">
              I worked on Projects with Massachusetts Institute of Technology
            </a>{' '}
            I partnered with many people, collaborating with
            across the world{' '}
            <a href="https://www.youtube.com/watch?v=jiAi2e3oil4&list=PLUl4u3cNGP63YwKIMA9K08FFvdeBEl6Lo">Nuxt</a> and{' '}
            <a href="https://www.youtube.com/watch?v=jiAi2e3oil4&list=PLUl4u3cNGP63YwKIMA9K08FFvdeBEl6Lo">
            OCW PODCAST
            </a>{' '}
            and sponsoring individuals and projects.
          </li>
          <li>
            In 2023, I was promoted to VP of Product, now also leading Product
            Management.
          </li>
        </ul>
        <p>
          Since I started working  in 2013, Computational thinking adn problem solving has grown
          me and my life and journey. <Stars />. Grateful <a href="https://news.mit.edu/2024/how-online-mit-courses-can-transform-future-world-0312">more</a>.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Hy-Vee</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer, 2010 — date
        </p>
        <p>
         From my firt internship at The Ministry of Defense and Veterans Affairs - Headquarters , Kampala-Uganda – May 2012-
when I was Monitoring and general maintenance of on premise networks and data warehouses, hardware and
software <Link href="/blog/product-engineers">product engineers</Link>{' '}
          working across web and mobile to rebuild their legacy .NET application
          (~500k MAU) with React and React Native.
        </p>
        <p>
     To the frontend, I led the move from a custom websolutions and backend
          configuration to running a tech brand firm and the latest Personal interests in the arts. In the
          process, I shared my learnings online, helping educate  people allover the
          world and tell their stories
        </p>
        <p>
          Throughout my 14 plus years, I was able to work on some hard problems:
          growing, evolving
          learning and occasionally managing teams of people.
         I have been building and implementing a design systems and solutions, incrementally
        growing. my tehc start up reached the decade in business mark in 2022
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Workiva</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          I.T Trainer / Computer Administrator- Friedrich-Ebert-Stiftung 2014-2015
        </p>
        <p>
          Taught Computer hardware and software, from basic daily use Apps to Databases and IoTs to over
800 different organizational staff across 20 different projects/training (NGOs, PSFs, and Local Governance
Bodies), 15 project teams, and over 200 individual freelance students.
Provided technical support, resolving issues for clients and within my workplace
        </p>
      </div>
    </section>
  );
}
