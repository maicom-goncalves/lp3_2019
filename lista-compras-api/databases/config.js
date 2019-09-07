const config = {
    'development': {
        db: 'lista_compras_dev',
        user: 'postgres',
        password: 'ifms',
        host: 'localhost',
        dialect: 'postgres',
        port: 5434
    },
    'test': {
        db: 'lista_compras_test',
        user: 'postgres',
        password: 'ifms',
        host: 'localhost',
        dialect: 'postgres',
        port: 5434
    }
};

module.exports = config;