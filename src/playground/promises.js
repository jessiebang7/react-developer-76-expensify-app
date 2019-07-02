const promise = new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve({a: "aaa", b: "bbb"});
    // reject('Something went wrong');
  }, 3000);  
});

console.log('before');

promise.then((data)=> {
  console.log('1', data);
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve("This is my other promise");
    }, 3000);  
  });
}).then((str)=> {
  console.log('2', str);
}).catch(error => {
  console.log('error:', error);
});

console.log('after');