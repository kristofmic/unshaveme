const names = [
  'Groot',
  'Rocket Racoon',
  'Starlord',
  'Nebula',
  'Drax',
  'Gamora',
  'Mantis',
];

let nameIndex = 1;

export function setWhoIAm() {
  return {
    type: 'IAM',
    payload: names[++nameIndex % names.length],
  };
}
