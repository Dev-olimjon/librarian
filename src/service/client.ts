import { Pool } from "pg"
let psd = 'postgres://postgres:12345@127.0.0.1:5432/postgres'
let client = new Pool({
    connectionString: psd
})
client.connect((err) => {
    console.log(err ? err : 'Database is start');
})
export default client