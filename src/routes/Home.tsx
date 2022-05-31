import Section from '../components/Section';
import IconLink from '../components/IconLink';
import { BsGithub, BsLinkedin, BsEnvelopeFill } from 'solid-icons/bs';
import Banner from '../components/Banner';

const Work = () => {
  return (
    <Section title='Work'>
      I'm a second-year engineering student at Birla Institute of Technology and
      Science. I'm a Linux enthusiast. I use GNU/Linux as my primary driver, and
      like to tinker around with new, free and open-source projects. I'm
      currently an intern at <a href='https://onfinance.in/'>OnFinance</a>.
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
        <IconLink link='https://github.com/sabyabhoi/' title='@sabyabhoi'>
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
      <Banner>Hi, I'm Sabya.</Banner>
      <Work />
      <Skills />
      <Links />
    </div>
  );
};

export default Home;
