// 1) Where is carNoise stored?
// GEC global execution context
const carNoise = "Honk";
// 2) Where is goFast stored?
// GEC Global execution context
const goFast = (speed) => {
  // 4) When is speed assigned a value? Where is this value stored?
  // When the function goFast is called then speed is assigned a value.
  // It is stored in the functions on memory, its' execution context.
  // 5) Where is makeNoise stored?
  // in the execution context of goFast
  const makeNoise = (sound) => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  };

  // 6) What happens in the following statement?
  // taking the global value of carNoise and placed on the stack to create
  // a new function execution context
  makeNoise(carNoise);
};

// 3) What happens in the following statement?
// once you click ok, it creates a FEC for goFast
if (confirm("Do you want to go fast?")) {
  goFast(80);
}
