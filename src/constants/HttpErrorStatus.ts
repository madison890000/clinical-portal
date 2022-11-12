const HTTP_ERROR_STATUSES = {
    200: 'success',
    204: 'empty body',
    400: 'no Authorization',
    401: 'Not logged or not a valid session token',
    404: 'Not Found',
} as const;


export type HTTP_CODE = keyof typeof HTTP_ERROR_STATUSES;

export default HTTP_ERROR_STATUSES
