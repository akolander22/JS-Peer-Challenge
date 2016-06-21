var provided = 'Hello World!';

console.log(Number(provided === 'Hello World!'));
// this returns a number of 1

var provided = 'Hello World!';

console.log(Number(provided));
// returns NaN

var provided = 'Hello World!';

var myHello = provided.substring(0, 5);
console.log(myHello.split(''));

console.log(typeof provided);

console.log((provided.length)-3);

console.log(provided.charAt(1));

console.log(provided.toUpperCase());

console.log(provided.replace('!','?'));

var splitWord = provided.split('');
var answer = splitWord.reverse();
console.log(answer.join(''));
//couldn't get rid of the commas in the reverse

console.log(provided.split(' '));

var laterPart = (provided.length-1)*101;

console.log(laterPart.toString());
