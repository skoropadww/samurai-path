import express from 'express'
import cors from 'cors'
import { attachUser } from './auth.js'
import { authRouter } from './routes/auth.js'
import { usersRouter } from './routes/users.js'
import { followRouter } from './routes/follow.js'
import { profileRouter } from './routes/profile.js'

const PORT = Number(process.env.PORT) || 4300
const ALLOWED_ORIGINS = [
  'http://localhost:4200',
  'http://localhost:3000',
  'http://localhost:5173',
]

const app = express()

app.use(
  cors({
    origin: ALLOWED_ORIGINS,
    credentials: true,
    allowedHeaders: ['Content-Type', 'API-KEY', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  }),
)
app.use(express.json())
app.use(attachUser)

app.use((req, res, next) => {
  res.on('finish', () => {
    console.log(`${req.method} ${req.originalUrl} -> ${res.statusCode}`)
  })
  next()
})

const api = express.Router()
api.use('/auth', authRouter)
api.use('/users', usersRouter)
api.use('/follow', followRouter)
api.use('/profile', profileRouter)

app.use('/api/1.0', api)

app.use((req, res) => {
  res.status(404).json({ message: `No endpoint ${req.method} ${req.originalUrl}` })
})

app.use((error, req, res, next) => {
  console.error(error)
  res.status(500).json({ message: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`Samurai backend is running on http://localhost:${PORT}/api/1.0/`)
})
