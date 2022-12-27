const magic = () => {
    return new Date();
  };
  const magic = () => {
    return new Date();
  };
/* ---------------------------*/
const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
  };
  
  console.log(myConcat([1, 2], [3, 4, 5]));
  /* "use strict" belirlediğimiz fonksiyonun dışına çıkmaz.,---concat-> iki diziyi birleştirir */
  /* ---------------------------*/
const increment = (number, value = 1) => number + value;

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
  /*increment arttırmadır*/
    /* ---------------------------*/

