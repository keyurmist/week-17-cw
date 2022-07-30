// TODO: Add a comment describing what the `position` parameter means for this function.
// whatever the index of the fibonacci sequence we want
const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement.
  // if the position is less than 2 return the value of position
  if (position < 2) {
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.
  // returns a value from the fibonacci sequence which one lower and two lower than the position added together
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: What will this return?
// 34
console.log(fibonacci(9));
