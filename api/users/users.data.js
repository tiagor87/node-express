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
                    general.users
                WHERE
                    delete_date IS NULL
                `))
                .retry(2)
                .map(res => res.rows)
                .catch(error => {
                    return Observable.throw({
                        connectionString,
                        error
                    });
                })
                .finally(() => client.end());
        }
    }
}