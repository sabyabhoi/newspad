import Section from './Section';

const Skills = () => {
  return (
    <Section title='Skills'>
      <ul className='list-disc list-inside'>
        <li>HTML/CSS</li>
        <li>Javascript/Typescript</li>
        <ul className='list-disc list-inside px-5'>
          <li>React.js</li>
          <li>Next.js</li>
        </ul>
        <li>C/C++</li>
        <li>Rust</li>
        <li>Python</li>
        <ul className='list-disc list-inside px-5'>
          <li>Pandas</li>
          <li>Matplotlib</li>
          <li>Scikit-Learn</li>
          <li>Tensorflow</li>
        </ul>
        <li>R</li>
				<li>Dart/Flutter</li>
        <li>Bash scripting</li>
        <li>LaTeX</li>
        <li>groff/nroff</li>
      </ul>
    </Section>
  );
};

export default Skills;
