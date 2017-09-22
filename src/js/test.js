new Promise(function (resolve, reject) {
   console.log('start');

   if(Math.random() * 10 > 5) {
       resolve('success');
   } else {
       reject('error');
   }
}).then(r => {
    console.log(r);
}).catch(err => console.log(err));