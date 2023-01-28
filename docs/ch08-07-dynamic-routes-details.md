# 動的ルートの詳細

> Ref: https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details

ここでは、動的ルートについて知っておくべき重要な情報を紹介します。

## 外部APIの取得とデータベースの問い合わせ

`getStaticProps`と同様に、`getStaticPaths`は任意のデータソースからデータをフェッチすることが出来ます。
以下の例では、`getAllPostIds`は、外部APIエンドポイントからフェッチしています。

```javascript
export async function getAllPostIds() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch("..");
  const posts = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
}
```

## 開発環境と本番環境

`getStaticPaths`は、開発環境ではリクエストごとに実行され、本番環境ではビルド時のみ実行されます。

## Fallback

`getStaticPaths`から`fallback: false`を返していたことを思い出してください。

`fallback: false`だった場合、`getStaticPaths`が返さないパスは404ページとなります。

`fallback: true`だった場合、`getStaticProps`は以下の動作を起こします。

- `getStaticPaths`から返されたパスは、ビルド時にHTMLにレンダリングされる
- ビルド時に生成されなかったパスは、404ページにならず、Next.jsのページのフォールバックバージョンを提供する
- バックグラウンドで、Next.jsはリクエストされたパスを静的に生成する

`fallback: "blocking"`だった場合、新しいパスはサーバーサイドで`getStaticProps`でレンダリングされる。

## キャッシュオールルート

動的ルートは、括弧の中に3つのドット(...)を追加することで、全ての経路を細くするように拡張することが出来ます。
例えば、`pages/posts/[...id].js`は、`/posts/a, /posts/a/b, /posts/a/b/c`などの全てにマッチします。

その場合、`getStaticPaths`と`getStaticProps`の、`id`キーの値は次のようになります。

```javascript
export async function getStaticPaths() {
  return [
    {
      params: {
        // Statically Generates /posts/a/b/c
        id: ["a", "b", "c"],
      },
    },
  ];
}

export async function getStaticProps({ params }) {
  // params.id will be like ["a", "b", "c"]
}
```

## Router

Next.jsのRouterにアクセスしたい場合は、`next/router`から`useRouter`フックをインポートします。

## 404ページ

カスタム404ページを作成するには、`pages/404.js`を作成します。このファイルはビルド時に静的に生成されます。

```javascript
export default function Custom404() {
  return <h1>404 - Page Not Found</h1>;
}
```

## その他の例

`getStaticProps, getStaticPaths`のその他の例は、以下のソースコードをご覧ください。

- [Blog Starter using markdown files](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) ([Demo](https://next-blog-starter.vercel.app/))
- [WordPress Example](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress) ([Demo](https://next-blog-wordpress.vercel.app/))
- [DatoCMS Example](https://github.com/vercel/next.js/tree/canary/examples/cms-datocms) ([Demo](https://next-blog-datocms.vercel.app/))
- [TakeShape Example](https://github.com/vercel/next.js/tree/canary/examples/cms-takeshape) ([Demo](https://next-blog-takeshape.vercel.app/))
- [Sanity Example](https://github.com/vercel/next.js/tree/canary/examples/cms-sanity) ([Demo](https://next-blog-sanity.vercel.app/))

### 感想

I would like to learn dynamic routes perfectly with the help of more examples. 
