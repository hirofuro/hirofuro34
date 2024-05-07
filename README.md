# 広島フロントエンド勉強会 Vol.34

## 『Solid.js ハンズオン』

広島フロントエンド勉強会 Vol.34 『Solid.js ハンズオン』のハンズオン用リポジトリです。

>2024年4月20日
> 
> Solid.jsのハンズオンを行います。
> 
> Solid.jsはReactの影響を受けたJavaScriptフレームワークで、Reactとの類似点が多くReactの経験があれば容易に移行ができます。  
> Solid.jsを初めて使う方、Reactを使っている方、Solid.jsもReactも初めての方を対象に、主要な機能を確認しつつ、Solid.jsとAPIベースのヘッドレスCMSサービスのmicroCMSを使って実際にコーディングしてみましょう。


### ハンズオン内容

microCMSを使って、Solid.jsでNEWSを取得し表示する。

microCMSの登録が必要です。

[microCMS](https://microcms.io/)

* エンドポイントは「news」にしています。
* 登録時に入力したドメイン名（管理画面左上にも記載）を `/src/utility/vars.jsx` 内の「serviceDomain」に記載してください。
* 権限管理のAPIキー管理に記載の「APIキー」を `/src/utility/vars.jsx` 内の「apiKey」記載してください。

### 開発環境の起動

PCにNode.js(v18以上)のインストールが必要です。

[Node.js](https://nodejs.org/)

```
npm install

npm run dev
```
