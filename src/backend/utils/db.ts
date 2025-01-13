import pool from '../config/database.js';

export async function executeQuery<T>(
  query: string,
  params?: any[]
): Promise<T> {
  try {
    const [rows] = await pool.execute(query, params);
    return rows as T;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

export async function beginTransaction() {
  const connection = await pool.getConnection();
  await connection.beginTransaction();
  return connection;
}

export async function commitTransaction(connection: any) {
  await connection.commit();
  connection.release();
}

export async function rollbackTransaction(connection: any) {
  await connection.rollback();
  connection.release();
} 