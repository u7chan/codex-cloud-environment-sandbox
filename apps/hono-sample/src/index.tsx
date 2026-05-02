/** @jsxImportSource hono/jsx */
import { Hono } from 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'

const app = new Hono()

app.use(
  '*',
  jsxRenderer(({ children }) => (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hono SSR Sample</title>
      </head>
      <body>{children}</body>
    </html>
  ))
)

app.get('/', (c) => {
  return c.render(
    <main>
      <h1>Hono JSX SSR Sample</h1>
      <p>このページは Hono JSX を使ってサーバーサイドレンダリングしています。</p>
    </main>
  )
})

app.get('/api/hello', (c) => {
  return c.text('Hello from /api/hello')
})

export default app

if (import.meta.main) {
  Bun.serve({
    fetch: app.fetch,
    port: 3000
  })

  console.log('Hono sample is running at http://localhost:3000')
}
