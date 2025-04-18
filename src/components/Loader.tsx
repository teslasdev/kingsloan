// ProgressLoader.jsx


const ProgressLoader = ({ isLoading }: any) => {
  return (
    <div className={`progress-loader ${isLoading ? "active" : ""}`}>
      <div className="progress-bar"></div>
    </div>
  );
};

export default ProgressLoader;
