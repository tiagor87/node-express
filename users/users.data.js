const { Client } = require('pg');
const { Observable } = require('rxjs/Rx');

module.exports = (connectionString) => {
    return {
        all() {
            const client = new Client(connectionString);
            return Observable
                .fromPromise(client.connect())
                .switchMap(() => client.query(`
                SELECT
                    *
                FROM
                    users
                WHERE
                    deleteDate IS NULL
                `))
                .finally(() => client.end())
                .retry(2)
                .map(res => res.rows);
        }
    }
}