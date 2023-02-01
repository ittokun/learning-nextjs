# robots.txtファイルとは

> Ref: https://nextjs.org/learn/seo/crawling-and-indexing/robots-txt

robots.txtファイルは、検索エンジンのクローラーに、クローラーがサイトから要求できるページやファイル、または要求できないファイルを伝えるものです。
このファイルはほとんどの優れたボットが特定のドメインから何かを要求する前に消費するウェブ標準のファイルです。

CMSや管理画面、Eコマースのユーザーアカウント、一部のAPIルートなど、ウェブサイトの特定の領域をクロールから保護し、インデックスを作成することが出来ます。

これらのファイルは、各ホストのルートで提供されなければなりません。あるいは、ルートの`/robots.txt`パスを目的地のURLにリダイレクトすれば、ほとんどのbotはそれに従います。

## Next.jsのプロジェクトにrobots.txtを追加する

Next.jsの静的ファイル提供のおかげで、簡単に`robots.txt`ファイルを追加することが出来ます。
まず`public`フォルダに、`robots.txt`という名前のファイルを作成し、以下を記述します。

```txt
# Block all crawlers for /accounts
User-agent: *
Disallow: /accounts

# Allow all crawlers
User-agent: *
Allow: /
```

ローカルサーバーを立ち上げて、`http://localhost:3000/robots.txt`にアクセスできるか確認して見ましょう。

`public`ディレクトリは静的アセットを提供するために使用される唯一のディレクトリなので、名前を変えてしまうと機能しなくなります。

### 感想

Nothing..
