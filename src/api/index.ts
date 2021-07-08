import { Router } from 'express';
import addressRouter from './address/router/router';
export default (): Router => {
  const app = Router();
  app.use('/address', addressRouter);
  //TODO: add routes here...

  return app;
};
