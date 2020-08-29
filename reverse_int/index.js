function reverseInt(n){
   const reversed =  n.toString().split('').reverse().join('')

   if(n < 0){
       return parseInt(reversed) * -1
   }

   return parseInt(reversed)
}

console.log(reverseInt(12345))
console.log(reverseInt(500))
console.log(reverseInt(-123))