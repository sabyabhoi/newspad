import { JSX } from 'solid-js/jsx-runtime';
import { useTheme } from '../ThemeProvider';
import { createSignal, Show } from 'solid-js';
// import styles from './Projects.module.css';

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
  // class={styles.card}

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => window.open(url)}
      style={{
        'background-color': dark() ? '#282f3c' : '#e5e4d6',
        display: 'grid',
        'place-items': 'center',
        'min-height': '12rem',
      }}
    >
      <div >
        <Show when={hover()} fallback={<h1>{title}</h1>}>
          <p>{children}</p>
        </Show>
      </div>
    </div>
  );
};

export default Card;
