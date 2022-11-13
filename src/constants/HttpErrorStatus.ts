const HTTP_ERROR_STATUSES = {
    400: 'No Authorization',
    401: 'Not logged or not a valid session token',
    404: 'Not Found',
} as const;


export type HTTP_ERROR_CODE = keyof typeof HTTP_ERROR_STATUSES;

export default HTTP_ERROR_STATUSES
