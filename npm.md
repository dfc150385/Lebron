## npm

npm 是 nodejs 的包管理工具。千万千万别再用 cnpm 了

```bash
# npm安装插件的时候会特别慢，可以通过设置淘宝镜像来解决这个问题
npm i nrm -g # 安装一个nrm模块，用来切换npm的仓库镜像地址
nrm ls # 列出当前可以使用的镜像仓库地址
nrm use taobao # 设置当前的安装仓库镜像地址为淘宝镜像， 此操作在一台电脑只需要设置一次就好
```

## npm 中常用的命令

```bash
npm init # 初始化一个node项目
npm i xx # 安装依赖项
npm i xx -g # 全局安装
npm i xx@version # 安装指定版本的模块
npm uninstall xx # 卸载模块
```

## nodejs 执行文件

```bash
node xx # node加文件名
```
