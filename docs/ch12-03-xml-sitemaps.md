# XMLサイトマップ

 > Ref: https://nextjs.org/learn/seo/crawling-and-indexing/xml-sitemaps

 サイトマップは、Googleとコミュニケーションを取る為の最も簡単な方法です。
 ウェブサイトに属するURLとその更新時期を示すことで、Googleが新しいコンテンツを簡単に検出し、あなたのウェブサイトをより効率的にクロールできるようにするものです。

 XMLサイトマップは最も有名ですが、RSS、Atom、テキストファイルでも作成することが出来ます。

 サイトマップは、サイト内のページ、動画、その他ファイル、およびされらの間の関係に関する情報を提供するファイルです。
 Googleなどの検索エンジンは、このファイルを読み込んで、より賢くサイトをクロールします。

 サイトマップが必要になるのは以下のような場合です。

 - サイトの規模が非常に大きい場合。Googleのウェブクローラーが新しいページや最近更新されたページを見落とす可能性が高くなる
 - サイト内に大量のコンテンツページがあり、孤立、リンクされていない場合
 - サイト自体が新しく、外部のリンクが少ない場合
 - サイトにリッチメディアコンテンツ(画像、動画)が多く、またはGoogle Newsに表示されている場合

 サイトマップは、検索エンジンのパフォーマンスを向上させるために必須ではありませんば、botによるクロールとインデックス作成を容易にし、
その結果、コンテンツがより早くピックアップされ、それに応じてランキングされるようになります。

サイトマップは新しいコンテンツが追加されるたびに、ダイナミックに更新することを強くお勧めします。静的なサイトマップも有効ですが、Googleが常に発見する目的にはならないので有用性が低くなる可能性があります。

## Next.jsプロジェクトにサイトマップを追加する方法

2つのオプション

**マニュアル**

比較的シンプルで静的なサイトであれば、プロジェクトの`public`ディレクトリに`sitemap.xml`を作成することができます。

```xml
<xml version="1.0" encoding="UTF-8">
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>http://www.example.com/foo</loc>
      <lastmod>2021-06-01</lastmod>
    </url>
  </urlset>
</xml>
```

**getServerSideProps**

サイトが動的である場合、`getServerSideProps`を利用してXMLサイトマップをオンデマンドで生成することが出来ます。

`pages/sitemap.xml.js`というファイルを作成し、APIにアクセスして動的なページのURLを取得することが出来ます。

```javascript
const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://jsonplaceholder.typicode.com</loc>
     </url>
     <url>
       <loc>https://jsonplaceholder.typicode.com/guide</loc>
     </url>
     ${posts
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
```

### 感想

rovots.txt and sitemap.xml are good to use when you have a large website.
