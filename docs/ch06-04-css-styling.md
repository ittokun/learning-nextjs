# CSSスタイル

> Ref: https://nextjs.org/learn/basics/assets-metadata-css/css-styling

nextjs-blogには`styles`というフォルダに、グローバルスタイルシート(globals.css)と、CSSモジュール(Home.module.css)があります。

## CSSモジュール

このファイルは一意のクラス名を自動的に作成することで、コンポーネントレベルでCSSをローカルにスコープすることが出来ます。
これによりクラス名の衝突を気にすることなく異なるファイルで同じCSSクラス名を使用することが出来ます。

CSSモジュール以外にも、次のような様々な方法でNext.jsアプリケーションのスタイルを設定することが出来ます。

- Sass
- Tailwind CSS
- CSS-in-JSライブラリ

この章では、CSSモジュールとSassを使用する方法を見ていきます。
