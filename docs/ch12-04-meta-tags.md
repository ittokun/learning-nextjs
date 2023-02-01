# 検索エンジンの為のメタタグ

> Ref: https://nextjs.org/learn/seo/crawling-and-indexing/metatags

`Meta robot tags`は、検索エンジンが常に尊重するディレクティブです。
このタグを追加することで、ウェブサイトのインデックスをより簡単にすることが出来ます。

*directives*と*suggestions*には違いがあります。メタタグやrobots.txtはディレクティブであり、常に従わなければなりません。
Canonicalタグは、Googleが従うかどうかを蹴っていることができる推奨事項です。

ページレベルのメタタグに関しては、多くの選択肢があります。一般的な書き方は以下の通りです。

```html
<meta name="robots" content="noindex,nofollow" />
```

このタグはおそらく最もよく目にするタグでしょう（そうでもないかも）。デフォルトでは`index,follow`値を持つので、指定する必要はありませんが、`all`も有効な代替バージョンです。

```html
<meta name="robots" content="all" />
```

*noindex*と*nofollow*の意味は次のとおりです。

**noindex**

このページを検索結果に表示しないようにすること、`noindex`を省略すると、このページがインデックスされて検索結果に表示される可能性があることを示します。

**nofollow**

このページのリンクを辿らないようにする。これを省略すると、クローラーはこのページ上のリンクを辿ってしまいます。

## Googlebotタグ

```html
<meta name="googlebot" content="noindex,nofollow" />
```

たまにgooglebotタグを見かけることもありますが、ほとんどの場合、`robots`だけで良いです。
Googlebot用のルールと、それ以外の検索ボット用のルールを別々に用意したい場合にこのタグを使用します。

## Googleタグ

```html
<meta name="google" content="nositelinkssearchbox" />
```

ユーザーがサイトを検索したとき、Google検索の結果にサイトの他の直接のリンクとともに、サイトに固有の検索ボックスが表示されることがあります。
このタグは、サイトリンクの検索ボックスを表示しないようにGoogleに指示します。

```html
<meta name="google" content="notranslate" />
```

Googleは、サイトのコンテンツがユーザーが読みたい言語でないと認識した場合、検索結果で翻訳のリンクを提供することがあります。

一般的にはより多くのユーザーに対して、独自の魅力的なコンテンツを提供するチャンスが生まれます。
しかしそれを望まないケースもあるかもしれません。このメタタグは、このページの翻訳を提供しないようにGoogleに伝えるものです。

## Next.jsでメタタグを定義する

メタタグは、Headの中に書きます。

```javascript
import Head from "next/head";

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Meta Tag Example</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
      </Head>
      <p>Here we show some meta tags off!</p>
    </div>
  );
}
```

タグの重複を避けるために、`key`プロパティを使用すると、タグが一度だけレンダリングされるようになります。
