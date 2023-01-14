# JavaScriptからReactへ

> 参考: https://nextjs.org/learn/foundations/from-javascript-to-react

## ユーザーインターフェースのレンダー

Reactの仕組みを理解するにはまず、ブラウザがコードを解釈してインタラクティブなユーザーインターフェース(UI)を作成する仕組みについての基本的な理解が必要です。

ユーザーがWebページにアクセスすると、サーバーはブラウザに次のようなHTMLファイルを返します。

![HTML file](https://nextjs.org/static/images/learn/foundations/html-to-dom.png)

これをブラウザがHTMLを読み込み、DOM(Document Object Model)を構築します。

## DOMとは

DOMは、HTML要素をオブジェクトとして表現したものです。コードとユーザーインターフェースの橋渡しとして機能し、親子関係を持つツリー状の構造をしています。

![DOM tree](https://nextjs.org/static/images/learn/foundations/dom-to-ui.png)

DOMメソッドとJavaScriptなどのプログラミング言語を使って、ユーザーイベントをリッスンし、ユーザーインターフェースの特定の要素を選択、追加、更新、削除などでDOMを操作します。
DOM操作は特定の要素を対象とするだけでなく、そのスタイルや内容を変更することも可能です。

次節ではJavaScriptとDOMメソッドの使い方を見ていきます。
