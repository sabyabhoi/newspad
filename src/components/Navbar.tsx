import { BsMoonFill, BsSunFill } from 'solid-icons/bs';
import { useTheme } from '../ThemeProvider';

const Navbar = () => {
	const [dark, setDark] = useTheme();

  let headerStyle = {
    "padding": "1rem",
    "padding-inline": "0.5rem",
    "display": "flex",
    "flex-direction": "row",
    "justify-content": "space-between",
    "align-items": "center",
  };

  return (
    <header style={headerStyle}>
      <b>Sabyasachi Bhoi</b>
      <button onclick={() => setDark(!dark())}>{dark() ? <BsSunFill/> : <BsMoonFill/>}</button>
    </header>
  );
};

export default Navbar;
