
/**
 * Default config for Docker-based test suite.
 */

/**
 * Export services config.
 */

module.exports = {
  chavinci: {
    host: 'localhost',
    password: 'bar',
    port: 18443,
    username: 'foo'
  },
  chavinciMultiWallet: {
    host: 'localhost',
    password: 'bar',
    port: 18453,
    username: 'foo'
  },
  chavinciSsl: {
    host: 'localhost',
    password: 'bar',
    port: 18463,
    username: 'foo'
  },
  chavinciUsernameOnly: {
    host: 'localhost',
    port: 18473,
    username: 'foo'
  }
};
