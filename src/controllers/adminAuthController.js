import db from '../utils/db.js'
import bcrypt from 'bcryptjs'
import { signToken } from '../utils/jwt.js'

export async function loginAdmin(req, res) {
  const { username, password } = req.body
  const result = await db.query('SELECT * FROM admins WHERE username = $1', [username])
  const admin = result.rows[0]
  if (!admin) return res.status(401).json({ code: 401, message: 'Admin não encontrado' })
  const valid = await bcrypt.compare(password, admin.password_hash)
  if (!valid) return res.status(401).json({ code: 401, message: 'Senha inválida' })
  const token = signToken({ id: admin.id, username: admin.username, role: admin.role })
  res.json({ code: 200, message: 'Login administrador bem-sucedido', token })
}
