module.exports = {
  swagger: '2.0',
  info: {
    description: 'Documentação - Finder API',
    version: '1.1.0',
    title: 'Car Finder',
    contact: { email: 'mr.douglasmorais23@gmail.com'}
  },
  host: 'https://carfinder-api.herokuapp.com',
  schema: ['http'],
  paths: {
    '/brads': {
      post: {
        tags: [
          'Brands',
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Você deve passar o email e password no body',
            required: true,
            schema: { $ref: '#/definitions/CreateBrandyBody' },
          },
        ],
        summary: 'Cadastra uma marca na base',
        description: '',
        operationId: 'add',
        consumes: [
          'application/json',
        ],
        produces: [
          'application/json',
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              type: 'array',
              items: { $ref: '#/definitions/CreateBrand' },
            },
          },
          409: { description: 'Usuário já cadastrado' },
        },
      },
    },
    '/session': {
      post: {
        tags: [
          'Login',
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Você deve passar o email e password no body',
            required: true,
            schema: { $ref: '#/definitions/LoginBody' },
          },
        ],
        summary: 'Realiza o login da aplicação',
        description: '',
        operationId: 'login',
        consumes: [
          'application/json',
        ],
        produces: [
          'application/json',
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              type: 'array',
              items: { $ref: '#/definitions/Login' },
            },
          },
          401: { description: 'Usuário não autorizado' },
        },
      },
    },
  },
  securityDefinitions: {
    api_key: {
      type: 'apiKey',
      name: 'api_key',
      in: 'header',
    },
  },
  definitions: {
    Users: {
      type: 'object',
      required: [
        'name',
        'email',
        'password',
      ],
      properties: {
        id: {
          type: 'integer',
          format: 'integer',
        },
        name: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' },
      },
      xml: { name: 'Usuario' },
    },
    Login: {
      type: 'object',
      required: [
        'email',
        'password',
      ],
      properties: {
        user: {
          type: 'object',
          id: {
            type: 'integr',
            format: 'uuid',
          },
          name: { type: 'string' },
          email: { type: 'string' },
          password: { type: 'string' },
        },
        token: { type: 'bearear' },
      },
      xml: { name: 'Usuario' },
    },
    LoginBody: {
      type: 'object',
      required: [
        'email',
        'password',
      ],
      properties: {
        email: { type: 'string' },
        password: { type: 'string' },
      },
      xml: { name: 'Usuario' },
    },
    CreateBrand: {
      type: 'object',
      required: [
        'name',
        'logo',
      ],
      properties: {
        id: {
          type: 'integr',
          format: 'uuid',
        },
        name: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' },
      },
      xml: { name: 'Usuario' },
    },
    CreateBrandyBody: {
      type: 'object',
      required: [
        'name',
        'logo',
      ],
      properties: {
        name: { type: 'string' },
        logo: { type: 'string' }
      },
      xml: { name: 'Brand' },
    },
  },
  externalDocs: {
    description: 'Acesse o repositorio',
    url: 'https://github.com/mrdouglasmorais/finder-api',
  },
}