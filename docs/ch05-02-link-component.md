# リンクコンポーネント

> 参考: https://nextjs.org/learn/basics/navigate-between-pages/link-component

ウェブサイトでページ間のリンクを貼る場合、`a`というHTMLタグを使用します。

Next.jsでは、`next/link`のLink Componentを利用して、アプリケーションのページ間をリンクすることが出来ます。
`<Link>`はクライアントサイドのナビゲーションを可能にし、ナビゲーションの動作をよりよく制御する為のPropsを受け取ります。

## `<Link>`を使う

まず、`pages/index.js`を開き、`next/link`からLinkコンポーネントをインポートします。

```javascript
import Link from "next/link";
```

そして、`h1`タグを次のように変更します。

```javascript
<h1 className={styles.title}>
  Read <Link href="/posts/first-post">this page!</Link>
</h1>
```

次に、`pages/posts/first-post.js`を開き、以下のように置き換えます。

```javascript
import Link from "next/link";

function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}

export default FirstPost;
```

このように、Linkコンポーネントは`a`タグと同じように使うことが出来ます。

> Next.js12.2以前では、Linkコンポーネントを`a`タグでラップしなければいけませんでしたが、以降では不要です

これで各ページにリンクが貼られ、行ったり来たりできるようになったはずです。
