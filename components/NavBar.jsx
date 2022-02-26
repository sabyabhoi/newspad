import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';

const NavBar = ({ theme, setTheme }) => {

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}

  return (
    <div className='flex flex-row justify-between py-4 items-center'>
      <div className='font-bold text-lg'>Sabyasachi Bhoi</div>
      <button
        className='p-3 outline-none hover:outline-gray-400 rounded-lg'
        onClick={handleThemeSwitch}
      >
        {theme === 'light' ? <BsFillMoonFill /> : <BsSunFill/>}
      </button>
    </div>
  );
};

export default NavBar;
