export const ok = (data = {}) => ({
  data,
  messages: [],
  fieldsErrors: [],
  resultCode: 0,
})

export const fail = (messages, data = {}) => ({
  data,
  messages: Array.isArray(messages) ? messages : [messages],
  fieldsErrors: [],
  resultCode: 1,
})
