# Reactを始める

> 参考: https://nextjs.org/learn/foundations/from-javascript-to-react/getting-started-with-react

プロジェクトでReactを使うには、[unpkg.com](https://unpkg.com/)という外部のウェブサイトから2つのReactスクリプトを読み込みます。

- **react**は、Reactのコアとなるライブラリです。
- **react-dom**は、DOMに特化したメソッドを提供し、ReactをDOMで使用することを可能にします。

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>

    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

    <script type="text/javascript">
	  const app = document.querySelector("#app");
	</script>
  </body>
</html>
```

JavaScriptで直接DOMを操作する代わりに、`react-dom`の`ReactDOM.render()`メソッドを使って、`#app`要素内の`h1`要素をReactにレンダリングするように指示することができます。

```javascript
// <script type="text/javascript">
const app = document.querySelector("#app");
ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app);
// </script>
```

しかしこのコードをブラウザで実行しようとすると、シンタックスエラーが発生します。これは、`<h1> ... </h1>`が有効なJavaScriptでない為です。このコードはJSXです。

## JSXとは？

JSXはJavaScriptの構文拡張です。使い慣れたHTMLライクな構文でUIを記述できるようにするものです。
JSXの良いところは、3つのJSXのルールに従うことを除けば、HTMLとJavaScript以外の新しい記号や構文を学ぶ必要がないことです。

ブラウザはJSXをそのままでは理解できないので、JSXのコードを通常のJavaScriptに変換するために、BabelのようなJavaScriptコンパイラが必要になります。

## Babelをプロジェクトに追加する

以下のコードをindex.htmlに貼り付けます。

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

さらに、スクリプトタイプを`type=text/jsx`に変更することで、どのようなコードを変換するかをBabelに知らせる必要があります。

```html
<html>
  <body>
    <div id="app"></div>

    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
	<!-- Babel Script -->
	<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/jsx">
	  const app = document.querySelector("#app");
	  ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app);
	</script>
  </body>
</html>
```

これで、ブラウザでコードを実行できます。先ほど書いた宣言的なReactコードを比較してみましょう。

```javascript
// declarative React code
const app = document.querySelector("#app");
ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app);

// imperative JavaScript code
const app = document.querySelector("#app");
const header = document.createElement("h1");
const headerContent = document.createTextNode("Develop. Preview. Ship. 🚀");
header.appendChild(headerContent);
app.appendChild(header);
```

Reactを使うことで、繰り返しのコードを大幅に削減できることがお分かり頂けると思います。

Reactは、あなたに代わってタスクを実行する再利用可能なコードの断片を含むライブラリです。
