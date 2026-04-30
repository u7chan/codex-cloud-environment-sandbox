# codex-cloud-environment-sandbox

https://developers.openai.com/codex/cloud/environments のプレイグラウンド用リポジトリ

`apps/` 配下にサンプルを配置する、モノレポ構成のサンプルです。

## JavaScript / Bun サンプル

Bun のテストランナー `bun test` を使った、ESM 構成の最小サンプルを含みます。

```sh
npm test
```

## Python / unittest サンプル

`apps/python-sample` に、標準ライブラリ `unittest` を使った最小サンプルを追加しています。

```sh
cd apps/python-sample
python3 -m unittest discover -s tests -p 'test_*.py'
```
