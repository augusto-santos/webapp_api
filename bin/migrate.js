'use strict'

const path = require('path')

const server = require(path.resolve(__dirname, '../server/server.js'))
const mysql = server.dataSources.mySQL;

const base = ['User', 'AcessToken', 'ACL', 'RoleMapping', 'Role']

const custom = ['Task']

const lbTables = [].concat(base, custom)

// Run
//==============================
mysql.automigrate(lbTables, function(err){
  if(err) throw err
  console.log(' ')
  console.log('Tables [' + lbTables + '] reset in ' + mysql.adapter.name)
  console.log(' ')
  mysql.disconnect()
  process.exit(0)
})