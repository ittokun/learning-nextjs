# ルートページを一新する

> Ref: https://nextjs.org/learn/basics/dynamic-routes/polishing-index-page

`pages/index.js`に、Linkコンポーネントを使用して各投稿ページにリンクを追加していきます。

```javascript
<li className={utilStyles.listItem} key={id}>
  <Link href={`/posts/${id}`}>{title}</Link>
  <br />
  <small className={utilStyles.lightText}>
    <Date dateString={date} />
  </small>
</li>
```

以下のURLにアクセスして、ちゃんとリンクが貼られているか確認してみましょう。

http://localhost:3000

### 感想

Easy!
