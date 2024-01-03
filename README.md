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