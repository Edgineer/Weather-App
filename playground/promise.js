var asyncAdd = (a,b) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (typeof a==='number' && typeof b==='number') {
        resolve(a + b);
      } else {
        reject('Arguements must be numbers');
      }
    },1500);
  });
};

asyncAdd(213,77).then((res) => {
  console.log('Result:', res);
}, (errorMessage) => {
    console.log(errorMessage);
});

// var somePromise = new Promise ((resolve,reject) => {
//   setTimeout(() => {
//   //resolve('It worked!');
//   reject('Unable to fulfill promise');
//   }, 2500);
// });
//
// somePromise.then((message) => {
//   console.log('Success: ',message);
// }, (errorMessage) => {
//   console.log('Error:',errorMessage);
// });
