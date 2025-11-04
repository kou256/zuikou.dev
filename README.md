# zuikou.dev
- ポートフォリオサイト用のプロジェクト
- Vitepressを使用して作成している
- ホスティングにはFirebase Hostingを使用している

## ディレクトリ構成
- `docs/`: ページとして公開するMarkdownファイルやページ構成を管理しているディレクトリ
    - `index.md`: アクセス時に最初に表示されるページ
    - `about-me.md`: これまでの使用言語などを記載しているページ
    - `projects.md`: これまでに作成したプロジェクトなどについて説明しているページ
    - `.vitepress/config.ts`: ページ構成などを設定するファイル
- `firebase.json`: Firebaseに関する設定を記述したファイル
- `.firebaserc`: 使用するFirebaseプロジェクトが記載されたファイル

## 開発
- Node.jsおよびpnpmがインストールされていることを前提とする
    - インストールされていない場合は[asdf](https://asdf-vm.com/guide/getting-started.html)や[Volta](https://docs.volta.sh/guide/getting-started)などを使用してインストールすることを推奨する
- Node.js 22.17.1とpnpm 9.12.2を使用して開発している
- パッケージのインストール
    ```shell
    pnpm install
    ```
- 開発サーバーの起動
    ```shell
    pnpm docs:dev
    ```
- 静的ページのビルド
    ```shell
    pnpm docs:build
    ```
    
