export const getError = err => {
    return err.response  &&  err.response.data.message
        ? err.response.data.message
        : err.message;
    // NOTE: err.response.data.message refers to server.js app.get('/api/products/slug/:slug') error handling
    // NOTE: otherwise, return the error message from the error object
}