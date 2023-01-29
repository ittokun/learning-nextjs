# 他のホストオプション

> Ref: https://nextjs.org/learn/basics/deploying-nextjs-app/other-hosting-options

Next.jsは、Node.jsをサポートするホスティングプロバイダにデプロイすることが出来ます。

`nextjs-blog`の`package.json`には以下のようなビルドと、起動スクリプトが入っているはずです。

```json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

以下のコマンドを実行すると、`.next`フォルダに本番アプリケーションがビルドされます。

```bash
npm run build
```

ビルド後に、以下のコマンドを実行すると、静的生成ページ、サーバーサイドレンダリングページの両方を提供するページとAPI RoutesをサポートするNode.jsサーバーが立ち上がります。

```bash
npm run start
```

> ヒント：package.jsonのstartスクリプトを以下のように更新することで、PORTを指定することが出来ます。
>
> `"start": "next start -p $PORT"`

## 感想

none in particular
