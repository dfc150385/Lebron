const fs = require("fs");
fs.mkdirSync("./data/20200629", {
  recursive: true, // 循环进行创建
}); // 创建文件夹

// nodejs的很多操作都是异步
//  在异步操作的回调函数中 第一个参数表示异常信息
//  nodejs的默认机制是错误优先

// 异步的创建目录
fs.mkdir(
  "./data/2020",
  {
    recursive: true,
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("完成");
    }
  }
);

// 异步的创建目录
fs.mkdir(
  "./data/2020",
  {
    recursive: true,
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("完成");
    }
  }
);

const stat = fs.statSync("./你好2.txt");
console.log(stat);

// existsSync判断指定的文件是否存在
console.log(fs.existsSync("./books"));
