

// eslint-disable-next-line react/prop-types
function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div className="bg-green-500 h-4 rounded-full" style={{ width: `${progress}%` }}></div>
    </div>
  );
}

export default ProgressBar;
