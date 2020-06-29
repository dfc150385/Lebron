// const fs = require("fs");
const cheerio = require("cheerio");
const axios = require("axios").default; // 发起一个网络请求获取数据
// cheerio.load 把一个字符串转换为一个类似于jQ的对象
// const $ = cheerio.load(`<div class="content">
//     <h1>我是一个h1标签</h1>
//     <p>我是一个p标签</p>
//     </div>`);

// console.log($("p").text());
axios
  .get(
    "https://www.17k.com/top/refactor/top100/01_subscribe/01_subscribe__top_100_pc.html"
  )
  .then((res) => {
    const $ = cheerio.load(res.data);
    // console.log($("title").text());
    $(".BOX");
  });
