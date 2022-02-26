import Head from 'next/head';

import NavBar from '../components/NavBar';
import Work from '../components/Work';
import Skills from '../components/Skills';
import Web from '../components/Web';

import useTheme from '../components/useTheme';

const Home = () => {
	const [theme, setTheme] = useTheme('dark');

  return (
    <div className='container mx-auto flex flex-col w-11/12 lg:w-9/12'>
      <NavBar theme={theme} setTheme={setTheme}/>
      <Head>
        <title>Sabya&apos;s website</title>
      </Head>

      <div className='flex flex-row justify-center'>
        <h1 className='text-6xl font-bold py-2 my-10'>Hi, I&apos;m Sabya.</h1>
      </div>

      <Work />
      <Skills />
      <Web />
    </div>
  );
};

export default Home;
