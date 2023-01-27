# getStaticPathsの実装

> Ref: https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticpaths

では、`pages/posts/[id].js`を開き、以下のコードを記述します。

```javascript
import Layout from "../../components/layout";

export default function Post() {
  return <Layout>...</Layout>;
}
```

次に、`lib/post.js`を開き、以下の`getAllPostIds`関数を一番下に追加します。

```javascript
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  /** Return an array that looks like this:
   *  [
   *    {
   *      params: {
   *        id: "ssg-ssr"
   *      }
   *    },
   *    {
   *      params: {
   *        id: "pre-rendering"
   *      }
   *    }
   *  ]
   */
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
```

重要なことは、返されるリストは単なる文字列の配列ではなく、オブジェクトの配列である必要があるということです。
各オブジェクトは`params`キーを持ち、`id`キーを持つオブジェクトを含んでいなければなりません。そうでなければ、`getStaticPaths`は失敗します。

最後に、`getAllPostIds`を、`pages/posts/[id].js`にインポートして、`getStaticPaths`の中で使用します。

```javascript
import { getAllPostIds } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
```

- `paths`は、パスの配列を含みます。この配列には、`pages/posts/[id].js`で定義されたパラメータが含まれます。
- `fallback: false`は、今は無視してください。後ほど説明します。

これでほとんど終わりましたが、まだ`getStaticProps`の実装が終わっていません。次節で実装します。

### 感想

The return value of `getStaticPaths` is pretty strict. so I'm tempted to use TypeScript...
