# APIルートの作成

> Ref: https://nextjs.org/learn/basics/api-routes/creating-api-routes

APIルートは、Next.jsアプリ内にAPIエンドポイントを作成することで作ることが出来ます。
`pages/api`ディレクトリの中に、次のような形式の関数を作成することで実現できます。

```javascript
// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
  // ...
}
```

これらは、Serverless Functions(Lambdasとも呼ばれる)としてデプロイすることが出来ます。

## 簡単なAPIエンドポイントを作成

`pages/api`に`hello.js`というファイルを作成し、以下のコードを記述します。

```javascript
export default function handler(req, res) {
  res.status(200).json({ text: "Hello" });
}
```

[http://localhost:3000/api/hello](http://localhost:3000/api/hello)にアクセスして、`{"text": "Hello"}`と表示されているか確認してみましょう。

- `req`は、`http.IncomingMessage`のインスタンスであり、いくつかの組み込みミドルウェアが含まれています。
- `res`は、`http.ServerResponse`のインスタンスであり、いくつかのヘルパー関数が含まれています。

### 感想

Nothing...
