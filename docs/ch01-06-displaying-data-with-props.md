# Propsでデータを表示する

> 参考: https://nextjs.org/learn/foundations/from-javascript-to-react/displaying-data-with-props

`<Header />`コンポーネントを再利用する場合、以下のように書きます。

```javascript
const app = document.getElementById("app");

function Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
}

function HomePage() {
  return (
    <div>
      <Header />
    </div>
  );
}
```

しかし、異なるテキストを渡したい場合や、外部からデータを取得するため、事前に情報がわからない場合はどうすれば良いのでしょうか

通常のHTML要素には属性があり、それを使って要素の動作を変更する情報を渡すことができます。例えば、`src, href`属性などです。

これと同じように、Reactコンポーネントにも情報の断片をプロパティとして渡すことができます。これを`props`といいます。

![props button](https://nextjs.org/static/images/learn/foundations/props.png)

JavaScriptの関数と同様に、コンポーネントの動作や画面に表示される内容を変更するカスタム引数を受け取るコンポーネントを設計することができます。
そしてこのPropsを親コンポーネントから子コンポーネントに受け渡すことができます。

> Reactでは、データはコンポーネントツリーの下に流れます。これは一方向のデータフローと呼ばれます。次節で説明するStateは`props`として親コンポーネントから子コンポーネントに渡すことができます。

## Propsを使う

HomePageコンポーネントでは、HTML属性と同じようにHeaderコンポーネントにカスタムタイトルプロップを渡すことができます。

```javascript
function HomePage() {
  return (
    <div>
      <Header title="React 💙" />
    </div>
  );
}
```

そして小コンポーネントであるHeaderは、その最初の関数パラメータとしてこれらの`prop`を受け取ることができます。

```javascript
function Header(props) {
  console.log(props);  // { title: "React 💙" }
}
```

`props`はオブジェクトなので、関数パラメータ内で`props`の値を明示的に指定するために、**Object destructuring**を使用することができます。

```javascript
function Header({ title }) {
  return <h1>title</h1>
}
```

ブラウザでプロジェクトを開くと、titleという単語が表示されます（なんか違う）。これはReactが、プレーンテキストの文字列をDOMにレンダリングしていると考えているからです。

これは`title`が、JavaScriptの変数であることをReactに示す必要があるということです。

## JSXで変数を使用する

定義した変数を使用するには、中括弧`{}`を使用します。これはJSXマークアップの中に直接通常のJavaScriptを記述することのできる特別なJSX構文です。

```javascript
return <h1>{title}</h1>;
```

中括弧は、JSXの国にいながらJavaScriptの国に入る方法と考えることができます。中括弧の中には、任意のJavaScript式を入れることが出来ます。

```javascript
function Header(props) {
  // object property
  return <h1>{props.title}</h1>;
  // template literal
  return <h1>{`Cool ${title}`}</h1>;
  // returned value of a function
  function createTitle(title) {
    if (title) {
      return title;
    } else {
      return "Default Title";
    }
  }
  return <h1>{createTitle(title)}</h1>;
  // ternary operators
  return <h1>{(title) ? title : "Default Title"}</h1>;
}
```

これで、`props.title`に任意の文字列を渡すことが出来ます。また、三項演算子によってコンポーネントのデフォルトも考慮したので、値を全く渡さないこともできます。

コンポーネントは、アプリケーションのさまざまな部分で再利用できる一般的な`title prop`を受け入れるようになりました。必要なことはタイトルを変更するだけです。

```javascript
function HomePage() {
  return (
    <div>
      <Header title="React 💙" />
      <Header title="A new title" />
    </div>
  );
}
```

## リストの繰り返し処理

リストとしてデータを表示する場面はよくあります。配列メソッドを使ってデータを操作し、同じスタイルで異なる情報を保持するUI要素を作成することが出来ます。

> Reactはデータフェッチに関しては独断的です。つまり、ニーズに最も適したソリューションを選択できます。
後の節でNext.jsのデータ取得オプションについて説明しますが、今はデータを表現する為の方法を見ていきます。

```javascript
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
    </div>
  );
}
```

`array.map()`メソッドで配列を繰り返し、`arrow`関数で名前とリスト項目を表示します。

```javascript
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}
```

中括弧を使って、JavaScriptとJSXの世界を織り交ぜていることに注目ください。

このコードを実行すると、Reactは`key prop`が見つからないという警告を出します。これはReactがDOMのどの要素を更新すべきかを知るために、配列内の項目を一位に識別する何かが必要だからです。

現在は一意である為名前を使うことが出来ますが、アイテムIDのような一位性が保証されるものを使うことが推奨されます。

```javascript
const app = document.getElementById("app");

function Header({ title }) {
  return <h1>{(title) ? title : "Default Title"}</h1>;
}

function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<HomePage />, app);
```

次節では、ReactのStateとユーザーイベントをリッスンする方法についてみていきます。
