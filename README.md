<h1 align="center" style="margin: 30px 0 30px; font-weight: bold;">Tiny Web</h1>
<h4 align="center">基于yeoman实现的Generator</h4>

## 简介

* 本仓库基于[Yeoman](https://yeoman.io/)自定义了自己的 Generator
* 所以需要配合 [Yeoman](https://www.npmjs.com/package/yo) 使用
* 可以快速创建一个 react 或 vue 的练习项目

## 如何使用

```bash
# 先安装 yeoman
npm install -g yo

# 再安装 generator
npm install -g generator-tiny-web

# 开始创建项目
yo tiny-web

# 进入你创建的项目目录
cd ./xx/

# 安装依赖包
npm install

# 运行创建好的项目
npm run start