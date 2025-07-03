import Fastify from 'fastify';
import { Client } from 'pg';

const fastify = Fastify({ logger: true });

const client = new Client({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

await client.connect();

fastify.get('/', async (request, reply) => {
  const result = await client.query('SELECT NOW() as now');
  return { time: result.rows[0].now };
});

const PORT = process.env.PORT || 8080;

fastify.listen({ port: PORT, host: '0.0.0.0' }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
