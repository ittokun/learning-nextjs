# ブログページを一新する

> Ref: https://nextjs.org/learn/basics/dynamic-routes/polishing-post-page

## ブログページに`title`を追加する

`pages/posts/[id].js`に、投稿データを使って`title`タグを追加します。

```javascript
import Head from "next/head";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      { /* ... */ }
    </Layout>
  );
}
```

## 日付をフォーマットする

`date-fns`というライブラリを使って日付をフォーマットします。まずインストールします。

```bash
npm install date-fns
```

次に、`components/date.js`ファイルを作成し、Dateコンポーネントを作成します。

```javascript
import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
```

そして、`pages/posts/[id].js`に、Dateコンポーネントを追加します。

```javascript
import Date from "../../components/date";

export default function Post({ postData }) {
  return (
    <Layout>
      {/* .. */}
      <Date dateString={postData.date} />
      {/* .. */}
    </Layout>
  );
}
```

以下のURLにアクセスして、"January a, 2020"という出力になっているか確認してみましょう。

http://localhost:3000/posts/pre-rendering

## CSSを追加

最後に、`styles/utils.module.css`にCSSを追加して、`pages/posts/[id].js`のPostコンポーネントにスタイルを追加しましょう。

```javascript
import utilStyle from "../../styles/utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
```

もう一度上記のURLにアクセスして、スタイルが変わっているか確認してみましょう。

### 感想

date-fns is very good!
