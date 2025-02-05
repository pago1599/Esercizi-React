export const Message = ({ age }) => {
  return age > 18 ? <p>Your age is {age}</p> : <p>You are very young!</p>;
};
