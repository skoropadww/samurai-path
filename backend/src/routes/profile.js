import { Router } from 'express'
import { findUser, save } from '../db.js'
import { requireAuth } from '../auth.js'
import { ok, fail } from '../response.js'

export const profileRouter = Router()

const MAX_STATUS_LENGTH = 300

const toProfile = (user) => ({
  aboutMe: user.aboutMe,
  contacts: user.contacts,
  lookingForAJob: user.lookingForAJob,
  lookingForAJobDescription: user.lookingForAJobDescription,
  fullName: user.name,
  userId: user.id,
  photos: user.photos,
})

profileRouter.get('/status/:userId', (req, res) => {
  const user = findUser(req.params.userId)
  if (!user) return res.status(404).json({ message: 'User not found' })
  res.json(user.status)
})

profileRouter.put('/status', requireAuth, (req, res) => {
  const status = req.body?.status ?? ''

  if (typeof status !== 'string') {
    return res.json(fail('Status must be a string'))
  }
  if (status.length > MAX_STATUS_LENGTH) {
    return res.json(fail(`Max status length is ${MAX_STATUS_LENGTH} symbols`))
  }

  findUser(req.userId).status = status
  save()
  res.json(ok())
})

profileRouter.get('/:userId', (req, res) => {
  const user = findUser(req.params.userId)
  if (!user) return res.status(404).json({ message: 'User not found' })
  res.json(toProfile(user))
})
