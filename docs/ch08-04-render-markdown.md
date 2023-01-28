# Markdownをレンダー

> Ref: https://nextjs.org/learn/basics/dynamic-routes/render-markdown

Markdownコンテンツをレンダリングするために、`remark`ライブラリを使用します。インストールしましょう。

```bash
npm install remark remark-html
```

`lib/post.js`を開いて、`remark`をインポートし、`getPostData()`関数に、`remark`の処理を追加します。

```javascript
import { remark } from "remark";
import html from "remark-html";

export async function getPostData(id) {
  // ...
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
```

> `getPostData`には`async`キーワードがつけられています。これは`remark`を使うときに必要だからです。
> `async/await`を使うと、非同期でデータを取得することができるようになります。

`pages/posts/[id].js`の`getStaticProps`にも、`async/await`をつけておきましょう。

```javascript
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  // ...
}
```

最後に、`pages/posts/[id].js`のPostコンポーネントを更新し、`dangerouslySetInnerHTML`を使用して`contentHtml`をレンダリングするようにします。

```javascript
export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}
```

以下のURLにアクセスして、正常にMarkdownが表示されていれば成功です。


- http://localhost:3000/posts/ssg-ssr
- http://localhost:3000/posts/pre-rendering

### 感想

Now that the Markdown can be displayed, the Website is ready to go!
