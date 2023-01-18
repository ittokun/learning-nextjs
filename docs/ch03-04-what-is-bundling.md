# バンドルとは

> 参考: https://nextjs.org/learn/foundations/how-nextjs-works/bundling

開発者は、アプリケーションをモジュール、コンポーネント、関数に分割し、それらを使ってより大きなアプリケーションの断片を構築します。
これらの内部モジュールや外部サードパーティパッケージをエクスポートやインポートをすると、ファイル依存の複雑なウェブが作成されます。

![bundling](https://nextjs.org/static/images/learn/foundations/bundling.png)

バンドルとは、ユーザーがWebページを訪れた際にファイルへのリクエスト数を減らすことを目的に、依存関係のウェブを解決し、ファイル（またはモジュール）をブラウザ用に最適化したバンドルにマージするプロセスのことです。
