# codex-cloud-environment-sandbox

https://developers.openai.com/codex/cloud/environments のプレイグラウンド用リポジトリ

`apps/` 配下にサンプルを配置する、モノレポ構成のサンプルです。

## JavaScript / Bun サンプル

`apps/bun-sample` に、Bun のテストランナー `bun test` を使った最小サンプルを配置しています。

```sh
bun test apps/bun-sample/tests
```

または npm script から実行できます。

```sh
npm test
npm run test:bun-sample
```

## Python / unittest サンプル

`apps/python-sample` に、標準ライブラリ `unittest` を使った最小サンプルを配置しています。

```sh
PYTHONPATH=apps/python-sample python3 -m unittest discover -s apps/python-sample/tests -p 'test_*.py'
```

または npm script から実行できます。

```sh
npm run test:python-sample
```
