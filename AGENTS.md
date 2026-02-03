# Repository Guidelines

## プロジェクト構成とモジュール配置
- `docs/` は VitePress のコンテンツと Vue コンポーネントを管理します。
- `docs/index.md` はホームページの入口で、フロントマターとコンポーネント読み込みを含みます。
- `docs/init.md` は追加ページです。
- `docs/components/` はページで使う Vue SFC を配置します（例: `Projects.vue`, `Skills.vue`）。
- `docs/.vitepress/config.mts` はサイトメタデータ、ナビ、テーマ設定を定義します。
- `docs/.vitepress/theme/` はローカルテーマの上書きを管理します。
- `firebase.json` は Firebase Hosting の設定です。

## ビルド・テスト・開発コマンド
- `pnpm install` で依存関係をインストール（Node.js 22.17.1、pnpm 9.12.2 想定）。
- `pnpm docs:dev` でローカルの VitePress 開発サーバーを起動します。
- `pnpm docs:build` で `docs/.vitepress/dist` に静的サイトをビルドします。
- `pnpm docs:preview` でビルド成果物をプレビューします。

## コーディングスタイルと命名規則
- Markdown フロントマターと Vue SFC は 2 スペースインデントを使います。
- script ブロックは既存に合わせてシングルクォートを優先します。
- コンポーネント名は `PascalCase`、ファイル名は `PascalCase.vue` を維持します。
- Lint/Format は未導入のため、周辺ファイルのスタイルに合わせます。

## テストガイドライン
- 自動テストは未設定です。
- PR 前に `pnpm docs:build` を実行し、`pnpm docs:preview` で見た目の崩れがないか確認します。

## コミットと PR ガイドライン
- コミットメッセージのプレフィックスは、以下の種類のみを使用してください。
形式は `プレフィックス: 絵文字 要約` とし、プレフィックスと絵文字をセットで使用してください。

| プレフィックス | 絵文字 | コード | 説明 |
| --- | --- | --- | --- |
| feat | ✨ | :sparkles: | 新機能の追加 |
| fix | 🐛 | :bug: | バグ修正 |
| docs | 📝 | :memo: | ドキュメントのみの変更 |
| style | 💄 | :lipstick: | コードの意味に影響しない変更 |
| refactor | ♻️ | :recycle: | バグ修正や新機能追加以外のコード変更 |
| perf | ⚡️ | :zap: | パフォーマンスを改善するコード変更 |
| test | ✅ | :white_check_mark: | 不足しているテストの追加や既存テストの修正 |
| chore | 🔧 | :wrench: | ビルドプロセスや補助ツールの変更 |
| merge | 🔀 | :twisted_rightwards_arrows: | ブランチのマージ |
| remove | 🔥 | :fire: | ファイルやコードの削除 |
| wip | 🚧 | :construction: | 作業中の機能 |
| deps | ⬆️ | :arrow_up: | 依存関係の更新 |
| deps | ➕ | :heavy_plus_sign: | 依存関係の追加 |
| deps | ➖ | :heavy_minus_sign: | 依存関係の削除 |
| ci | 👷 | :construction_worker: | CI/CDの追加・更新 |

- PR には簡潔な概要、関連 Issue のリンク、UI 変更の前後スクリーンショットを含めます。
- 実行したコマンド（例: `pnpm docs:build`）を PR 説明に記載します。

## 設定・デプロイ注意点
- ナビゲーションやソーシャルリンク、メタデータ変更は `docs/.vitepress/config.mts` を更新します。
- Firebase Hosting の設定は `firebase.json` にあり、デプロイ要件と整合させて更新します。
