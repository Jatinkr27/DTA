let usersArray = [{uname :  "steve jobs", email :  "STevE@gmail.com",  cardId  :  ""},
{uname :  "ram charan", email :  "ram@Hotmail.com",  cardId  :  ""},
{uname :  "mahesh babu", email :  "baBu@YahoO.com",  cardId  :  ""},
{uname :  "vinay pichai", email :  "pichai@gmail.com",  cardId  :  ""},
{uname :  "sangam nadella", email :  "NADELLA@gmail.com",  cardId  :  ""}];



const jsConvert = require('js-convert-case');
const { v4: uuidv4 } = require('uuid');


for(let item of usersArray)
{
    item.cardId = uuidv4(); 
    console.log(
        " User Id : "+jsConvert.toHeaderCase(item.uname)+
        ", Email : "+ jsConvert.toLowerCase(item.email)+
        ", Card ID : "+jsConvert.toUpperCase(item.cardId));
    
}


