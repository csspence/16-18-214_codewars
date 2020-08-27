/*
For this Kata you will have to forget how to add two numbers together.

In simple terms our method does not like the principle of carrying over numbers and just writes down every number it calculates.
*/

const add = (num1, num2) => {
  let string1 = num1.toString();
  let string2 = num2.toString();
  let sum = [];
  let ind1 = string1.length - 1;
  let ind2 = string2.length - 1;
  while(ind1 > -1 && ind2 > -1) {
    sum.unshift((Number(string1[ind1]) + Number(string2[ind2])).toString());
    ind1--;
    ind2--;
    console.log(sum);
  }
  if(ind1 === -1) {
    let remainder = string2.slice(0, ind2+1);
    sum.unshift(remainder)
  }
  if(ind2 === -1) {
    let remainder = string1.slice(0, ind1+1);
    sum.unshift(remainder)
  }

  return Number(sum.join(''));
}