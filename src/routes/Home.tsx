import Section from '../components/Section.tsx';
import IconLink from '../components/IconLink.tsx';
import { Accessor, Setter } from 'solid-js';
import { BsGithub, BsLinkedin, BsEnvelopeFill } from 'solid-icons/bs';

const Banner = () => {
  let style = {
    'padding-block': '2rem',
    display: 'grid',
    'place-items': 'center',
    'font-size': '2rem',
  };
  return (
    <div style={style}>
      <h1>Hi, I'm Sabya.</h1>
    </div>
  );
};

const Work = () => {
  return (
    <Section title='Work'>
      I'm a second-year engineering student at Birla Institute of Technology and
      Science. I'm a Linux enthusiast. I use GNU/Linux as my primary driver, and
      like to tinker around with new, free and open-source projects. I'm
      currently an intern at <a href='onfinance.in'>OnFinance</a>
    </Section>
  );
};
const Skills = () => {
  return (
    <Section title='Skills'>
      <ul>
        <li>C/C++</li>
        <li>Rust</li>
        <li>GoLang</li>
        <li>Python</li>
        <ul>
          <li>Pandas</li>
          <li>Matplotlib</li>
          <li>Scikit-Learn</li>
          <li>Tensorflow</li>
        </ul>
        <li>R</li>
        <li>HTML/CSS</li>
        <li>Javascript/Typescript</li>
        <ul>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Solid.js</li>
          <li>Svelte</li>
        </ul>
        <li>Dart/Flutter</li>
        <li>Bash scripting</li>
        <li>LaTeX</li>
        <li>groff/nroff</li>
      </ul>
    </Section>
  );
};

const Links = () => {
  return (
    <Section title='On The Web'>
      <ul
        style={{
          'list-style': 'none',
        }}
      >
        <IconLink link='#' title='@sabyabhoi'>
          <BsGithub />
        </IconLink>
        <IconLink
          link='https://www.linkedin.com/in/sabyabhoi/'
          title='sabyabhoi'
        >
          <BsLinkedin />
        </IconLink>
        <IconLink link='mailto:sabyabhoi@gmail.com' title='sabyabhoi@gmail.com'>
          <BsEnvelopeFill />
        </IconLink>
      </ul>
    </Section>
  );
};

const Home = () => {
  return (
    <div style={{ 'padding-bottom': '1.5rem' }}>
      <Banner />
      <Work />
      <Skills />
      <Links />
    </div>
  );
};

export default Home;
