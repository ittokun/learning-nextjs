# APIルートの詳細

> Ref: https://nextjs.org/learn/basics/api-routes/api-routes-details

ここでは、APIルートについて知っておくべき重要な情報を見ていきます。

## `getStaticProps, getStaticPaths`からAPIルートを取得しない

`getStaticProps, getStaticPaths`からAPIルートを取得すべきではありません。
代わりに、サーバーサイドのコードを直接、記述することをお勧めします。またはヘルパー関数を呼び出してください。

その理由は、`getStaticProps, getStaticPaths`はサーバーサイドでのみ実行され、クライアントサイドでは実行されないからです。
さらに、これらの関数はブラウザ用のJSバンドルに含まれることもありません。
つまり、データベースに直接問い合わせるようなコードを、ブラウザに送信することなく書くことができるのです。

## 良い使用例：フォーム入力の処理

APIルートの良い使用例は、フォーム入力の処理です。例えばページ上にフォームを作成し、APIルートにPOSTリクエストを送信するといった場合です。
その後、それを直接データベースに保存するコードを書くこともできます。もちろん書かれたコードはクライアントバンドルに含まれません。

```javascript
export default function handler(req, res) {
  const email = req.body.email;
  // Then save email to your database, etc...
}
```

## プレビューモード

静的生成は、ページがヘッドレスCMSからデータを取得するときに便利です。しかし、ヘッドレスCMSで原稿を書いていて、その原稿をすぐにページでプレビューしたいときには、理想的ではありません。
このようなページは、Next.jsがビルド時ではなくリクエスト時にレンダリングし、公開コンテンツではなくドラフトコンテンツをフェッチするようにしたいものです。
このような場合にのみ、Next.jsは静的生成を回避したいはずです。

Next.jsには、上記の問題を解決するために、APIルートを利用したプレビューモードという機能があります。
詳しくは、[Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode)をご覧ください。

### 感想

It's over too soon...
