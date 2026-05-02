import { describe, expect, it } from 'bun:test'

import app from '../src/index'

describe('hono-sample endpoints', () => {
  it('GET / returns SSR HTML page', async () => {
    const res = await app.request('http://localhost/')

    expect(res.status).toBe(200)
    const html = await res.text()
    expect(html).toContain('<h1>Hono JSX SSR Sample</h1>')
    expect(html).toContain('<title>Hono SSR Sample</title>')
  })

  it('GET /api/hello returns fixed text', async () => {
    const res = await app.request('http://localhost/api/hello')

    expect(res.status).toBe(200)
    expect(await res.text()).toBe('Hello from /api/hello')
  })
})
