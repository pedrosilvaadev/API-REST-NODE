import fastify from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'

const app = fastify()

app.get('/hello', async () => {
  const transactions = await knex('transactions').insert({
    id: crypto.randomUUID(),
    title: 'New transaction',
    amount: 5000,
  })

  return { transactions }
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('http server running')
  })
