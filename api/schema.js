import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

const taskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    name:  {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    status: {
      type: GraphQLString
    },
    id: {
      type: GraphQLInt
    },
    subtasks: {
      type: new GraphQLList(GraphQLString)
    }
  }
})

let Schema = (db) => {
  let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        tasks: {
          type: new GraphQLList(taskType),
          resolve: () => db.collection('tasks').find({}).toArray()
        }
      })
    })
  })
  return schema
}


export default Schema
