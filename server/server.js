import express from 'express';

export default (cors, depInySetup, container) => {
  depInySetup();
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  /*============================[Routes]============================*/
  app.use('/api/category', container.resolve('categoryRoute'));
  app.use('/api/product', container.resolve('productRoute'));
  app.use('/api/discount', container.resolve('discountRoute'));

  /*============================[Server]============================*/
  return app;
};
