/*
Geração de dados Fake com node + faker.io
 - Instale o node
 - Instale o npm
 - Crie uma pasta do projeto
 - Entre na pasta
 - Instale o faker via npm: npm install faker
 - Copie este arquivo dentro da pasta
 - execute via cmd: node app.js

 Documentação: https://github.com/Marak/faker.js

*/


var faker = require('faker');
var fs = require('fs');

var header = 'NOME;IDADE;ENDERECO;MEDALHA';
var separator = "';'";
var bof = eof = "'";
var CRLF = '\r\n';

var fileContent = header;
console.log(header);

for(i=0;i<10;i++){

    var line = 
           
           faker.name.findName() + separator + 
           faker.random.number() + separator +
           faker.address.streetAddress() + separator +
           faker.random.arrayElement(["OURO","PRATA","BRONZE","SEM MEDALHA"]) + separator + // faker.random.arrayElement( [option 1, ..option N] ) 
           faker.random.number({"min":3, "max":20}) + separator + //faker.random.number(range) or faker.random.number({"min":x , "max":y})
           faker.finance.amount(9000,10000,4) + separator + //faker.finance.amount(min,max,decimal places)
           faker.random.alphaNumeric(3)  //faker.random.alphaNumeric( NUMBER_OF_RANDOM_CHARS)      
           
           
        ;

    line = bof + line + eof;
    fileContent += line + CRLF;
    console.log(line);
}

fs.writeFile("./script.csv", fileContent, "UTF-8", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
