import { JSX } from 'solid-js/jsx-runtime';

const Banner = ({children}: {children: JSX.Element}) => {
  let style = {
    'padding-block': '2rem',
    display: 'grid',
    'place-items': 'center',
    'font-size': '2rem',
  };
  return (
    <div style={style}>
      <h1>{children}</h1>
    </div>
  );
};

export default Banner;
