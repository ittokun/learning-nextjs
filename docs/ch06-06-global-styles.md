# グローバルスタイル

> Ref: https://nextjs.org/learn/basics/assets-metadata-css/global-styles

CSSモジュールはコンポーネントレベルのスタイルで使用できます。しかしすべてのページで適用できるCSSが欲しい場面があります。

`pages/_app.js`を作成して以下のコードを記述します。

```javascript
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

`_app.js`は、アプリケーションの全ページをラップするトップレベルのReactコンポーネントです。
このコンポーネントを使用して、ページ間を移動するときに状態を保持したり、ここで行なっているようにグローバルスタイルを追加したりできます。

## 開発用サーバーをリスタートする

再起動には、`Ctrl + c`でサーバーを落としてから再度、`npm run dev`を実行します。

## グローバルCSSを追加する

Next.jsでは、`pages/_app.js`からグローバルCSSをインポートして追加することが出来ます。それ以外の場所では出来ません。

なぜなら、グローバルCSSはページ上のすべての要素に影響を与えるからです。

グローバルCSSファイルはどこにおいてもよく、どんな名前でも使うことが出来ますが、暗黙のルールというものがあります。

`styles/global.css`を作成して、以下のコードを記述します。

```css
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: 1.6;
  font-size: 18px;
}

* {
  box-sizing: border-box;
}

a {
  color: #0070f3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  display: block;
}
```

最後に、`pages/_app.js`にグローバルCSSをインポートします。

```javascript
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  {/* ... */}
}
```

では以下のURLにアクセスして、スタイルが変更されていれば成功です。これでページ全体にスタイルを適用できるようになりました。

http://localhost:3000/posts/first-post

## 感想

This Complecated...
Next.js v13 app Directory would be good idea because it would clearly separate the global settings.
