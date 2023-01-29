# Vercelにデプロイ

Next.jsを本番環境に導入する最も簡単な方法は、Next.jsのクリエイターが開発したVercelプラットフォームを利用することです。

Vercelは、ヘッドレスコンテンツ、コマース、またはデータベースと統合するために構築された静的およびハイブリッドアプリケーションのためのサーバーレスプラットフォームです。
Vercelは、フロントエンドチームが、パフォーマンスがデフォルトである、楽しいユーザー体験を簡単に開発、プレビュー、出荷できるようにします。
クレジットカードは不要で、無料で使い始めることが出来ます。

## Vercelアカウントを作成

[https://vercel.com/signup](https://vercel.com/signup)にアクセスして、Vercelアカウントを作成します。

## nextjs-blogリポジトリをインポート

サインアップができたら、[https://vercel.com/import/git](https://vercel.com/import/git)にアクセスして、`nextjs-blog`リポジトリをVercelにインポートします。

GithubでVercelに対して、リポジトリのアクセスを許可してからインポートを行います。

以下の設定はデフォルト値でかまいません。Vercelは、Next.jsアプリであることを自動的に検知し、最適なビルド設定を選択してくれます。

- プロジェクト名
- ルートディレクトリ
- ビルドコマンド
- 出力するディレクトリ
- 開発コマンド

デプロイすると、Next.jsのアプリがビルドを始めます。1分以内に終了するはずです。

ビルドが終わると、URLが表示されます。そのURLにアクセスすると、Next.jsのスターターページが表示されるはずです。

おめでとうございます。これでNext.jsのアプリが本番環境にデプロイされました。

### 感想

Vercel is amazing! I can't believe how easy it is to deploy to production.
