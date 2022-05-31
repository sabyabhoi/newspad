import { Component } from 'solid-js';

import Navbar from './components/Navbar';
import Home from './routes/Home';
import styles from './App.module.css';
import { useTheme } from './ThemeProvider';

//class={(dark() ? styles.dark : styles.light) + ' ' + styles.App}
// <Navbar dark={dark} setDark={setDark}/>

const App: Component = () => {
	const [dark, setDark] = useTheme();
  return (
    <div class={(dark() ? styles.dark : styles.light) + ' ' + styles.App}>
      <main>
				<Navbar/>
				<Home />
      </main>
    </div>
  );
};

export default App;
