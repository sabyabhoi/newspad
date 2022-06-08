import Banner from '../components/Banner';
import Card from '../components/Card';
import styles from './Projects.module.css';
import { For } from 'solid-js';

const ProjectGrid = () => {
  const projects = [
    {
      title: 'WorkItOut',
      desc: 'A pomodoro app for focussing on your tasks',
      url: 'https://github.com/sabyabhoi/WorkItOut',
    },
    {
      title: 'boi-ctf',
      desc: 'A CTF app made with GoLang',
      url: 'https://github.com/sabyabhoi/boi-ctf',
    },
    {
      title: 'BoiChat',
      desc: 'A chat app created with SupaBase',
      url: 'https://github.com/sabyabhoi/BoiChat',
    },
    {
      title: 'sabyabhoi.xyz',
      desc: 'Personal portfolio website created with Solid.JS',
      url: 'https://sabyabhoi.xyz/',
    },
  ];

  return (
    <div class={styles.projectgrid}>
      <For each={projects}>
        {(project) => (
          <Card title={project.title} url={project.url}>
            {project.desc}
          </Card>
        )}
      </For>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <Banner>Projects</Banner>
      <ProjectGrid />
    </div>
  );
};

export default Projects;
