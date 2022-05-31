import { JSX } from 'solid-js/jsx-runtime';
import { useTheme } from '../ThemeProvider';
import styles from './IconLink.module.css';

interface LinkProps {
  title: string;
  link: string;
  children: JSX.Element;
}

const IconLink = ({ title, link, children }: LinkProps) => {
  const [dark, setDark] = useTheme();

  return (
    <li>
      <a
        href={link}
        class={styles.link}
				style={{color: (dark() ? 'rgb(165, 243, 252)' : 'rgb(21, 94, 117)')}}
      >
        <div>{children}</div>
        <div>{title}</div>
      </a>
    </li>
  );
};

export default IconLink;
