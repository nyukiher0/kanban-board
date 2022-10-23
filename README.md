

このプロジェクトは [Next.js](https://nextjs.org/) プロジェクトであり、[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)を用いて作成されました。

## 開始方法

開発用サーバー（ローカルホスト）から

```bash
npm run dev
# or
yarn dev
```
を実施し、[http://localhost:3000](http://localhost:3000) をブラウザから開いてください。`pages/...`配下のコンポーネントを編集することができ、編集を行うとオートアップデートがかかります。

## 開発課題

+ 異なるタスクコンポーネント間のタスク移動が不可能
+ vercelデプロイ不可能（型付け不完全のためエラー発生）
