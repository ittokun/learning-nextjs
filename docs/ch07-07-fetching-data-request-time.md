# リクエスト時のデータ取得

> Ref: https://nextjs.org/learn/basics/data-fetching/request-time

ビルド時ではなく、リクエスト時にデータを取得する必要がある場合は、サーバーサイドレンダリングを使用します。

サーバーサイドレンダリングを使用するには、`getStaticProps`の代わりに`getServerSideProps`を使用します。

## getServerSidePropsを使う

`getServerSideProps`の例です。ブログアプリの方では実装しません。

```javascript
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
}
```

`getServerSideProps`はリクエスト時に呼び出されるため、そのパラメータ(context)にはリクエストに応じたパラメータが含まれます。

また、リクエスト時にデータを取得する必要があるページをプリレンダリングする必要がある場合にのみ使用すべきです。
TTFB(Time to First Byte)は`getStaticProps`よりも遅くなります。なぜなら、サーバーはリクエストごとに結果を計算しなければならず、その結果は追加の設定なしにCDNにキャッシュすることが出来ないからです。

## クライアントサイドレンダリング

プリレンダリングが不要な場合は、次のような戦略も使用可能です。

- 外部データを必要としないページの部分を静的に生成（プリレンダリング）する。
- ページが読み込まれたら、JavaScriptを使ってクライアントから外部データを取得し、残りの部分にデータを入力する

この方法は、ユーザーのダッシュボードページで有効です。ダッシュボードはプライベートなユーザー固有のページなので、SEOは関係なく、ページがプリレンダリングされる必要もありません。
データは頻繁に更新されるため、リクエスト時にデータを取得する必要があります。

## SWR

Next.jsの開発チームは、SWRというデータフェッチ用のReactフックを作成しました。クライアントサイドでデータを取得するのであれば、このフックを強くお勧めします。
キャッシュ、サイバリデーション、フォーカストラッキング、インターバルでのリフェッチなど、なまざまな処理を行うことが出来ます。

```javascript
import useSWR from "swr";

function Profile() {
  const { data, error } = useSWR("/api/user", fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
```

## 終わり

これでこの章は終わりです。次の章では動的ルートについてみていきます。

### 感想

Finally, I'm done! Nine verses is a lot of quicksand and I'm tired... But I have to remember this place well.
