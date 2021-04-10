export type CodeDescription = {
  code: number;
  message: string;
};

// Common
export class Code {
  public static SUCCESS: CodeDescription = {
    code: 200,
    message: 'Success.',
  };

  public static BAD_REQUEST: CodeDescription = {
    code: 400,
    message: 'Bad request.',
  };

  public static UNAUTHORIZED: CodeDescription = {
    code: 401,
    message: 'Unauthorized error.',
  };

  public static WRONG_CREDENTIALS: CodeDescription = {
    code: 402,
    message: 'Wrong Credentials.',
  };

  public static ACCESS_DENIED: CodeDescription = {
    code: 403,
    message: 'Access denied.',
  };

  public static NOT_FOUND: CodeDescription = {
    code: 404,
    message: 'Not Found.',
  };

  public static CONFLICT: CodeDescription = {
    code: 409,
    message: 'Data conflict.',
  };

  public static INTERNAL: CodeDescription = {
    code: 500,
    message: 'Internal error.',
  };

  public static ENTITY_NOT_FOUND: CodeDescription = {
    code: 1000,
    message: 'Entity not found.',
  };

  public static ENTITY_VALIDATION: CodeDescription = {
    code: 1001,
    message: 'Entity validation error.',
  };

  public static USE_CASE_PORT_VALIDATION: CodeDescription = {
    code: 1002,
    message: 'Use-case port validation error.',
  };

  public static VALUE_OBJECT_VALIDATION: CodeDescription = {
    code: 1003,
    message: 'Value object validation error.',
  };

  public static ENTITY_ALREADY_EXISTS: CodeDescription = {
    code: 1004,
    message: 'Entity already exists.',
  };
}
