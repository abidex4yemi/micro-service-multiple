module.exports = {
  apps: [
    {
      name: 'users',
      script: './users-service',
      args: 'one two',
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
      env: {
        DEV_ENV_DB_NAME: 'bunny',
        REDIS_HOST: 'redis',
        REDIS_PORT: '6379',
        NODE_ENV: 'development',
        MONGO_URI:
          'mongodb+srv://yemi:y2219vm4cgXc9qEf@cluster0-c8bpo.mongodb.net/test?retryWrites=true&w=majority',
      },
      env_production: {
        NODE_ENV: 'production',
        PROD_ENV_DB_NAME: 'bunny',
        REDIS_HOST: 'redis',
        REDIS_PORT: '6379',
        NODE_ENV: 'production',
        MONGO_URI:
          'mongodb+srv://yemi:y2219vm4cgXc9qEf@cluster0-c8bpo.mongodb.net/test?retryWrites=true&w=majority',
      },
    },
    {
      name: 'task',
      script: './tasks-service',
      args: 'one two',
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
      env: {
        DEV_ENV_DB_NAME: 'bunny',
        REDIS_HOST: 'redis',
        REDIS_PORT: '6379',
        NODE_ENV: 'development',
        MONGO_URI: '<insert url>',
      },
      env_production: {
        NODE_ENV: 'production',
        PROD_ENV_DB_NAME: 'bunny',
        REDIS_HOST: 'redis',
        REDIS_PORT: '6379',
        NODE_ENV: 'production',
        MONGO_URI: '<insert url>',
      },
    },
    {
      name: 'client',
      script: './client/server.js',
      args: 'one two',
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],

  deploy: {
    production: {
      user: 'abidex4yemi',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: 'git@github.com:abidex4yemi/micro-service-multiple.git',
      path: '/var/www/production',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
    },
  },
};
