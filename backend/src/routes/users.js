import { Router } from 'express'
import { db, findUser } from '../db.js'

export const usersRouter = Router()

const MAX_PAGE_SIZE = 100

const toListItem = (user, currentUser) => ({
  name: user.name,
  id: user.id,
  uniqueUrlName: user.uniqueUrlName,
  photos: user.photos,
  status: user.status,
  followed: Boolean(currentUser?.following.includes(user.id)),
})

usersRouter.get('/', (req, res) => {
  const page = Math.max(1, Number.parseInt(req.query.page, 10) || 1)
  const count = Math.min(MAX_PAGE_SIZE, Math.max(1, Number.parseInt(req.query.count, 10) || 10))
  const term = String(req.query.term ?? '').trim().toLowerCase()
  const currentUser = req.userId ? findUser(req.userId) : null

  let users = [...db.users].sort((a, b) => b.id - a.id)

  if (term) {
    users = users.filter((user) => user.name.toLowerCase().includes(term))
  }

  if (req.query.friend === 'true' && currentUser) {
    users = users.filter((user) => currentUser.following.includes(user.id))
  }

  const items = users
    .slice((page - 1) * count, page * count)
    .map((user) => toListItem(user, currentUser))

  res.json({ items, totalCount: users.length, error: null })
})
