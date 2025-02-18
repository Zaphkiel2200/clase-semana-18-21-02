// Código to deep copy en un objeto  (object) ando medio pérdido xdgit in

let original = { a: 1, b: { c: 2 } };
let deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.b.c = 3;
console.log(original.b.c); 