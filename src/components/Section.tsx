import { JSX } from 'solid-js/jsx-runtime';
import { useTheme } from '../ThemeProvider';
import styles from './Section.module.css';

interface SectionProps {
  title: string;
  children: JSX.Element;
}

const Section = ({ title, children }: SectionProps) => {
  const [dark, setDark] = useTheme();

  return (
    <section class={styles.info}>
      <h1 class={styles.title + ' ' + (dark() ? styles.dark : styles.light)}>
        {title}
      </h1>
      <div>{children}</div>
    </section>
  );
};

export default Section;
