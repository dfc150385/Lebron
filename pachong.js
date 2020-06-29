const fs = require("fs");
const cheerio = require("cheerio");
const axios = require("axios").default;
let goods1 = [];
axios
  .get(
    "http://www.dindin.com/?sort_product/index/gid/10010/sub_gid/10096/end_gid/0"
  )
  .then((res) => {
    // console.log(res.data);
    const $ = cheerio.load(res.data);
    console.log(
      $(".goods-list-warp ul")
        .find("li")
        .each(function (index) {
          let goods = {};
          goods.instruction = $(this).find(".p-name a").text();
          goods.img =
            `http://www.dindin.com/` +
            $(this).find(".p-img a").find("img").attr("src");
          goods.price = $(this).find(".p-price").text();
          goods1.push(goods);
        })
    );
    fs.writeFileSync("./goods.json", JSON.stringify(goods1));
  });
