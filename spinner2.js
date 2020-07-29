const spinner2 = function (delay) {
  process.stdout.write('hello from spinner2.js... \rheyyy\n');
  let animationArray = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
  let counter = 0;
  for (let iteration of animationArray) {
    //console.log(animationArray[iteration])
    setTimeout(() => {
      process.stdout.write(iteration);
    }, counter = counter + delay);
  }
};
spinner2(750);


// setTimeout(() => {  
//   process.stdout.write("\r/   ");
// }, 300);

// setTimeout(() => {
//   process.stdout.write("\r-   ");
// }, 500);

// setTimeout(() => {
//   process.stdout.write("\r\\   ");
// }, 700);

// let animationArray = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
// const spinner2 = function (delay) {
//   process.stdout.write('hello from spinner2.js... \rheyyy\n');
//   let counter = 0;
//   for (iteration of animationArray) {
//     //console.log(animationArray[iteration])
//     setTimeout(() => {
//       process.stdout.write(iteration);
//     }, counter = counter + delay);
//   }
// };
// spinner2(750);

// for (let i = 0; i < animationArray.length; i++) {
//   delayTimer();
// }
//   let delayTimer() => {
//   setTimeout(function() {
//     process.stdout.write(iteration);
//   }, 1000