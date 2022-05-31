import Banner from '../components/Banner';
import { JSX } from 'solid-js/jsx-runtime';
import styles from './Projects.module.css';
import { createSignal, For, Show } from 'solid-js';
import { useTheme } from '../ThemeProvider';

const Card = ({
  title,
  url,
  children,
}: {
  title: string;
  url: string;
  children: JSX.Element;
}) => {
  const [dark, setDark] = useTheme();
  const [hover, setHover] = createSignal(false);

  return (
    <div
      class={styles.card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => window.open(url)}
      style={{ 'background-color': dark() ? '#282f3c' : '#e5e4d6' }}
    >
      <div class={styles.content}>
        <Show when={hover()} fallback={<h1>{title}</h1>}>
          <p>{children}</p>
        </Show>
      </div>
    </div>
  );
};

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
