# hono-sample

Hono を使ったシンプルなサンプルアプリです。

## 起動方法

```bash
bun run apps/hono-sample/src/index.tsx
```

または

```bash
cd apps/hono-sample
bun run dev
```

## エンドポイント

- `/`: Hono JSX で SSR した HTML ページ
- `/api/hello`: 固定テキストを返す API
