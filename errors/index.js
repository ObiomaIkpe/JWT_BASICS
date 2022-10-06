const unauthenticatedError = require('./unauthenticated')
const badRequestError = require('./bad-request')
const customAPIError = require('./custom-error')


module.exports = {
    unauthenticatedError,
    badRequestError,
    customAPIError
}