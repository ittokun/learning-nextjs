# セットアップ

> 参考: https://nextjs.org/learn/basics/create-nextjs-app/setup

まずは開発環境が整っていることを確認しましょう。

- Node.js10.13以降が必要
- テキストエディタとターミナルアプリが必要

## Next.jsアプリを作成する

アプリを作成するには、ターミナルでアプリを作成したいディレクトリに移動して次のコマンドを実行します。

```shell
npx create-next-app@latest nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

これは`create-next-app`というツールを使って、Next.jsのアプリをブートストラップするものです。
テンプレートは`--example`フラグで利用します。

## 開発用サーバーを起動する

これで、next-blogという新しいディレクトリができました。そこに移動してみましょう。

```shell
cd next-blog
```

そして以下のコマンドを実行します。

```shell
npm run dev
```

これは、Next.jsの開発サーバーを3000番ポートで起動します。

ブラウザから`http://localhost:3000`にアクセスできれば、うまくいっています。
