console.log("1. Je regle le miniteur");

setTimeout(() => {
  console.log("2. DING ! le miniteur sonne");
}, 10000);
console.log("3. Je continue a cuisiner");

console.log("A. avant");
setTimeout(() => {
  console.log("B. miniteur a 0ms");
}, 0);
console.log("C. après");
