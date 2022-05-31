import { Link } from 'solid-app-router';
import { BsMoonFill, BsSunFill } from 'solid-icons/bs';
import { useTheme } from '../ThemeProvider';

const Navbar = () => {
  const [dark, setDark] = useTheme();

  let headerStyle = {
    padding: '1rem',
    'padding-inline': '0.5rem',
    display: 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-between',
    'align-items': 'center',
		'column-gap': '4rem'
  };

  return (
    <header style={headerStyle}>
        <Link href='/'>Sabyasachi Bhoi</Link>
			<span style={{'flex-grow': 1}}/>
        <Link href='/projects' style={{'font-weight': 'normal'}}>Projects</Link>
      <button onclick={() => setDark(!dark())}>
        {dark() ? <BsSunFill /> : <BsMoonFill />}
      </button>
    </header>
  );
};

export default Navbar;
