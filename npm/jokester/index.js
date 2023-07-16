const jokes=require('give-me-a-joke');

const colors=require('colors');
jokes.getRandomDadJoke (function(joke) {
     console.log(joke.rainbow);
});
//npm install for install all the dependencies from the package.json file
//npm init for creating package.json file
