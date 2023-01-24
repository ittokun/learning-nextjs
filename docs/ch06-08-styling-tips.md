# スタイリングのヒント

> Ref: https://nextjs.org/learn/basics/assets-metadata-css/styling-tips

ここでは参考になりそうなスタイリングのポイントをご紹介します。

> 以下のセクションに目を通すだけでOKです。アプリに変更を加える必要はありません！

## クラス名を切り替える`clsx`ライブラリを使用する

`clsx`は、クラス名を簡単に切り替えることのできるシンプルなライブラリです。`npm install clsx, yarn add clsx`でインストールすることが出来ます。

基本的な使い方は、例えば、`success, error`どちらかのtypeを受け付けるAlertコンポーネントを作成するとします。これを、`success`の場合はテキストの色を緑、`error`の場合は赤にするといったことを簡単に出来ます。

*alert.module.css*

```css
.success {
  color: green;
}

.error {
  color: red;
}
```

*alert.js*

```javascript
import style from "./alert.module.css";
import { clsx } from "clsx";

export default function Alert({ children, type }) {
  return (
    <div
      className={clsx({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
}
```

## PostCSSの設定をカスタマイズ

Next.jsは、何も設定しなくても、PostCSSを使ってCSSをコンパイルします。

PostCSSの設定をカスタマイズするには、`postcss.config.js`ファイルをトップレベルに作成します。
これはTailwind CSSのようなライブラリを使用している場合にも有効です。

以下は、Tailwind CSSを追加する手順です。

```bash
npm install -D tailwindcss autoprefixer postcss
```

*postcss.config.js*

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

また、`tailwind.config.js`の`content`オプションでコンテンツソースを指定して設定することをお勧めします。

```javascript
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};
```

Ref:

- [PostCSSドキュメント](https://nextjs.org/docs/advanced-features/customizing-postcss-config)
- [例文](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss)

## Sassを使用する

Next.jsでは、`.scss, .sass`の両方の拡張子を使用して、Sassをインポートすることが出来ます。コンポーネントレベルのSassは、CSSモジュールと`.module.scss, .module.sass`拡張子を介して使用することが出来ます。

Next.jsでSassを使うときはまずインストールをおこないます。

```bash
npm install -D sass
```

## 終わり！

この章はこれで終了です。Next.jsの組み込みCSSサポートとCSSモジュールの詳細については、[CSSドキュメント](https://nextjs.org/docs/basic-features/built-in-css-support)を参照してください。

### 感想

That was long!!! What's next?
