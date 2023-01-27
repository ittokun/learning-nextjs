# getStaticPropsの実装

> Ref: https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticprops

与えられた`id`の投稿をレンダリングするためには、必要なデータを取得する必要があります。

そのためには、もう一度`lib/posts.js`を開いて、一番下に以下の`getPostData(id)`関数を追加してください。

```javascript
export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  return {
    id,
    ...matterResult.data,
  };
}
```

そして、`pages/posts/[id].js`を開いて、以下のコードを追加します。

```javascript
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
```

では、Postコンポーネントを更新して、`postData`を使えるようにしましょう。`pages/posts/[id].js`で、エクスポートされたPostコンポーネントを以下のコードに置き換えます。

```javascript
import { getAllPostIds, getPostData } from "../../lib/post";

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}
```

これで以下のURLにアクセスできるはずです。試してみましょう。

- http://localhost:3000/posts/ssg-ssr
- http://localhost:3000/posts/pre-rendering

いいですね！これで動的ルートの作成に成功することが出来ました。

現時点ではブログのmarkdownコンテンツを表示できていません。次節ではこれをやっていきます。

### 感想

I think the Dynamic Routes is difficult to understand.
I know it's complicated in some ways, but I guess it can't be helped.
