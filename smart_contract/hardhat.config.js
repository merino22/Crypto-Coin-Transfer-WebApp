// https://eth-ropsten.alchemyapi.io/v2/EbA1IH5zlB15TdDukXXNtx6aRwFjcC7W

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/EbA1IH5zlB15TdDukXXNtx6aRwFjcC7W',
      accounts: [ 'e300044fa7cd2320139eff0aeb86e0a885e76f3e013804737f238b0572f8491e' ]
    }
  }
}