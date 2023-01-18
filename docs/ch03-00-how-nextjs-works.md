# Next.jsの仕組み

> 参考: https://nextjs.org/learn/foundations/how-nextjs-works

このドキュメントの冒頭で、Reactはアプリケーションの構築や構造について比較的寡黙であること、Reactでアプリケーションを構築する方法は複数あることをお話ししました。
Next.jsは、アプリケーションを構成する為のフレームワークを提供し、開発プロセスと最終的なアプリケーションの両方を高速化する為の最適化を行います。

次節からはこれらの異なるケースにおいて、アプリケーションのコードに何が起こるのかを見ていきます。

- コードが実行される環境。Development vs Production
- コードが実行されるタイミング。Build Time vs Runtime
- レンダリングが行われる場所。Client vs Server

ではこれらの概念を深く掘り下げ、Next.jsが裏で行っている処理についてみていきます。
