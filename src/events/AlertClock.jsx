export const AlertClock = ({ alert }) => {
  return (
    <div className="flex justify-center p-4">
      <button
        className="text-4xl text-blue-400 bg-gray-300 rounded-xl p-6 border-2"
        onClick={alert}
      >
        Time
      </button>
    </div>
  );
};
