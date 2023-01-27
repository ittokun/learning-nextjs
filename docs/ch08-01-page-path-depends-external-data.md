# 外部データ依存ページパス

> Ref: https://nextjs.org/learn/basics/dynamic-routes/page-path-external-data

前の章ではページのコンテンツが外部データに依存するケースを取り上げました。
ルートページをレンダリングするために必要なデータを取得するために、`getStaticProps`を使用しました。

この章では、各ページのパスが外部データに依存している場合について説明します。
Next.jsでは外部データに依存するパスを持つページを静的に生成することが出来ます。これによりNext.jsで動的なURLが実現できます。

## 動的ルートを使った静的なページの生成方法

- 各ブログ記事は`/posts/<id>`というパスを持ち、`id`はトップレベルの`posts`ディレクトリ下にあるmarkdownのファイル名にする
- 例えば以前作成したmarkdownファイルの、`ssg-ssr.md, pre-rendering.md`ファイルだと、`/posts/ssg-ssr, /posts/pre-rendering`というパスにする

## 実装手順

`pages/posts`の下に、`[id].js`というファイルを作成します。`[<name>]`というファイルは、Next.jsではダイナミックルートになります。

`pages/posts/[id].js`では、これまで作成した他のページと同様に、投稿ページをレンダリングするコードを記述します。

```javascript
import Layout from "../../components/layout";

export default function Post() {
  return <Layout>...</Layout>;
}
```

さてここからが新機能です。このページから`getStaticPaths`という非同期関数をエクスポートします。
この関数では、`id`に対して取得することのできる値のリストを返す必要があります。

```javascript
import Layout from "../../components/layout";

export default function Post() {
  return <Layout>...</Layout>;
}

export async function getStaticPaths() {
  // Return a list of possible value for id
}
```

最後に、`getStaticProps`を再び実装する必要があります。今回は与えられた`id`をもつブログ記事に必要なデータを取得します。

```javascript
import Layout from "../../components/layout";

export default function Post() {
  return <Layout>...</Layout>;
}

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}
```

上記のコードでは、`getStaticPaths`で、`/posts/`に続くリンクしたいパスの文字列の配列を受け取り、その取得した`id`を、`getStaticProps`で1つずつ`id`に関連する値を返します。

### 感想

getStaticPaths should return a list of values that can be retrieved for ID. So,
in the example in this Blog, we could create a function that returns the values `["ssr-ssg", "pre-rendering"]`.
