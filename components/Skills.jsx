import Section from './Section';

const Skills = () => {
  return (
    <Section title='Skills'>
      <ul className='list-disc list-inside columns-2 gap-12'>
        <li>HTML/CSS</li>
        <li>Javascript/Typescript</li>
        <ul className='list-disc list-inside px-4'>
          <li>React.js</li>
          <li>Next.js</li>
        </ul>
        <li>C/C++</li>
        <li>Rust</li>
        <li>Python</li>
        <li>R</li>
        <li>Bash scripting</li>
        <li>LaTeX</li>
        <li>groff/nroff</li>
      </ul>
    </Section>
  );
};

export default Skills;
