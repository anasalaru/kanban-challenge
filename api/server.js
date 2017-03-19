import express from 'express'
import { MongoClient } from 'mongodb'
import GraphQLHTTP from 'express-graphql'
import { graphql } from 'graphql'
import { introspectionQuery } from 'graphql/utilities'
import fs from 'fs'

import Schema from './schema'


let app = express()

app.use(express.static('public'));

(async () => {
  let db = await MongoClient.connect('mongodb://anamaria.salaru:kanban1234@ds119380.mlab.com:19380/kanban')

  let schema = Schema(db)

  app.use('/graphql', GraphQLHTTP({
    schema,
    graphiql: true
  }))
  app.listen(3001, () => console.log('Listening on port 3001'))

  let json = await graphql(schema, introspectionQuery)
  fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err => {
    if (err) throw err

    console.log('schema json generated')
  })
})()

// app.get('/tasks', (req, res) => {
//   db.collection('tasks').find({}).toArray((err, tasks) => {
//     if (err) {
//       throw err
//     }
//     res.json(tasks)
//   })

