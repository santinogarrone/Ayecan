const Container = ({ children, className = "" }) => {
  return (
    <div className={`mx-auto max-w-[1600px] px-6 ${className}`}>{children}</div>
  );
};

export default Container;
