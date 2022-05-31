import { JSX } from 'solid-js/jsx-runtime';
import styles from './IconLink.module.css';

interface LinkProps {
  title: string;
  link: string;
  children: JSX.Element;
}

const IconLink = ({ title, link, children }: LinkProps) => {

  return (
    <li>
      <a href={link} class={styles.link}>
        <div>{children}</div>
        <div>{title}</div>
      </a>
    </li>
  );
};

export default IconLink;
