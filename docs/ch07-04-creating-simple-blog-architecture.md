# シンプルなブログアーキテクチャを作成

> Ref: https://nextjs.org/learn/basics/data-fetching/blog-data

この例のブログ記事は、アプリケーションのディレクトリにローカルのマークダウンファイルとして保存されます。
したがって、ファイルシステムからデータを読み込む必要があります。

この節では、ファイルシステムからマークダウンデータを読み込むブログを作成する手順を説明します。

## markdownを作成する

トップレベルのディレクトリに、`posts`ディレクトリを作成してその中に、`pre-rendering.md, ssg-ssr.md`という2つのファイルを作成します。

**posts/pre-rendering.md**

```markdown
---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
```

**posts/ssg-ssr.md**

```markdown
---
title: 'When to Use Static Generation v.s. Server-side Rendering'
date: '2020-01-02'
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
```

> 各markdownファイルにはタイトルと日付を含むメタデータセクションが上部に配置してあります。
> これはYAML Front Matterと呼ばれ、`gray-matter`というライブラリを使用してパースすることが出来ます。

## `gray-matter`をインストールする

各markdownファイルに含まれるメタデータの解析のために、`gray-matter`をインストールします。

```bash
npm install gray-matter
```

## ファイルシステムを読み込むユーティリティ関数を作成する

次に、ファイルシステムからデータをパースするためのユーティリティ関数を作成します。この関数で次のことを行います。

- markdownファイルをパースし、`title, date, filename`を取得する
- ページにデータを日付順にリストアップする

ルートディレクトリに`lib`ディレクトリを作成しその中に、`post.js`ファイルを作成します。

```javascript
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const filecontents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => {
    return (a.date < b.date) ? 1 : -1;
  });
}
```

> Next.jsを学ぶために、上のコードが何をしているのか理解する必要はありません。この機能はブログの例を機能的にするためのものです。
> `lib`フォルダは決して`lib`という名前のフォルダを作成しなければいけないということはありません。`unko`とかでも動作はしますが、通常は`lib, utils`を使うのが通例です。

## ブログデータをフェッチする

ブログデータが解析されたので、次にそれを`pages/index.js`に追加する必要があります。
次節では、Next.jsのデータ取得メソッドである`getStaticProps()`を使用して実装していきます。

### 感想

It is relief to see JavaScript code in the file system😀
