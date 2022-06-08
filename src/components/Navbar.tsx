import { Link } from 'solid-app-router';
import { BsMoonFill, BsSunFill } from 'solid-icons/bs';
import { FaSolidProjectDiagram } from 'solid-icons/fa';
import { useTheme } from '../ThemeProvider';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [dark, setDark] = useTheme();

  return (
    <header>
      <Link href="/projects" class={styles.menubtn}>
        <FaSolidProjectDiagram size='18px' />
      </Link>
      <Link href='/' class={styles.title}>Sabyasachi Bhoi</Link>
      <span class={styles.space} />
      <Link href='/projects' class={styles.project}>
        Projects
      </Link>
      <button onclick={() => setDark(!dark())}>
        {dark() ? <BsSunFill /> : <BsMoonFill />}
      </button>
    </header>
  );
};

export default Navbar;
