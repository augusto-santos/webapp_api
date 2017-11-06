'use strict'

const models = ['Task']

module.exports = function updateCustomModels (app, next) {  
  const mysql = app.dataSources.mySQL
  mysql.isActual(models, (err, actual) => {
    if (err) {
      throw err
    }

    let syncStatus = actual ? 'in sync' : 'out of sync'

    console.log('')
    console.log(`Custom models are ${syncStatus}`)
    console.log('')

    if (actual) return next()

    console.log('Migrating Custom Models...')

    mysql.autoupdate(models, (err, result) => {
      if (err) throw err

      console.log('Custom models migration successful!')
      console.log('')

      next()
    })
  })
}