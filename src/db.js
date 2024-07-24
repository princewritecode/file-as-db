import fs from 'fs';

const DB_PATH = new URL('../db.json', import.meta.url).pathname;

export const getDB = async () =>
{
    const db = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(db);
};