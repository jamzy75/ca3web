/** @type {import('next').NextConfig} */
const nextConfig = { experimental: {
    
},

    env: {
        
        host: 'locahhost',
        port: '3306',
        user:  'root'   ,
        password: '',
        database: 'my_guitar_shop1',

        host_dev: 'localhost',
        port_dev: '3306',
        user_dev: 'root',
        password_dev: '',
        database_dev: 'my_guitar_shop1'

    }
};

module.exports = nextConfig;
