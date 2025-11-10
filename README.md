# Japan Data Portal (Vite + React + Tailwind)

日本の各データ粒度（世界視点→町丁）を4段構成で表示するデータポータルのプロトタイプです。Vite + React + TypeScript をベースに Tailwind CSS 3 を設定しています。

## フォルダ構成

```
.
├─ public/                # 静的アセット（faviconなど）
├─ src/
│  ├─ App.tsx             # UIロジックとセクション定義
│  ├─ main.tsx            # Reactエントリポイント
│  └─ index.css           # Tailwindのエントリ + ベーススタイル
├─ dist/                  # `npm run build` の成果物（静的ホスティング用）
├─ tailwind.config.js     # Tailwind設定（カスタムフォント/カラーなど）
├─ postcss.config.js      # Tailwindビルド用PostCSS設定
├─ vite.config.ts         # Vite設定
├─ tsconfig*.json         # TypeScript設定
└─ package.json           # 依存関係とスクリプト
```

## セットアップ

```bash
npm install
```

## 開発サーバー

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開くとHMR付きの開発環境が起動します。

## ビルド

```bash
npm run build
```

`dist/` 以下に静的ファイルが生成されます。任意の静的ホスティングにデプロイしてください。

## プレビュー（ビルド成果物の確認）

```bash
npm run preview
```

ローカルで `dist/` を配信し、本番同等の挙動を確認できます。
