import { randomUUID } from 'node:crypto'
import { db, save } from './db.js'

export const SESSION_COOKIE = 'samurai_session'
const REMEMBER_ME_MS = 30 * 24 * 60 * 60 * 1000
const SESSION_MS = 24 * 60 * 60 * 1000

const parseCookies = (header = '') =>
  Object.fromEntries(
    header
      .split(';')
      .map((part) => part.trim().split('='))
      .filter(([name]) => name)
      .map(([name, ...value]) => [name, decodeURIComponent(value.join('='))]),
  )

export const createSession = (res, userId, rememberMe) => {
  const token = randomUUID()
  const ttl = rememberMe ? REMEMBER_ME_MS : SESSION_MS
  db.sessions[token] = { userId, expiresAt: Date.now() + ttl }
  save()

  res.cookie(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    // без maxAge cookie живёт до закрытия браузера
    ...(rememberMe ? { maxAge: ttl } : {}),
  })
}

export const destroySession = (req, res) => {
  const token = parseCookies(req.headers.cookie)[SESSION_COOKIE]
  if (token && db.sessions[token]) {
    delete db.sessions[token]
    save()
  }
  res.clearCookie(SESSION_COOKIE, { path: '/' })
}

export const attachUser = (req, res, next) => {
  const token = parseCookies(req.headers.cookie)[SESSION_COOKIE]
  const session = token && db.sessions[token]

  if (session && session.expiresAt < Date.now()) {
    delete db.sessions[token]
    save()
  }

  req.userId = session && session.expiresAt >= Date.now() ? session.userId : null
  next()
}

export const requireAuth = (req, res, next) => {
  if (!req.userId) {
    return res.status(401).json({ message: 'Authorization has been denied for this request.' })
  }
  next()
}
