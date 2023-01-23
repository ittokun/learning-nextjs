# メタデータ

> Ref: https://nextjs.org/learn/basics/assets-metadata-css/metadata

`title`タグのようなページのメタデータを変更したい場合はどうすれば良いのでしょうか。

`title`は`head`の一部なので、Next.jsのページで`head`タグを変更する方法を見ていきます。

`pages/index.js`を開いて以下の行を追加します。

```javascript
<Head>
  <title>Create Next App</title>
  <link rel="icon" href="/favicon.ico">
</Head>
```

headではなくHeadを使います。`<Head>`はNext.jsに組み込まれているReact Componentです。これを使うとページの`<head>`を変更することが出来ます。

## Headをfirst-post.jsに追加する

`pages/posts/first-post.js`を開いて、`next/head`のHeadをインポートしましょう。

```javascript
import Head from "next/head";
```

そして、FirstPostコンポーネントにHeadコンポーネントを追加します。

```javascript
export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      {/* ... */}
    </>
  );
}
```

以下のURLに移動して、ブラウザのタブにFirst Postと表示されているか確認してみましょう。

http://localhost:3000/posts/first-post

### 感想

I learned about how to use Head Component in Next.js. but may be, No different than a regular head tag.
I don't know if that's true. lol
