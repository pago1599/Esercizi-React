import { Message } from "./Message";

const Hello = () => {
  return (
    <div>
      <h2 className="bg-amber-400 text-amber-700 text-4xl flex justify-center p-4">
        Hello, World!
      </h2>
      <Message />
    </div>
  );
};

export default Hello;
