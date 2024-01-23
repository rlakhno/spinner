const array = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
process.stdout.write('-> d2 spinner1.js\n');
let time = 100;
for (let item of array) {
  setTimeout(() => {
    process.stdout.write(`\r${item}   `);
  }, time);
  time += 200;
}
setTimeout(() => {
  process.stdout.write('\n-> d2   \n');
}, time);