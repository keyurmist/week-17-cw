const buttons = document.getElementsByTagName("button");

const clickHandler = function () {
  // TODO: Add a comment describing the purpose of this variable.
  // this variable will be part of the click handler function
  let count = 0;

  // TODO: Add a comment describing what is happening.
  // this returns an inner function
  return function () {
    // TODO: Add a comment describing how this variable is being scoped.
    // increases the local scope count by 1
    count++;
    // TODO: Add a comment describing how we are using the 'count' variable.
    // this displays the count variable on the button
    this.textContent = `Clicks: ${count}`;
  };
};

// TODO: Add a comment describing the purpose of this loop.
// sets up a click handler for each button
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", clickHandler());
}
