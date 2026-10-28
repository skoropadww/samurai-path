const NAMES = [
  'Dimych', 'Viktor', 'Sveta', 'Andrew', 'Sasha', 'Lida', 'Vasia', 'Pasha',
  'Olga', 'Igor', 'Natasha', 'Maksim', 'Katya', 'Denis', 'Yulia', 'Artem',
  'Irina', 'Roman', 'Masha', 'Oleg', 'Anna', 'Sergey', 'Dasha', 'Nikita',
  'Polina', 'Egor', 'Vera', 'Kirill', 'Alina', 'Timur',
]

const STATUSES = [
  'Learning React every day',
  'Redux is my friend',
  'Samurai way!',
  null,
  'Coffee & code',
  'Looking for a job',
  null,
  'Hooks > classes?',
]

const emptyContacts = () => ({
  facebook: null,
  website: null,
  vk: null,
  twitter: null,
  instagram: null,
  youtube: null,
  github: null,
  mainLink: null,
})

const createUser = (id, overrides = {}) => ({
  id,
  name: NAMES[(id - 1) % NAMES.length],
  uniqueUrlName: null,
  status: STATUSES[id % STATUSES.length],
  photos: { small: null, large: null },
  aboutMe: null,
  lookingForAJob: id % 3 === 0,
  lookingForAJobDescription: id % 3 === 0 ? 'React developer' : null,
  contacts: emptyContacts(),
  email: null,
  password: null,
  following: [],
  ...overrides,
})

export const createSeed = () => {
  const users = [
    createUser(1, {
      name: 'samurai dimych',
      email: 'free@samuraijs.com',
      password: 'free',
      status: 'I am a local samurai',
      aboutMe: 'Demo account of the local backend',
      contacts: { ...emptyContacts(), github: 'github.com' },
      following: [2, 3, 5],
    }),
    createUser(2, {
      name: 'test user',
      email: 'test@samuraijs.com',
      password: 'test',
      following: [1],
    }),
  ]

  for (let id = 3; id <= 42; id++) {
    users.push(createUser(id))
  }

  users.push(
    createUser(43, {
      name: 'Vilat',
      email: 'skoropadww@gmail.com',
      password: 'publicreact',
    }),
  )

  const accounts = [
    { name: 'Alex Frontend', email: 'alex@samuraijs.com', password: 'alex123', status: 'Pixel-perfect or nothing', aboutMe: 'CSS wizard and React fan' },
    { name: 'Maria Redux', email: 'maria@samuraijs.com', password: 'maria123', status: 'One store to rule them all', aboutMe: 'Loves reducers and pure functions' },
    { name: 'Ivan Hooks', email: 'ivan@samuraijs.com', password: 'ivan123', status: 'useEffect(() => coffee(), [])', aboutMe: 'Refactoring classes into hooks' },
    { name: 'Elena TypeScript', email: 'elena@samuraijs.com', password: 'elena123', status: 'any is not an answer', aboutMe: 'Types make me sleep well' },
    { name: 'Petr Backend', email: 'petr@samuraijs.com', password: 'petr123', status: 'REST in peace', aboutMe: 'Node.js and databases' },
    { name: 'Olga Designer', email: 'olga@samuraijs.com', password: 'olga123', status: 'Figma is open', aboutMe: 'UI/UX designer joining the samurai way' },
    { name: 'Nikolay Tester', email: 'nikolay@samuraijs.com', password: 'nikolay123', status: 'It works on my machine', aboutMe: 'QA engineer, finds bugs everywhere' },
    { name: 'Anna Junior', email: 'anna@samuraijs.com', password: 'anna123', status: 'First commit done!', aboutMe: 'Just started learning React', lookingForAJob: true, lookingForAJobDescription: 'Junior React developer' },
    { name: 'Dmitry Mentor', email: 'dmitry@samuraijs.com', password: 'dmitry123', status: 'Ask me about closures', aboutMe: 'Mentor at the samurai path' },
    { name: 'Kate Fullstack', email: 'kate@samuraijs.com', password: 'kate123', status: 'From DB to DOM', aboutMe: 'Fullstack developer, React + Express', lookingForAJob: true, lookingForAJobDescription: 'Middle fullstack developer' },
  ]

  accounts.forEach((account, index) => {
    users.push(
      createUser(44 + index, {
        lookingForAJob: false,
        lookingForAJobDescription: null,
        following: [1, 43],
        ...account,
      }),
    )
  })

  return { users, sessions: {} }
}
