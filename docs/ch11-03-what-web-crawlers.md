# ウェブクローラとは

> Ref: https://nextjs.org/learn/seo/introduction-to-seo/webcrawlers

Google (Bing, Yandex, Baidu, Naver, Yahoo, DuckDuckGoなど)は、検索結果に表示されるように、
ウェブクローラーを使ってWebサイトを巡回し、WebサイトとそのWebページを発見しています。

また検索エンジンによって、各国のシェアは異なります。

このガイドでは、ほとんどの国で最大の検索エンジンであるGoogleを取り上げます。
とはいえ、中国、ロシア、日本、韓国をターゲットにしている場合は、他の検索エンジンとそのガイドラインを確認することをお勧めします。

ランキングとレンダリングに関しては多少の違いはありますが、クロールとインデックスに関しては、
ほとんどの検索エンジンが非常によく似た方法で動作しています。

ウェブクローラーは、ユーザーを模したボットの一種であり、ウェブサイト上のリンクを辿ってページのインデックスを作成します。
ウェブクローラーは、カスタムユーザーエージェントを使用して、自分自身を識別します。
Googleは複数のウェブクローラーを持っていますが、より頻繁に使用されるのが、Googlebot DesktopとGooglebot Smartphoneです。

## Googlebotはどのように動くか

![Googlebot](https://nextjs.org/_next/image?url=%2Fstatic%2Fimages%2Flearn%2Fseo%2Fgooglebot.png&w=3840&q=75)

一般的な概要としては、以下のようなものが考えられます。

1. **Find URLs**: Google Search Console、ウェブサイト間のリンク、XMLサイトマップなど、様々な場所からURLを入手する
2. **Add to Crawl Queue**: これらのURLは、Googlebotが処理するためにCrowl Queueに追加される。
Crowl Queueに登録されたURLは数秒でページのレンダリング、インデックス作成、リフレッシュが必要な（すでにインデックスされている）場合は、数日かかることもある。
3. **HTTP Request**: クローラーはヘッダーを入手するためにHTTPリクエストを行い、返されたステータスコードに従って動作する
   - *200* - HTMLをクロールして解析
   - *30X* - リダイレクトに従う
   - *40X* - エラーを記録し、HTMLを読み込まない
   - *50X* - 後でステータスコードが変わったかどうかを確認するために戻ってくることがある。
4. **Render Queue**: 検索システムの様々なサービスやコンポーネントは、HTMLを処理し、コンテンツを解析する。
ページにクライアントサイドのJavaScriptコンテンツがある場合、そのURLはRender Queueに追加されることもある。
Render Queueは、JavaScriptのレンダリングに多くのリソースを必要とするため、Googleにとってよりコストがかかり、
その結果、インターネット上の全ページに対してレンダリングされるURLの割合が少なくなっています。
他の検索エンジンの中には、Googleほどのレンダリング能力を持たないものもあります。
そこで、Next.jsがレンダリング戦略を支援することが出来ます。
5. **Ready to be indexed**: 全ての条件を満たした場合、そのページはインデックス化され、検索結果に表示される資格を得ることが出来ます。

次の章では、検索システムのプロセスと主要な構成要素である`Crowling, indexing, rendering, ranking`について深く掘り下げて説明します。

### 感想

Googlebot is amazing. And you can tell if a user on your site is web crawler by the User-Agent.

