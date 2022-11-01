このプロジェクトは [Next.js](https://nextjs.org/) プロジェクトであり、[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)を用いて作成されました。

## 開発背景

尊敬してやまない楽天エンジニアの先輩が「フロント開発はTrelloをさっと作れるレベルくらいになるとイイ感じなんちゃう〜？」と、私めにご助言くださり、Trelloライクな看板ボードを作ることにしました。開発に関してはほぼほぼ素人のため、いろいろな著書や動画コンテンツを見ながら作成しております。（現在もまだ開発途中で、[issue]（https://github.com/nyukiher0/kanban-board/issues）の内容をなんとか乗り越えたいところです）特にフロントエンジニアリングに特化したいわけではなく、ソフトウェア全般に長けたいと考えていて、このプロジェクトを足がかりにどんどんと開発バリエーションを増やしていきたいと考えております。

## 技術スタック

[package.json](https://github.com/nyukiher0/kanban-board/blob/main/package.json)のとおりと言えばそれまでなのですが、以下をWebフレームワークやらライブラリやらは以下を使用しています。

```
    "next": "12.3.1",
    "react": "^18.2.0",
    "react-beautiful-dnd": "^13.1.1",
    "react-bootstrap": "^2.5.0",
```


## 開始方法

開発用サーバー（ローカルホスト）から

```bash
npm run dev
# or
yarn dev
```
を実施し、[http://localhost:3000](http://localhost:3000) をブラウザから開いてください。`pages/...`配下のコンポーネントを編集することができ、編集を行うとオートアップデートがかかります。

## 開発課題

- 異なるタスクコンポーネント間のタスク移動が不可能
- vercelデプロイ不可能（型付け不完全のためエラー発生）

