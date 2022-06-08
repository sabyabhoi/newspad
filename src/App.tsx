import { Component } from 'solid-js';

import Navbar from './components/Navbar';
import Home from './routes/Home';
import Projects from './routes/Projects';
import styles from './App.module.css';
import { useTheme } from './ThemeProvider';
import { Route, Routes } from 'solid-app-router';

const App: Component = () => {
	const [dark, setDark] = useTheme();
  return (
    <div class={(dark() ? styles.dark : styles.light) + ' ' + styles.App}>
      <main>
				<Navbar/>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/projects" element={<Projects/>}/>
				</Routes>
      </main>
    </div>
  );
};

export default App;
