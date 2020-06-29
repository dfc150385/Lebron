const fs = require("fs");
// 同步的方式写入文件
//  参数一表示文件名
//  参数二表示文件内容
fs.writeFileSync("./你好.txt", "我是一段文字，很长很长。。。");
console.log("同步的写文件");

// 异步写文件
fs.writeFile("./你好2.txt", "我还是一段文字", function (e) {
  if (e) {
    console.log(e);
  } else {
    console.log("写入完成");
  }
});
console.log("写文件");
