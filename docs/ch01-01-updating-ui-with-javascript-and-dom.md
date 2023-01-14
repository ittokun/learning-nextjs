# JavaScriptとDOMメソッドでUIを更新する

> 参考: https://nextjs.org/learn/foundations/from-javascript-to-react/updating-ui-with-javascript

プロジェクトに`h1`タグを追加して、JavaScriptとDOMメソッドをどのように使用するか見ていきましょう。

`index.html`ファイルを新規作成し、HTMLファイルの中に、次のコードを追加します。

```html
<!-- index.html -->
<html>
  <body>
    <div></div>
  </body>
</html>
```

次に、`div`に一意の`id`を与えます。

```html
<div id="app"></div>
```

次に、`script`タグを`div`の下に追加します。

```html
<div id="app"></div>
<script type="text/javascript"></script>
```

次に、`script`タグ内に、`getQuerySelector()`DOMメソッドを使って、`div`要素を`id`で選択します。

```javascript
<div id="app"></div>
<script type="text/javascript">
  const app = document.querySelector("#app");
</script>
```

次に、DOMメソッドを使って、新しい`h1`要素を作成します。

```html
<html>
  <body>
    <div id="app"></div>
    <script type="text/javascript">
      // Select the div elment with "app" id
      const app = document.querySelector("#app");
      // Create a new H1 element
      const header = document.createElement("h1");
      // Create a new text node for the H1 element
      const headerContent = documentTextNode(
        "Develop, Preview, Ship. 🚀";
      );
      // Append the text to the H1 element
      header.appendChild(headerContent);
      // Place the H1 element inside the div
      app.appendChild(header);
    </script>
  </body>
</html>
```

確認のために、HTMLファイルをブラウザで開いてみてください。`h1`タグが、Develop, Preview, Ship. 🚀と表示されているはずです。

## HTML vs DOM

ブラウザの開発者ツールでDOM要素を見ると、DOMに`h1`要素が含まれています。ですが作成したオリジナルのHTMLには`h1`要素は書かれていません。

これはHTMLが初期のページ内容を表しているのに対し、DOMが書かれたJavaScriptコードによって変更され更新されたページ内容を表しているからです。

プレーンなJavaScriptでDOMを更新することは非常に強力ですが冗長になりがちです。上記の`script`タグ内で書かれたコードは、`h1`要素にテキストを追加するために書かれたものです。

アプリやチームの規模が大きくなると、この方法でアプリケーションを構築することはますます困難になります。

この方法では、開発者は多くの時間を費やして、コンピュータがどう動くべきかを指示するための命令を書くことになります。
しかし、表示したい内容を記述して、DOMの更新方法をコンピュータに把握させたくもあります。

## Imperative vs Declarative プログラミング

上記のコードは命令型(Imperative)プログラミングの例です。UIがどのように更新されるべきかの手順を書いているのです。
しかし、UIの構築はしばしば宣言的(Declarative)なアプローチの方が開発プロセスを高速化できるため好まれます。
DOMメソッドを書く代わりに、開発者が表示したいものを宣言できれば便利でしょう。

つまり、命令型プログラミングは、シェフにピザの作り方をステップバイステップで指示するようなもので、宣言型プログラミングは、ピザを作るための手順を気にせずにピザを注文するようなものです。🍕

開発者がUIを構築するのに役立つ人気のある宣言型ライブラリが、Reactです。

## React: 宣言型UIライブラリ

開発者としては、UIに行いたいことをReactに伝えれば、Reactが代わりにDOMを更新する手順を考えてくれます。

次節では、Reactをどのように使い始めることができるのかを見ていきます。
