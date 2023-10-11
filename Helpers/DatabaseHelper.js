const mysql = require('mysql');

class DatabaseHelper {
    static async getData(sql, values, single = false) {
        const connection = mysql.createConnection({
            host: process.env.STORE_DB_HOST,
            user: process.env.STORE_DB_USER,
            password: process.env.STORE_DB_PASSWORD,
            database: process.env.STORE_DB_NAME,
            connectTimeout: 1000 // 1
        });

        return new Promise((resolve, reject) => {
            connection.query(sql, values, (error, results) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (single) resolve(results[0]);
                    else resolve(results)
                }
            });
        }).finally(() => {
            connection.end();
        });
    }

    static async writeRaw(sql, values) {
        const connection = mysql.createConnection({
            host: process.env.STORE_DB_HOST,
            user: process.env.STORE_DB_USER,
            password: process.env.STORE_DB_PASSWORD,
            database: process.env.STORE_DB_NAME,
            connectTimeout: 1000 // 1
        });

        return new Promise((resolve, reject) => {
            connection.query(sql, values, (error, results) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(results);
                }
            });
        }).finally(() => {
            connection.end();
        });
    }
}
  
module.exports = DatabaseHelper;

