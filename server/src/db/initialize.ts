import client from './index';
import fs from 'fs';
import path from 'path';

const initialize = async () => {
  await client.connect();

  const sqlPath = path.resolve(__dirname, 'initialize.sql');
  const sql = fs.readFileSync(sqlPath, 'utf8');
  await client.query(sql);

  process.exit(0);
};

initialize();
