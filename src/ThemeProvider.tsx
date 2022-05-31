import { createContext, createSignal, useContext } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

const ThemeContext = createContext();

export const ThemeProvider = (props: {
  dark: boolean;
  children: JSX.Element;
}) => {
  const [dark, setDark] = createSignal(props.dark || false);
  const store = [dark, setDark];

  return (
    <ThemeContext.Provider value={store}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
