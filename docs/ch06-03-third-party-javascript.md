# サードパーティJavaScript

> Ref: https://nextjs.org/learn/basics/assets-metadata-css/third-party-javascript

サードパーティJavaScriptは、サードパーティのソースから追加されたスクリプトを指します。
通常サードパーティのスクリプトは、分析、広告、カスタマーサポートウェジェットなど、ゼロから記述する必要のない新しい機能をサイトに導入するために含まれます。

## サードパーティJavaScriptを追加する

`pages/posts/first-post.js`を開いて次のコードを記述します。

```javascript
<Head>
  <title>First Post</title>
  <script src="https://connect.facebook.net/en_US/sdk.js" />
</Head>
```

このスクリプトには、Facebookのソーシャルプラグインやその他の機能を導入するために一般的に使用されるFacebook SDKが含まれています。
しかしながらこの方法でスクリプトを含めると、同じページで取得される他のJavaScriptと比較して、いつロードされるか明確にはわかりません。
特定のスクリプトがレンダーブロッキングを引き起こし、ページのコンテンツの読み込みを遅らせる可能性があり、パフォーマンスに大きな影響を与える可能性があります。

## Scriptコンポーネントを使用する

`next/script`は、HTMLの`script`要素を拡張したもので、追加のスクリプトを取得して実行する際に最適化されます。

```javascript
import Script from "next/script";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad{() => console.log(`script loaded correctly, window.FB has been populated`)}
      />
      {/* ... */}
    </>
  );
}
```

Scriptコンポーネントには、いくつかの追加プロパティが定義されています。

- `strategy`、サードパーティのスクリプトがいつロードされるか制御します。 `lazyOnload`値は、ブラウザのアイドル時にこの特定のスクリプトを遅延ロードするようにNext.jsに伝えます。
- `onLoad`、スクリプトのロードが終了した後に、任意のJavaScriptコードを実行するときに使用します。

以下のURLにアクセスし開発者ツールのConsoleパネルを見て上記のメッセージを確認してみましょう。
また、`window.FB`を実行すると、スクリプトがこのグローバル変数に値を書き込んだことが確認できます。

### 感想

I think it would be useful to be able to decide when to load external third party JavaScript.

I don't use it much. thought ...
