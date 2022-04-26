// const container = document.querySelector('.container');

// function randomLog(text, callback) {
//   setTimeout(() => {
//     container.innerHTML += `${text}\n`;
//     callback();
//   }, Math.round(Math.random() * 10000));
// }

// const arr = [];

// for(let i = 0; i < 5; ++i) {
//   arr.push(i);
// }

// arr.reduceRight((acc, element) => {
//   return () => {
//     randomLog(element, acc);
//   }
// }, () => {})();

// const container = document.querySelector('.container');

// function randomLog(text) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       container.innerHTML += `${text}\n`;
//       resolve();
//     }, Math.round(Math.random() * 10000));
//   });
// }

// const arr = [];

// for(let i = 0; i < 5; ++i) {
//   arr.push(i);
// }

// randomLog(0)
//   .then(() => randomLog(1))
//   .then(() => randomLog(2))
//   .then(() => randomLog(3));

// arr.reduce((acc, element) => {
//   return acc.then(() => randomLog(element));
// }, Promise.resolve());

// const container = document.querySelector('.container');

// function randomLog(text) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       container.innerHTML += `${text}\n`;
//       resolve();
//     }, Math.round(Math.random() * 10000));
//   });
// }

// async function run(max) {
//   for(let i = 0; i < max; ++i) {
//     await randomLog(i);
//   }
// }

// async function waitRun(max) {
//   await run(max);
//   container.innerHTML += 'finish\n';
// }

// waitRun(5);


const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');

function randomLog(text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, Math.round(Math.random() * 10000));
  });
}

async function run(max) {
  for(let i = 0; i < max; ++i) {
    container.innerHTML += `${await randomLog(i)}\n`;
  }
}

function anotherRun(max) {
  const arr = [];

  for(let i = 0; i < max; ++i) {
    arr.push(randomLog(i));
  }

  Promise.all(arr).then((newArray) => {
    newArray.forEach((item) => {
      container2.innerHTML += `${item}\n`;
    });
  });
}

run(5);
anotherRun(5);