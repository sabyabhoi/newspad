const Section = ({ children, title }) => {
  return (
    <div className='pb-2 flex flex-col items-start'>
      <h2 className='header'>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
