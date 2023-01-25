# プリレンダリング

> Ref: https://nextjs.org/learn/basics/data-fetching/pre-rendering

データフェッチについて話す前に、Next.jsの最も重要なコンセプトの一つであるプリレンダリングについて説明します。

デフォルトでは、Next.jsはすべてのページをプリレンダリングします。
これは、Next.jsが各ページのHTMLを、クライアントサイドのJavaScriptで全て行うのではなく、あらかじめ生成しておくことを意味します。
プリレンダリングは、パフォーマンスとSEOの向上につながります。

作成された各HTMLは、そのページに必要な最小限のJavaScriptコードと関連づけられています。
ページがブラウザに読み込まれると、そのJavaScriptコードが実行され、ページが完全にインタラクティブになります。
このプロセスをハイドレーションと呼びます。

## プリレンダリングの動作を確認する

進める前に以下のステップを踏んでください。

1. ブラウザのJavaScriptを無効にする
2. この[サイト](https://next-learn-starter.vercel.app/)にアクセスする

アプリがJavaScriptなしでレンダリングされていることがわかるはずです。これはNext.jsがアプリを静的なHTMLにプリレンダリングしたためで、JavaScriptを実行せずにアプリのUIを確認することが出来ます。

> localhostでJavaScriptを無効にするとCSSが読み込まれなくなります。

もしアプリがプレーンなReact.jsアプリの場合、プリレンダリングがないためJavaScriptを無効にするとアプリが表示されなくなります。

次節では、Next.jsのプリレンダリングの2つの方法についてみていきます。

## 感想

Pre-rendering allows to be displayed pages even with JavaScript disabled.
