/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';

import './index.css';
import App from './App';
import { ThemeProvider } from './ThemeProvider';

render(
  () => (
    <ThemeProvider dark={true}>
      <Router>
      	<App />
      </Router>
    </ThemeProvider>
  ),
  document.getElementById('root') as HTMLElement
);
