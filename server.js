// this file isintentinally build to learn ablout node js clustering : used for scalability and allow the single node application to use multiple cpu cores

const cluster = require('node:cluster');
const os = require('node:os');

const numsCpus = os.cpus().length;
console.log('number of cpus is :' + numsCpus);


if(cluster.isPrimary){
  for(let i=0;i<numsCpus;i++){
    cluster.fork(); // create a worker process
  }
}
else {
  require('./index'); // each worker will run the index.js file
}



