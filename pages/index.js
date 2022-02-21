import Head from 'next/head';
import Link from 'next/link';
import { GrLinkedin, GrGithub } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';

import NavBar from '../components/NavBar';


const Home = () => {
  return (
    <div className='container mx-auto flex flex-col w-9/12'>
      <NavBar />
      <Head>
        <title>Sabya&apos;s website</title>
      </Head>

      <div className='flex flex-row justify-center'>
        <h1 className='text-6xl font-bold py-2 my-10'>Hi, I&apos;m Sabya.</h1>
      </div>
      <Section title='Work'>
        I&apos;m a second-year engineering student at Birla Institute of Technology
        and Science. I&apos;m a Linux enthusiast. I use GNU/Linux as my primary
        driver, and like to tinker around with new, free and open-source
        projects.
      </Section>
      <Section title='Skills'>
        <ul className='list-disc list-inside'>
          <li>HTML/CSS</li>
          <li>Javascript</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>C/C++</li>
          <li>Rust</li>
          <li>Python</li>
          <li>R</li>
          <li>Bash scripting</li>
          <li>LaTeX</li>
          <li>groff/nroff</li>
        </ul>
      </Section>
      <Section title='On the Web'>
        <ul>
          <IconLink icon={<GrGithub />} link='https://github.com/sabyabhoi/'>
            @sabyabhoi
          </IconLink>
          <IconLink
            icon={<GrLinkedin />}
            link='https://www.linkedin.com/in/sabyabhoi/'
          >
            sabyabhoi
          </IconLink>
          <IconLink icon={<MdEmail />} link='mailto:sabyabhoi@gmail.com'>
            sabyabhoi@gmail.com
          </IconLink>
        </ul>
      </Section>
    </div>
  );
};

const Section = ({ children, title }) => {
  return (
    <div className='pb-2 flex flex-col items-start'>
      <h2 className='header'>{title}</h2>
      {children}
    </div>
  );
};

const IconLink = ({ icon, link, children }) => {
  return (
    <li className='flex flex-row items-center gap-x-3 my-2'>
      {icon}
      <Link href={link}>
        <div className='font-bold text-cyan-800 dark:text-cyan-200 no-underline hover:underline'>
          {children}
        </div>
      </Link>
    </li>
  );
};

export default Home;
