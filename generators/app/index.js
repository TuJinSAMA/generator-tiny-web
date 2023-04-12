const Generator = require('yeoman-generator');

const fileList = [
  'package.json',
  '.gitignore',
  'server.js',
  'webpack.config.client.js',
  'webpack.config.server.js',
  'babel.config.js',
  'src/index.js',
  'src/style/index.styl'
]

const getFileList = libType => {
  const rootComponent = libType === 'react' ? 'src/App.jsx' : 'src/App.vue'
  return [...fileList, rootComponent]
}

module.exports = class extends Generator {
  // 在执行 yo sample 时 与用户交互并获取用户输入的数据
  prompting() {
    // 调用内置的 prompt() 方法可以设置交互
    // 该方法本身返回的是一个 promise 并接收一个数组 数组内是每一项交互的配置数据
    return this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Your project name:',
        default: 'tiny-web',
      },
      {
        type: 'list',
        name: 'libType',
        message: `What lib do you need?`,
        default: 0,
        choices: ['react', 'vue'],
      },
    ]).then(answers => {
      this.answers = answers;
      console.log(this.answers)
    })
  }
  // 在执行 yo sample 时 在生成文件阶段
  // 会执行 writing() 这个方法来写入文件
  writing() {
    // 可以调用父类封装好的 fs 模块上的方法写入文件。
    // destinationPath() 方法可以获得当前项目的路径
    // this.fs.write(this.destinationPath('temp.txt'), Math.random().toString());
    // 上下文数据
    const context = this.answers
    getFileList(context.libType).forEach(path => {
      // 模板文件路径
      const tplPath = this.templatePath(path)
      // 输出文件路径
      const outputPath = this.destinationPath(`${context.projectName}/${path}`)
      
      this.fs.copyTpl(tplPath, outputPath, context)
    })
  }

  end() {
    console.log('generator success!');
    console.log(`cd ${this.answers.projectName}`);
    console.log(`npm install`);
  }
}