/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import { ThemeProvider } from './ThemeProvider';

render(
  () => (
    <ThemeProvider dark={true}>
      <App />
    </ThemeProvider>
  ),
  document.getElementById('root') as HTMLElement
);
