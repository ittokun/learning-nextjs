# レイアウトを一新する

> Ref: https://nextjs.org/learn/basics/assets-metadata-css/polishing-layout

ここまで、CSSモジュールなどの概念を説明するために、最小限のReactとCSSのコードを追加しただけです。
データ取得に関する次のレッスンに進む前に、ページのスタイリングとコードを磨きましょう。

## Update `components/layout.module.css`

初めに、`components/layout.module.css`を以下のコードに書き換えましょう。

```css
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.backToHome {
  margin: 3rem 0 0;
}
```

## Create `styles/utils.module.css`

次に、複数のコンポーネントで再利用可能なCSSユーティリティクラスのセットを作成しましょう。

`styles/utils.module.css`を作成して以下のコードを記述します。

```css
.heading2Xl {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}

.headingXl {
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}

.headingLg {
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
}

.headingMd {
  font-size: 1.2rem;
  line-height: 1.5;
}

.borderCircle {
  border-radius: 9999px;
}

.colorInherit {
  color: inherit;
}

.padding1px {
  padding-top: 1px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.listItem {
  margin: 0 0 1.25rem;
}

.lightText {
  color: #666;
}
```

> ユーティリティクラスは、アプリケーション全体で再利用することができ、global.cssでもこれを使用するこもできます。
> ユーティリティクラスは、メソッドではなくCSSセレクタを記述するアプローチを指します。

## Update `components/layout.js`

次に、`components/layout.js`を開いて以下のコードに置き換えます。

```javascript
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Your Name";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">← Back to home</Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
```

上記のコードでは、以下の箇所を追加しています。

- `meta`タグ（og:imageなど）、ページの内容を説明する要素
- タイトルと画像のサイズを調整するブール値の`home`プロパティ
- `home`がfalseだったときに、"Back to home"リンクを下に配置
- `next/image`のpriority属性

## Update `pages/index.js`

最後に、`pages/index.js`を以下のコードに置き換えます。

```javascript
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you'll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
```

これで完成です。洗練されたレイアウトコードが出来上がり、データ取得のレッスンに移る準備ができました。

この章を終える前に、次節ではNext.jsのCSSサポートに関連する役立つテクニックについてみていきます。
