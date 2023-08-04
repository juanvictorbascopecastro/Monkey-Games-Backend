module.exports = {
    apps: [
        {
            name: 'Monkey Games',
            script: 'C:/PROJECT/monkey-games/backend/index.js',
            env: {
                DB_DIALECT: 'postgres',
                DB_USER: 'postgres',
                DB_PASS: '12345678',
                DB_NAME_DEVELOPMENT: 'monkeyGames',
                DB_HOST: 'localhost',
                DB_PORT: 5432,
                SECRET_KEY: 'Golberto123',
                URL_PAGE: 'http://localhost:5173/#/'
            }
        }
    ]
}
