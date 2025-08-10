// challenge 26 : Mixing Named and Default Exports

export function dog(name) {
  return `${name} is barking! `;
}
export function cat(name) {
  return `${name} is meowing! `;
}

export default function defaultAnimal(name) {
  return `${name} is an unknown animal `;
}
