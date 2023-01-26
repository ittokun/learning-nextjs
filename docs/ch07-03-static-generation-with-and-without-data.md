# データありなしの静的生成

> Ref: https://nextjs.org/learn/basics/data-fetching/with-data

静的生成はデータありでもデータなしでも可能です。

これまでのところ、作成したすべてのページは外部データの取得を必要としません。これらのページはアプリが本番用にビルドされたときに自動的に静的に生成されます。

しかしページによっては、最初に何らかの外部データを取得しなければ、HTMLをレンダリングできない場合があります。
例えば、ファイルシステムにアクセスしたり、外部APIを取得したり、ビルド時にデータベースに問い合わせたりする必要があるかもしれません。
Next.jsは、このようなケースをそのままサポートします。

## データありの静的生成: getStaticProps

Next.jsでは、ページコンポーネントをエクスポートするときに、`getStaticProps`という非同期関数をエクスポートすることができます。これを実行すると

- `getStaticProps`は、本番環境のビルド時に実行され
- 関数の内部では、外部データを取得し、ページにPropsとして送信することが出来ます

```javascript
export default function Home(props) { /* ... */ }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...;

  // The value of the props key will be 
  // passed to the Home component
  return {
    props: ...,
  }
}
```

基本的に、`getStaticProps`はNext.jsに対して、このページにはデータの依存性があるから、ビルド時にこのページをプリレンダリングするときは、最初にそれを解決しておいてくれと伝えることができるのです。

## `getStaticProps`を使おう

次節では、実際に`getStaticProps`を使用して、どのようなものか体験していきます。

### 感想

External Data Fetching... Exciting
