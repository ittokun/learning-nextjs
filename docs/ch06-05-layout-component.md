# レイアウトコンポーネント

> Ref: https://nextjs.org/learn/basics/assets-metadata-css/layout-component

まず、すべてのページで共有されるLauoutコンポーネントを作成しましょう。

- トップレベルに`components`というディレクトリを作成する
- `components`の中に、`layout.js`というファイルを作成し、以下を記述する

```javascript
export default function Layout({ children }) {
  return <div>{children}</div>;
}
```

そして、`pages/posts/first-post.js`を開いて、Layoutコンポーネントをインポートします。

```javascript
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      {/* ... */}
    </Layout>
  )
}
```

## CSSを追加する

次はLayoutコンポーネントにいくつかスタイルを追加しましょう。そのためには、ReactコンポーネントでCSSファイルをインポートできるCSSモジュールを使用します。

`components/layout.module.css`ファイルを作成して以下を記述します。

```css
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}
```

> CSSモジュールを使うにはファイル名に、`.module.css`をつける必要があります。

そして、`components/layout.js`を開いて以下のように記述することで、スタイルを適用することが出来ます。

```javascript
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>
}
```

以下のURLにアクセスしてスタイルが適用されているか確認してみましょう。

http://localhost:3000/posts/first-post

## 一意のクラス名を自動で生成する

ブラウザのdevtoolsでHTMLをみてみると、Layoutコンポーネントでレンダリングされた`div`には`layout_container_...`のようなクラス名がついています。

これは、CSSモジュールが自動的にユニークなクラス名を生成してくれるからです。CSSモジュールを使用する限り、クラス名の衝突を心配する必要はありません。

さらに、Next.jsのコード分割機能は、CSSモジュールでも有効です。各ページに読み込まれるCSSの量が最小限になるようにします。
その結果バンドルサイズを小さくすることが出来ます。

CSSモジュールは、ビルド時にJavaScriptバンドルから抽出され、Next.jsによって自動的にロードされるCSSファイルを生成します。
