## fs

FileSystem 文件系统，是 nodejs 中的一个很常用的基础模块，可以操作系统文件

```js
// commonJS
const fs = require("fs"); // 引入fs模块
// require引入模块的时候会先从系统内置模块(包)中查找模块名
//  然后再去node_modules目录中查找，node_modules文件夹是我们通过npm i 安装的第三方依赖所在的目录
//  最后在当前项目中查找
```
