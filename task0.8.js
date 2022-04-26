function convertTime(val)
 { 
  let hours = Math.floor(val / 60);  
  let minutes = val % 60;
  return hours + ":" + minutes;         
}

console.log(convertTime(90));
console.log(convertTime(600));
console.log(convertTime(2002));
