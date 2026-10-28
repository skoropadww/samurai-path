import { Router } from 'express'
import { db, findUser } from '../db.js'
import { createSession, destroySession } from '../auth.js'
import { ok, fail } from '../response.js'

export const authRouter = Router()

authRouter.get('/me', (req, res) => {
  const user = req.userId && findUser(req.userId)
  if (!user) {
    return res.json(fail('You are not authorized'))
  }
  res.json(ok({ id: user.id, email: user.email, login: user.name }))
})

authRouter.post('/login', (req, res) => {
  const { email, password, rememberMe = false } = req.body ?? {}

  if (!email || !password) {
    return res.json(fail('Enter email and password'))
  }

  const user = db.users.find(
    (candidate) =>
      candidate.email?.toLowerCase() === String(email).trim().toLowerCase() &&
      candidate.password === password,
  )

  if (!user) {
    return res.json(fail('Incorrect Email or Password'))
  }

  createSession(res, user.id, Boolean(rememberMe))
  res.json(ok({ userId: user.id }))
})

authRouter.delete('/login', (req, res) => {
  destroySession(req, res)
  res.json(ok())
})
