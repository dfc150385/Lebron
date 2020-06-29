const fs = require("fs");

// 同步的方式读取文件
//  文件路径
const res = fs.readFileSync("./people.json").toString();
// console.log(res);
// console.log(JSON.parse(res).length);
const people = JSON.parse(res);
let str = "<ul>";
people.forEach((people) => {
  str += `<li>${people.name}</li>`;
});
str += "</ul>";
fs.writeFileSync("./people.html", str); // 可以在文件夹里里面生成一个网页文件
// 可以在文件夹里里面生成一个网页文件
