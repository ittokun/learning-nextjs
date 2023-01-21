# Next.js内のページ

> 参考: https://nextjs.org/learn/basics/navigate-between-pages/pages-in-nextjs

Next.jsでは、pagesディレクトリのファイルからエクスポートされたReact Componentがページとなります。

ページはファイル名からルートと関連づけられます。例えば開発では

- `pages/index.js`は、ルートと関連づけられる
- `pages/posts/first-post.js`は、`/posts/first-post`ルートと関連づけられる

では、`pages/posts/first-post.js`ファイルを作成して動作を確認してみましょう。

## 新しいページを作成

`pages/posts/first-post.js`ファイルに以下のコードを記述します。

```javascript
function FirstPost() {
  return <h1>First Post</h1>;
}

export default FirstPost;
```

コンポーネントは任意の名前をつけることが出来ますが、`export default`をつける必要があります。

では開発サーバーを起動して、以下のURLにアクセスしてみましょう。

http://localhost:3000/posts/first-post

ではさまざまなページを簡単に作成することが出来ます。

やることは`pages`ディレクトリの下にJSファイルを作成し、ファイル名を通したいURLのパスに名付けるだけです。

いわば、HTMLやPHPファイルを使ってWebサイトを作るのと同じです。HTMLを各代わりにJSXを書き、React Componentを使うのです。

次節では新しく追加されたページへリンクを追加して、トップページからそのページへ移動できるようにします。
