# getStaticPropsの実装

> Ref: https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops

`lib/post.js`の`getSortedPostsData`をインポートして、`pages/index.js`の`getStaticProps`の中で呼び出します。

```javascript
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return { props: { allPostsData } };
}
```

これでブログ記事がPropsとしてHomeコンポーネントに渡されるようになり、以下のようにブログ記事にアクセスすることが出来ます。

```javascript
export default function Home ({ allPostsData }) { /* ... */ }
```

ブログ記事を表示するために、Homeコンポーネントを更新して、自己紹介のあるセクションの下に、`section`要素を使って以下のコードを追加してみましょう。

```javascript
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      { /* ... */ }
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostData.map(({ id, date, title }) => (
            <li class={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
```

以下のURLにアクセスしてどうなっているか確認してみましょう。

http://localhost:3000

おめでとうございます！外部データを取得、プリレンダリングをして、それをページに表示することが出来ました。

次節では、`getStaticProps`の使用についてのヒントをみていきます。

### 感想

Easier to implement than I thought it would be. getStaticProps function is executed in server side, so you can use the file system.
