console.log('Starting app');

//takes 2 arguements
//call back function, and wait time in milliseconds
setTimeout(() =>{
  console.log('inside of callback');
},2000);

setTimeout(()=>{
  console.log('too fast for you!');
},0);

console.log('finishing up');
