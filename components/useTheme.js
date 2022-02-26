import { useState, useEffect } from "react";

const useTheme = (initialValue) => {
	const [theme, setTheme] = useState(initialValue);

	useEffect(() => {
		localStorage.setItem('theme', theme);
		if(theme === 'dark')
			document.documentElement.classList.add('dark');
		else 
			document.documentElement.classList.remove('dark');
	}, [theme]);

	return [theme, setTheme];
};

export default useTheme;
