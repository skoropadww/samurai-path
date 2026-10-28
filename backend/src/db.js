import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import { createSeed } from './seed.js'

const DB_PATH = fileURLToPath(new URL('../data/db.json', import.meta.url))

const load = () => {
  if (existsSync(DB_PATH)) {
    return JSON.parse(readFileSync(DB_PATH, 'utf8'))
  }
  const seed = createSeed()
  write(seed)
  return seed
}

const write = (data) => {
  mkdirSync(dirname(DB_PATH), { recursive: true })
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2))
}

export const db = load()

export const save = () => write(db)

export const resetDb = () => write(createSeed())

export const findUser = (id) => db.users.find((user) => user.id === Number(id))
