# HTTPステータスコードとは

> Ref: https://nextjs.org/learn/seo/crawling-and-indexing/status-codes

HTTPレスポンスステータスコードは、特定のHTTPリクエストが正常に完了したかどうかを示すものです。
ステータスコードはいっぱいありますが、SEOの文脈で意味を持つものはほんの一握りです。
ではそれらについて見ていきましょう。

## 200

> `HTTP 200 OK`成功レスポンスコードは、リクエストに成功したことを示します。

Googleにインデックスされるためには、ページがステータスコード200を返す必要があります。
これはオーバニックトラフィックを受け取るために、一般的にページで探したいものです。

これは、Next.jsがページを正常にレンダリングしたときに設定されるデフォルトのコードです。

## 301/308

> `HTTP 301 Moved Permanently`リダイレクトのステータスレスポンスコードは、要求されたリソースが宛先URLに確定で移動したことを示します。

これは永久的なリダイレクトです。一般的にこれは最も広く使われているリダイレクトタイプです。

リダイレクトは様々な理由で使用できますが、主なものはURLがA地点からB地点に移動したことを示すことです。

リダイレクトは、コンテンツがある場所から別の場所に移動した場合、現在および将来の顧客を失わず、ボットがサイトのインデックスを継続できるようにするために必要です。

> Next.jsのパーマネントリダイレクトは、デフォルトで`301`ではなく`308`を使用しています。
> これは新しいバージョンであり、より良い選択肢と考えられているからです。

この2つのステータスコードの主な違いは、`301`はリクエストメソッドをPOSTからGETに変更できるのに対し、`308`では変更できない点です。

Next.jsでは、`getStaticProps`関数で`props`の代わりに`redirect`を返すことで、`308`リダイレクトを発生させることが出来ます。

```javascript
export async function getStaticProps(context) {
  return {
    redirect: {
      destination: "/",
      permanent: true,  // triggers 308
    },
  };
}
```

`permanent: true`は、`next.config.js`でも設定することが出来ます。

```javascript
module.exports = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,  // triggers 308
      },
    ];
  },
};
```

## 302

> `HTTP 302 Found`リダイレクトステータスレスポンスコードは、要求されたリソースが一時的に宛先URLに移動したことを示します。

ほとんどの場合、`302`は`301`であるべきです。
ユーザーを一時的に特定のページにリダイレクトしている場合や、ロケーションに基づいてリダイレクトしている場合は、この限りではありません。

## 404

> `HTTP 404 Not Found`クライアントエラーレスポンスコードは、サーバーが要求されたリソースを見つけることが出来ないことを示します。

前述のように移動したページは、新しい場所に`301`ステータスコードでリダイレクトされる必要があります。
これが実現しない場合、URLは`404`のステータスコードを返すことがあります。

`404`は、ユーザーが存在しないURLにアクセスした結果であるため、デフォルトでは必ずしも悪いものではありません。
しかし、検索順位の低迷につながる可能性があるため、ページ内で頻繁にエラーになるべきでもありません。

Next.jsは、アプリ内に存在しないURLに対しては、自動的に`404`のステータスコードを返します。

場合によっては、ページから`404`のステータスコードを返したいこともあります。
そのような場合、`props`の代わりに以下を返すことで実現できます。

```javascript
export async function getStaticProps(context) {
  return {
    notFound: true,  // triggers 404
  };
}
```

また、`pages/404.js`を作成することで、ビルド時に静的に生成される`Custom404`ページ作成することが出来ます。

```javascript
export default function Custom404() {
  return <h1>404 - Page Not Found</h1>;
}
```

## 410

> `HTTP 410 Gone`クライアントエラーレスポンスコードは、対象リソースへのアクセスがオリジンサーバーで利用できなくなったこと、およびこの状態が永続的に続く可能性があることを示します。

これはあまり使われませんが、Webサイト上のコンテンツを削除し、存在しないものにしたいときに、このステータスコードを使います。。

このステータスコードを使用する例として、次のようなものがあります。

- **E-Commerce**: 商品から在庫が永久に削除されたとき
- **Forum**: ユーザーによって削除されたスレッド
- **Blog**: サイトから削除されたブログ記事

このステータスコードはボットに対して、このコンテンツをクロールするために決して戻ってはならないことを通知するものです。

## 500

> `HTTP 500 Internal Server Error`レスポンスコードは、サーバーに予期せぬ事態が発生し、リクエストに応えられないことを示すレスポンスコードです。

Next.jsは、予期せぬアプリケーションエラーに対して、自動的に`500` のステータスコードを返します。
`pages/500.js`を作成することで、ビルド時に静的に生成される`Custom500`エラーページを作成することが出来ます。

```javascript
export default function Custom500() {
  return <h1>500 - Server-side error occurred</h1>;
}
```

## 503

> `HTTP 503 Service Unavailable`サーバーエラーレスポンスコードは、サーバーがリクエストを処理する準備ができていないことを示します。

ウェブサイトがダウンしているときに、長時間にわたってWEBサイトがダウンすると予測される場合に、このステータスコードを使用します。
これにより、長期的にランキングを失うことを防ぐことが出来ます。

### 感想

There are tons of status code, but only a few are used.
The following URL contains all the status code.

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
