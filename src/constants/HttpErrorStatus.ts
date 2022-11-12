const HttpErrorStatus = {
    200: 'success',
    204: 'empty body',
    400: 'no Authorization',
    401: 'Not logged or not a valid session token',
    404: 'Not Found',
} as const;

export default HttpErrorStatus
