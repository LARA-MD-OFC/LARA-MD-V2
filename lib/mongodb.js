const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://github.com/NOVA-MD-OFC/NOVA-MD-Help/blob/main/WhatsApp%20Image%202025-07-28%20at%2013.14.18_33ce712b.jpg?raw=true' },
    { key: 'ALIVE_MSG', value: '*🌟 Hello ${pushname}*\n\n*Welcome To NOVA-MD V1*\n\n*Onwar Theekshana*\n\n*94720522884*\n\n*Onwar Malshani*\n\n* 947612XX912*\n\n*You Can Join My Whatsapp Channel*\n\n*https://whatsapp.com/channel/0029Vb5ygc31SWsvGfvMTJ0c*' },
    { key: 'PREFIX', value: '.' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
