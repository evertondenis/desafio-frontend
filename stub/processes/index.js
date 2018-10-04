const mock = require('./mock')

const basePath = '/processo'

const all = {
  method: 'GET',
  path: `${basePath}`,
  handler: (req, reply) => reply(mock.processes),
}

const process = {
  method: 'GET',
  path: `${basePath}/{id}`,
  handler: (req, reply) => reply(mock.process),
}

const deleteProcess = {
  method: 'DELETE',
  path: `${basePath}/{id}`,
  handler: (req, reply) => reply(mock.processes),
}

module.exports = {
  all,
  process,
  deleteProcess,
}
