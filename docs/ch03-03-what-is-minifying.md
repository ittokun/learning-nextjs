# 最小化とは

> 参考: https://nextjs.org/learn/foundations/how-nextjs-works/minifying

開発者は人間が読みやすいように最適化されたコードを書きます。このコードには、コメントスペース、インデント、複数行などコードの実行に必要ない余分な情報が含まれている場合があります。

![minifying](https://nextjs.org/static/images/learn/foundations/minifying.png)

最小化とは、コードの機能を変更することなく、不要なコードの書式やコメントを削除することです。
ファイルサイズを小さくすることで、アプリケーションのパフォーマンスを向上させることが目的です。

Next.jsでは、JavaScriptとCSSファイルは自動的に最小化され、運用されます。
