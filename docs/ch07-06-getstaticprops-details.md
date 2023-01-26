# getStaticPropsの詳細

> Ref: https://nextjs.org/learn/basics/data-fetching/getstaticprops-details

ここでは、getStaticPropsについて知っておくべき重要な情報を紹介します。

## 外部APIの取得かデータベースへの問い合わせ

`lib/posts.js`では、ファイルシステムからデータを取得する`getSortedPostsData`を実装しています。
しかし、外部APIエンドポイントのような他のソースからデータを取得することも問題なくできます。

```javascript
export async function getSortedPostsData() {
  const res = await fetch("...");

  return res.json();
}
```

> Next.jsはクライアントとサーバーの両方で`fetch()`をポリフィルしているためインポートの必要はありません

またデータベースに直接問い合わせることも可能です。

```javascript
import someDatabaseSDK = from "someDatabaseSDK";

const databaseClient = someDatabaseSDK.createClient(...);

export async function getSortedPostsData() {
  return databaseClient.query("SELECT posts...");
}
```

getStaticPropsはサーバーサイドで実行され、クライアントサイドでは実行されません。
ブラウザ用のJSバンドルに含まれることもありません。つまり、データベースへの直接問い合わせのようなコードを、ブラウザに送信することなく書くことが出来ます。

## 開発環境と本番環境

- 開発環境の`getStaticProps`は、リクエストごとに実行されます。
- 本番環境の`getStaticProps`は、ビルド時に実行されます。しかし`getStaticPaths`が返すフォールバックキーを使用することで、この動作を拡張することが出来ます。

ビルド時に実行されることを前提としているため、クエリやHTTPヘッダーなど、リクエスト時にのみ利用可能なデータは使えません。

## ページ内の許可

`getStaticProps`は、ページからしかエクスポートできません。ページ以外のファイルからエクスポートすることはできません

理由は、Reactはページがレンダリングされる前に必要なデータを全て持っている必要があるからです。

## リクエスト時にデータを取得する場合

静的生成は構築時に一度だけ行われるため、頻繁に更新されるデータやユーザーのリクエストごとに変更されるデータには適していません。

このように、データが変化する可能性がある場合は、サーバーサイドレンダリングを使用します。これについては次節で説明します。

### 感想

Nothing...
