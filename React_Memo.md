# React学習メモ

## PropTypes
* propsの型チェックを行う
  https://reactjs.org/docs/typechecking-with-proptypes.html

* 型指定をしない場合、ESLint(react/prop-types)エラーとなる

* defaultPropsプロパティでデフォルト値も指定可能
* propTypesによる型チェックはdefaultProps解決後に行われる（defaultPropsもチェック対象）
* defaultPropsをクラス内のstaticで定義可能（まだ提案段階）
  * https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
  * `@babel/plugin-proposal-class-properties`をインストールし、.babelrcの`plugins`に指定

```
$ yarn add -D @babel/plugin-proposal-class-properties
```
```.babelrc
  "plugins": ["@babel/plugin-proposal-class-properties"]
```
