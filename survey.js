

const readline = require('readline'); //readline module ---read one line at a time

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// .question(query, callback) is a function
/*test 1

           rl.question('What do you think of Node.js? ', (answer) => {
  //TO DO: log the answer in a database. 
            console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close(); //close function
});

//pritnt out 'What do you think of Node.js?' Can type the answer into terminal. Click enter -->displayed the consol.log string: "Thank you for your valuable ?feedback": answer (provided)

*/


rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  console.log(`Thank you for your answer: ${answer}`);

  rl.close(); //close function
});