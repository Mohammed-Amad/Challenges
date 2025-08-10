// challenge 21 : Encapsulated Counter Module
function createCounterModule() {
  let count = 0; 

  return {
    increment() {
      count++;
      return count;
    }
  };
}

export default createCounterModule;

