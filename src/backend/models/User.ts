import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';
import pool from '../config/database.js';

// Validation schema for user creation
export const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  role: z.enum(['admin', 'user', 'organization_admin']),
  organizationId: z.string().optional(),
});

export class User {
  static async create(userData: z.infer<typeof createUserSchema>) {
    const id = uuidv4();
    const passwordHash = await bcrypt.hash(userData.password, 10);

    const [result] = await pool.execute(
      `INSERT INTO users (id, email, password_hash, first_name, last_name, role, organization_id)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        userData.email,
        passwordHash,
        userData.firstName || null,
        userData.lastName || null,
        userData.role,
        userData.organizationId || null,
      ]
    );

    return id;
  }

  static async findByEmail(email: string) {
    const [rows] = await pool.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    return (rows as any[])[0] || null;
  }

  static async verifyPassword(password: string, passwordHash: string) {
    return bcrypt.compare(password, passwordHash);
  }
} 