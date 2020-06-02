const  fs=require('fs');

const dataBuffer=fs.readFileSync("newfile.json")
const jsonObject=JSON.parse(dataBuffer);
jsonObject.name="karan nakra";
jsonObject.age="22";
const objctToJson=JSON.stringify(jsonObject);
fs.writeFileSync("newfile.json",objctToJson)
console.log(jsonObject);



