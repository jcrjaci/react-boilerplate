module.exports = process.env.NODE_ENV === 'production'
  ? require('./store.prod.js')
  : require('./store.dev.js');
