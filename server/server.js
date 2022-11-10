import express from 'express';

export default (cors, depInySetup, container) => {
  depInySetup();
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  /*============================[Routes]============================*/

  /*============================[Server]============================*/
  return app;
};
