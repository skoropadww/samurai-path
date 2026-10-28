import { Router } from 'express'
import { findUser, save } from '../db.js'
import { requireAuth } from '../auth.js'
import { ok, fail } from '../response.js'

export const followRouter = Router()

followRouter.use(requireAuth)

followRouter.get('/:userId', (req, res) => {
  const currentUser = findUser(req.userId)
  res.json(currentUser.following.includes(Number(req.params.userId)))
})

followRouter.post('/:userId', (req, res) => {
  const currentUser = findUser(req.userId)
  const target = findUser(req.params.userId)

  if (!target) return res.json(fail('User not found'))
  if (target.id === currentUser.id) return res.json(fail('You cannot follow yourself'))
  if (currentUser.following.includes(target.id)) {
    return res.json(fail('You are already following this user'))
  }

  currentUser.following.push(target.id)
  save()
  res.json(ok())
})

followRouter.delete('/:userId', (req, res) => {
  const currentUser = findUser(req.userId)
  const targetId = Number(req.params.userId)

  if (!currentUser.following.includes(targetId)) {
    return res.json(fail('You are not following this user'))
  }

  currentUser.following = currentUser.following.filter((id) => id !== targetId)
  save()
  res.json(ok())
})
