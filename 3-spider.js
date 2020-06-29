const fs = require("fs");
const cheerio = require("cheerio");
const axios = require("axios").default; // 发起一个网络请求获取数据
// cheerio.load 把一个字符串转换为一个类似于jQ的对象
// const $ = cheerio.load(`<div class="content">
//     <h1>我是一个h1标签</h1>
//     <p>我是一个p标签</p>
//     </div>`);

// console.log($("p").text());
const books = [];
axios
  .get(
    "https://www.17k.com/top/refactor/top100/01_subscribe/01_subscribe__top_100_pc.html"
  )
  .then((res) => {
    const $ = cheerio.load(res.data);
    // console.log($("title").text());
    $(".BOX")
      .eq(0) // 获取指定索引位置的数据，返回一个jq实例
      .find("table tr") // find 查找符合元素选择条件的数据
      .each(function (index) {
        if (index > 0) {
          // 不取第一项
          // console.log($(this).find("td").eq(2).find("a").text());
          let book = {};
          book.id = index;
          book.title = $(this).find("td").eq(2).find("a").text();
          book.link =
            `https:` + $(this).find("td").eq(2).find("a").attr("href");
          fs.mkdirSync("./books/" + book.title, {
            recursive: true,
          });
          books.push(book);
        }
      });
    fs.writeFileSync("./books.json", JSON.stringify(books));
  });
