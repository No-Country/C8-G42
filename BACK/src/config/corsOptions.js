const { whiteListCors } = require("./config");

const corsOptions = {
    origin: function (origin, callback) {
        // console.log("origin:", origin)
        if (!origin || whiteListCors.indexOf(origin) !== -1) {   // Eliminar !origin || para PRODUCCIÓN (para evitar que accedan la API directamente del navegador)
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
};
module.exports = corsOptions;