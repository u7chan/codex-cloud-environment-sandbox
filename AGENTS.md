# AGENTS.md

## 概要
このリポジトリは、Codex Cloud Environment Sandbox の実験・検証を行うための開発用リポジトリ。

## techstack
- JavaScript Runtime / Test Runner: Bun（`bun test`）
- Python Runtime / Test Framework: Python 3（`unittest`）

## コマンド関連（テストのみ）
- `bun test apps/bun-sample/tests`
- `npm test`
- `npm run test:bun-sample`
- `PYTHONPATH=apps/python-sample python3 -m unittest discover -s apps/python-sample/tests -p 'test_*.py'`
- `npm run test:python-sample`

## docs/ の扱い（AI向けルール）
- 明示的な指示がない限り、AI は `docs/` を参照しない。
- 理由: 現状 `docs/` は人間向けドキュメントであり、通常の実装作業には不要。
