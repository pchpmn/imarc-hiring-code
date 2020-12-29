const globalConfig = {
    development: {
        address: 'http://localhost:3000',
        preventIndexing: true
    },

    staging: {
        address: 'https://STAGING.URL',
        preventIndexing: true
    },

    production: {
        address: 'http://pchpmn.com/imarc',
        preventIndexing: false
    } 
};

module.exports = globalConfig[process.env.NODE_ENV || 'development']