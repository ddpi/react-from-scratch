# React from Scrach

create-react-appを使わずにwebpackと組み合わせて開発する
[公式ドキュメント](https://reactjs.org/docs/create-a-new-react-app.html#more-flexible-toolchains)に記載の
[ガイド](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)に沿って進める

Productionには[これ](https://reactjs.org/docs/optimizing-performance.html#use-the-production-build)をチェック

* ガイドでは、npm installにバージョンを指定しているが、指定せずに最新版を取ってきても動作した
* @babel/core等の'@''/'は重要（babel-coreでは異なるバージョンを取ってくる）

## Initial Commitのpackage.json, package-lock.jsonは下記npmで生成したもの  
1. $ npm init -y
2. $ npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
```
+ @babel/core@7.2.2
+ @babel/preset-env@7.2.3
+ @babel/preset-react@7.0.0
+ @babel/cli@7.2.3
```
3. $ npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader
```
+ style-loader@0.23.1
+ babel-loader@8.0.4
+ webpack-cli@3.2.0
+ webpack-dev-server@3.1.14
+ webpack@4.28.3
+ css-loader@2.1.0
```

4. $ npm install --save react react-dom
```
+ react-dom@16.7.0
+ react@16.7.0
```

5. $ npm install --save-dev react-hot-loader
```
+ react-hot-loader@4.6.3
```

## ESLintの設定
* parserが標準eslintでは、"Parsing error: Unexpected token ="などがでる。babel-eslintに変更(.eslint.rc)

6. $ npm install --save-dev eslint eslint-config-standard eslint-plugin-react eslint-plugin-standard eslint-plugin-node eslint-plugin-promise eslint-plugin-import babel-eslint

* .eslintrc.js　TopレベルのecmaFeaturesはDeprecated。`parserOptions`等へ移動させる https://eslint.org/docs/user-guide/migrating-to-2.0.0

## yarnへの移行

* プロジェクトルートで `$ yarn`実行
* 念のため、`node_modules`を削除して、`$ yarn install`も実行

