let operations = require("./index");
// console.log(operations);

operations.myFileWriter('mynewfile3.txt', 'Hello content!');
operations.myFileReader('mynewfile3.txt');
operations.myFileUpdater('mynewfile3.txt', 'This is my updated text in same file bysebfysbbebsfbssbvsybvybyevbybsdhdsbhvhdbvdshvbsydbvsyvysvgyvbyvb');
// operations.myFileReader('mynewfile3.txt');
operations.myFileDeleter('mynewfile3.txt')