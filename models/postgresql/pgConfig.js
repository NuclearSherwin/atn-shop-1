const Pool = require('pg').Pool;

const pg_conn = new Pool(
    {
        user: 'htqyfsfdxynnjd',
        host: 'ec2-54-160-200-167.compute-1.amazonaws.com',
        database: 'dbpo9jj0n6uu96',
        password: 'f464e84adb46a44458c1f21b691d2426dd414abcffc45ccb7cf6fe387a5fb6b8',
        port: 5432,
        ssl: {
            rejectUnauthorized: false,
        },
    }
);

// test database
// pg_conn.query(`SELECT * FROM shops`, (err, res) => {
//     if (!err) {
//         console.log(res.rows);
//     }
//     else {
//         console.log(err.message)
//     }
//     pg_conn.end;
// })

module.exports = pg_conn;