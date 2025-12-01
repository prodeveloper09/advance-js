const students = [
  { id: 21, name: "Omar sunny" },
  { id: 31, name: "Maannaaa" },
  { id: 41, name: "Moyouri" },
  { id: 71, name: "DeepJol" },
];
const output = [];
for (let i = 0; i < students.length; i++) {
  const element = students[i];
  const sName = element.name;
  output.push(sName);
}

console.log(output);

function sNames(element){
   return element.name;
    
}

const sName = students.map(sNames);
console.log(sName);

const sName2 = students.map(x => x.name);
console.log(sName2);

const ids = students.map(i => i.id);
console.log(ids);

const idFilter = students.filter(i => i.id > 40);
console.log(idFilter);

const idFind = students.find(i => i.id > 40);
console.log(idFind);