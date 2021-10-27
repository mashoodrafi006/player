require('dotenv').config();

const config = {
    env: process.env.APP_ENV,
    port: process.env.PORT || 6050,
    applicationUrl: process.env.APPLICATION_URL
};

export default config;