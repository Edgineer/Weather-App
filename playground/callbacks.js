var getUser = (id, callback) => {
    var user = {
      id:id,
      name:'Testington'
    };
    setTimeout(()=>{
      callback(user);
    },3000);

};

getUser(31, (userObject) =>{
  console.log(userObject);
});

//getUser is a function that accepts two arguements (id, callback) callback is another function
//when we call getUser(31, (userObject) =>{console.log(userObject);}); we pass an entire function
//as the second parameter to getUser. inside getuser we named that arguement calback and we invoke The
//function passed in as the second arguement with callback()
