# アセット

> Ref: https://nextjs.org/learn/basics/assets-metadata-css/assets

Next.jsでは、トップレベルの`public`ディレクトリ下で静的アセット（画像など）を提供することが出来ます。
`public`内のファイルは、`pages`と同様にアプリケーションのルートから参照することが出来ます。

`public`ディレクトリは、`robots.txt`やGoogle Site Verification、その他の静的アセットにも有効です。

## プロファイル写真をダウンロードする

- [このサイト](https://github.com/vercel/next-learn/blob/master/basics/basics-final/public/images/profile.jpg)からプロファイル写真をダウンロードする。
- `public/images/`ディレクトリを作成する
- 作成したディレクトリにプロファイル写真を移動させる
- 画像サイズは400px by 400px程度で良い
- `public`ディレクトリにある`vercel.svg`を削除する

## 最適化されていない画像

普通のHTMLの書き方は次のとおりです。

```html
<img src="/images/profile.jpg" alt="Your Name">
```

しかし、この書き方では以下のような処理を手作業で書くことになります。

- さまざまな画面サイズに対応した画像の作成
- サードパーティのツールやライブラリを使用して画像を最適化する
- ビューポートに入ったときだけ画像を読み込む

など、Next.jsはこのような問題を解決するために、Imageコンポーネントを提供しています。

## Imageコンポーネントで画像を最適化

`next/image`は、HTMLの`img`要素を拡張したもので、現代のウェブ用に進化したものです。

またNext.jsはデフォルトでImage Optimizationをサポートしています。
これによりブラウザがサポートしている場合、WebPのようなモダンなフォーマットで画像のリサイズ、最適化、配信を行うことが出来ます。
またビューポートが小さいデバイスに大きな画像を配信するといったことも避けることが出来ます。
そしてNext.jsが将来の画像フォーマットを自動的に採用し、それらのフォーマットがサポートするブラウザに提供することも可能です。

画像の自動最適化はどのような画像ソースに対しても機能します。画像がCMSのような外部データソースによってホストされている場合でも同様です。

## Imageコンポーネントを使う

Next.jsはビルド時に画像を最適化するのではなく、ユーザーからの要求に応じてオンデマンドで画像を最適化します。
静的サイトジェネレータや静的サイトのみのソリューションとは異なり、10枚の画像を表示する場合でも、1000万枚の画像を表示する場合でも、ビルド時間が増加することはありません。

画像はデフォルトで遅延ロードされます。つまりビューポートの外にある画像によってページ速度が低下することはありません。
画像はビューポートにスクロールされたときに読み込まれます。

画像は常にGoogleが検索ランキングで使用する予定の[Core Web Vital](https://web.dev/vitals/#core-web-vitals)である[Cumulative Layout Shift](https://web.dev/cls/)を回避する方法でレンダリングされます。

以下のコードは、`next/image`を使用してプロフィール画像を表示する例です。`height, width`のPropsは、ソース画像と同じアスペクト比で希望するレンダリングサイズにする必要があります。

```javascript
import Image from "next/image";

const YourComponent = () => (
  <Image
    src="/images/profile.jpg"
    height={144}
    width={144}
    alt="Your Name"
  />
);
```
### 感想

I thought Image Component is very good! specially, I like the Delay Loading.
