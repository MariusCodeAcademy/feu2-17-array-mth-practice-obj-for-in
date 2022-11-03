'use strict';
console.log('pr1.js');

const numbers = [1, 2, 3, 5.3, 8, -8, -5.5, -6, -16, -5, -9, 4.2, 5, 12, -6, 45];

const nums2 = [2, 5, -10, 'one', true, 7, 'two', 1];

// 1. numbers masyvo atrinkti ir grazinti tik sveikuosius skaicius

// 2. susumuoti visa numbers masyva.

// 3. Grazinti nauja masyva kuriame yra objektai
// [
//   {index: 0, reiksme: 1}
//   {index: 1, reiksme: 2}
//    ...
// ]
const arrayOfObjs = numbers.map((sk, idx) => {
  const objFromSk = { index: idx, reiksme: sk };
  return objFromSk;
});

const arrayOfObjsOneLine = numbers.map((sk, idx) => ({ index: idx, reiksme: sk }));
console.log('arrayOfObjs ===', arrayOfObjs);
console.log('arrayOfObjsOneLine ===', arrayOfObjsOneLine);

// 4. grazinti nauja masyva su Suapvalintom reikšmem iki sveikų skaičių

// 5. isrikiuoti numbers masyva nuo didziausio iki maziausio
numbers.sort((a, b) => a - b);
console.log('numbers ===', numbers);
// 6. is nums2 masyvo atrinkti tik skaiciu masyva ir grazinti jo vidurki

// 7. patiktinti ar nums2 masyve yra elementu kurie butu ne skaiciau ir ne string tipo.
