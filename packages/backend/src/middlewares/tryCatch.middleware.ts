import { Request, Response, NextFunction } from 'express';

const tryCatch = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(fn(req, res, next)).catch(next);
  };
};

export default tryCatch;
