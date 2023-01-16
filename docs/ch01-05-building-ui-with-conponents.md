# コンポーネントでUIを構築する

> 参考: https://nextjs.org/learn/foundations/from-javascript-to-react/building-ui-with-components

ユーザーインターフェースは、コンポーネントと呼ばれる小さな構成要素に分解することができます。

コンポーネントを使うと、自己完結型で再利用可能なコードの断片を構築することができます。コンポーネントをレゴグロックに見立てると、ここのレゴブロックを組み合わせて、より大きな構造を形成することができます。
UIの一部を更新する必要がある場合は、特定のコンポーネントを更新することができます。

![components](https://nextjs.org/static/images/learn/foundations/components.png)

このモジュール化により、アプリケーションの他の部分に触れることなく、簡単にコンポーネントの追加、更新、削除できるためコードが大きくなっても保守しやすくなります。

Reactコンポーネントの良いところは、それが単なるJavaScriptであるということです。では、Reactコンポーネントをどのように書けが良いのか、JavaScriptの観点から見ていきましょう。

## コンポーネントの作成

Reactでは、コンポーネントは関数です。`script`タグの中に、`header`という関数を書きます。

```javascript
// <script type="text/jsx">
const app = document.getElementById("app");

function header() {}

ReactDOM.render!(<h1>Develop. Preview. Ship. 🚀</h1>, app);
// </script>
```

コンポーネントとは、UI要素を返す関数のことです。関数の`return`文の中に、JSXを記述します。

```javascript
function header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
}
```

このコンポーネントをDOMにレンダリングするには、`ReactDOM.render()`メソッドの第1引数として渡します。

```javascript
ReactDOM.render(header, app);
```

でもちょっと待ってください。上のコードをブラウザで実行しようとするとエラーになります。これを動作させるためには、2つのことをしなければいけません。

まず、Reactコンポーネントは大文字にして、プレーンなHTMLやJavaScriptと区別すること。

```javascript
function Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
}
```

2つ目に、Reactコンポーネントは通常のHTMLタグと同じように、角括弧`<>`で囲んで使用します。

```javascript
ReactDOM.render(<Header />, app);
```

## コンポーネントのネスト

アプリケーションには通常、単一のコンポーネントよりも多くのコンテンツが含まれます。Reactコンポーネントは通常のHTML要素のように、互いに入れ子にすることができます。

```javascript
function Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
}

function HomePage() {
  return (
    <div>
	  {/* Nesting the Header component */}
	  <Header />
    </div>;
  );
}
```

## コンポーネントの構造

以下のようにReactコンポーネントをネストし続けることで、コンポーネントツリーを形成することができます。

![component trees](https://nextjs.org/static/images/learn/foundations/component-tree.png)

このモジュール形式により、アプリ内のさまざまな場所でコンポーネントを再利用することができます。

プロジェクトでは、`<HomePage>`がトップレベルのコンポーネントとなったため、これを`ReactDOM.render()`メソッドに渡すことができます。

```javascript
// <script type="text/jsx">
const app = document.getElementById("app");

function Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
}

function HomePage() {
  return (
    <div>
	  <Header />
	</div>
  );
}

ReactDOM.render(<HomePage />, app);
// </script>
```

次節ではプロップについて説明し、コンポーネント間でデータを受け渡すためにどのようにプロップを使用するか説明します。
