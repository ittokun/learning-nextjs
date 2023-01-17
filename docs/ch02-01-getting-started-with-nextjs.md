# Next.jsを始める

> 参考: https://nextjs.org/learn/foundations/from-react-to-nextjs/getting-started-with-nextjs

Next.jsをプロジェクトに追加すると、もうunpkg.comから`react, react-dom`のスクリプトを読み込む必要もなくなります。
代わりに、`Node Package Manager: npm`を使って、これらのパッケージをローカルにインストールします。

> パソコンにNode.jsがインストールされている必要があります。

まずは、`package.json`というファイルを新規に作成し、空のオブジェクトを作成します。

```json
{}
```

次にターミナルで、`npm install react react-dom next`を実行します。成功すればプロジェクトの依存関係が`package.json`に表示されるはずです。

```json
{
  "dependencies": {
    "next": "^13.1.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

また、`node_modules`フォルダには、依存関係の実際のファイルが含まれています。

`index.html`に戻り、以下のコードを削除してください。

1. `react, react-dom`はすでにNPMでインストールされています
2. `html, body`タグは、Next.jsが生成してくれるので不要です
3. `app`要素や`ReactDOM.render()`メソッドと連動するコード
4. Babelスクリプトも、Next.jsがJSXを変換するコンパイラを持っているのでいりません
5. `<script type="text/jsx">`タグ
6. `React.useState(0)`の`React.`の部分

上記の行を削除した後にファイルの先頭に`import { useState } from 'react';`を追加すると以下のようなコードになるはずです。

```javascript
import { useState } from 'react';

function Header({ title }) {
  return <h1>{(title) ? title : "Default Title"}</h1>;
}

function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like({likes})</button>
    </div>
  );
}
```

HTMLファイルに残されたコードはJSXだけなので、拡張子を`.html`から`.js, .jsx`に変更することが出来ます。

これでNext.jsアプリに移行するために必要なことが3つになりました。

1. `index.jsx`ファイルを`pages`という新しいフォルダに移動します。
2. Reactコンポーネントに`export default`を追加して、Next.jsがどのコンポーネントをこのページのメインコンポーネントとしてレンダリングするか識別できるようにします。

```javascript
export default function HomePage() {}
```

3. `package.json`に、Next.js開発サーバーを起動させるスクリプトを追加します。

```json
{
  "scripts": {
    "dev": "next dev"
  }
}
```

ターミナルで`npm run dev`を実行し、ブラウザで`localhost:3000`にアクセスするとアプリが表示されます。

またファイルを保存するとブラウザが自動的に更新され変更が反映されるようになっています。

この機能を高速リフレッシュと呼ばれこの機能は編集を即座にフィードバックするもので、Next.jsにあらかじめ設定されているものです。

表面的にはわずかなコード行数の削減ですが、ReactはモダンなインタラクティブUIを構築するために不可欠なプリミティブを提供するライブラリだということを好調するのに役立ちます。
しかし、作成したUIをアプリケーションに結合するためにはまだいくつかの作業が必要です。

ここまで見ると、Next.jsのメリットがすでに感じられるかもしれません。Babelスクリプトを削除し、複雑なツール設定を考える必要がなくなったことを実感していただけると思います。
また、Next.jsに期待される多くの開発者体験機能の一つであるFast Refreshもすごく便利です。
