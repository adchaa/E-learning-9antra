export const StatusCode = {
  Ok: 200,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  InternalServerError: 500,
};

export class HttpError extends Error {
  constructor(message, code) {
    super(message);
    this.statusCode = code;
  }
}
