// challenge 20 : Module to Export a Method Inside an Object
const methodObj = {
  isDriving(name) {
    return `${name} is driving.`;
  },
  isWalking(name) {
    return `${name} is walking.`;
  },
  isWorking(name) {
    return `${name} is working.`;
  }
};

export default methodObj;
