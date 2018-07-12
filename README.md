# react指南

1. 必须安装Node

2. create-react-app生成react-app

```bash
npm install -g create-react-app
create-react-app my-app
```
成功之后可以看到如下：
```
Success! Created my-app at /Users/uc/Documents/github/my-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-app
  npm start

Happy hacking!
```

3. 发布到gh-page分支在线访问

```
# 安装
npm install gh-pages --save-dev
# package.json 增加如下
"scripts": {
  "deploy": "gh-pages -d build"
}
# 发布
npm run deploy

# 查看
http://myname.github.io/myapp
```

参考：(https://github.com/tschaub/gh-pages)[https://github.com/tschaub/gh-pages]