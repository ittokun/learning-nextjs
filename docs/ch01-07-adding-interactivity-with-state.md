# ステートによるインタラクションの追加

> 参考: https://nextjs.org/learn/foundations/from-javascript-to-react/adding-interactivity-with-state

Reactのステートとイベントハンドラを使ってどのようにインタラクティビティを付加することができるのか見ていきます。

例として、HomePageコンポーネント内にいいね！ボタンを作成します。

```javascript
function HomePage() {
  const ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button>Like</button>
    </div>
  );
}
```

## イベントをリッスンする

ボタンがクリックされたときに何か動作させたいときは、`onClick`イベントを利用します。

```javascript
<button onClick={}>Like</button>
```

Reactではイベント名はCamelCaseで書きます。`onClick`イベントは、ユーザーの操作に反応するために使用できる多くのイベントのうちの1つです。
例えば入力フィールドには`onChange`、フォームには`onSubmit`を使用します。

## イベントをハンドルする

イベントが発生するたびに処理する為の関数を定義します。

```javascript
function HomePage() {
  // ...
  function handleClick() {
    console.log("increment like count");
  }

  return (
    <div>
      {/* ... */}
      <button onClick={handleClick}>Like</button>
    </div>
  );
}
```

## ステートとフック

Reactにはフックと呼ばれる関数が用意されています。フックを使うことでコンポーネントにステートなどの追加ロジックを追加することができます。
ステートとは、ユーザーとのインタラクションによって変化するUIの情報のことで、ユーザーとのインタラクションをきっかけに変化します。

ユーザーがいいね！ボタンをクリックした回数を保存するために、ステートを使います。フックは`useState()`とも呼びます。

`useState()`は配列を返すので、配列の再構築を使ってコンポーネント内部でその配列の値にアクセスし、使用することが出来ます。

配列の最初の項目はステートの値で名前わかりやすい名前が良いでしょう。

配列の２番目の項目は値を更新する為の関数です。setの前に更新するステート変数の名前をつけるのが一般的です。

また初期値を設定することもできます。

そしてコンポーネント内部で`state`変数を使うことで、初期状態が動作していることを確認できます。

最後に、HomePageコンポーネントの中で、ステートアップデート関数である`setLikes`を定義して、`handleClick()`関数内で呼び出してみましょう。

```javascript
function HomePage() {
  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    // ...
    <button onClick={handleClick}>Like({likes})</button>
  );
}
```

ボタンをクリックすると、`handleClick`関数が呼び出され、`setLikes`が実行されることで`likes`変数の値が1つプラスされます。

> 関数の最初のパラメータとしてコンポーネントに渡されるPropsとは異なり、Stateはコンポーネント内で開始され保存されます。
> StateをPropsに渡すことはできますが、状態を更新するロジックは状態が最初に作成されたコンポーネント内で保持しておくべきです。

## Stateを管理する

今回はStateの紹介でしたが、ReactアプリケーションのStateとデータフローの管理についてはまだまだ学ぶことがあります。これから学んでいきましょう。
