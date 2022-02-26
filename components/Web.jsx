import Section from './Section';
import { GrLinkedin, GrGithub } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';

const Web = () => {
  return (
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
  );
};

const IconLink = ({ icon, link, children }) => {
  return (
    <li className='flex flex-row items-center gap-x-3 my-2'>
      {icon}
      <a href={link}>
        <div className='font-bold text-cyan-800 dark:text-cyan-200 no-underline hover:underline'>
          {children}
        </div>
      </a>
    </li>
  );
};

export default Web;
