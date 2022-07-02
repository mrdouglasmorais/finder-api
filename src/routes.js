import { Router } from 'express';

import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../swagger';

const routes = new Router();

routes.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

routes.get('/', (req, res) => {
  res.json({
    message: 'Tudo certo com os trem'
  })
});


export default routes;