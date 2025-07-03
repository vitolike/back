import db from '../utils/db.js'
import bcrypt from 'bcryptjs'
import { signToken } from '../utils/jwt.js'

export async function loginUser(req, res) {
  const { email, password } = req.body
  const result = await db.query('SELECT * FROM users WHERE email = $1', [email])
  const user = result.rows[0]
  if (!user) return res.status(401).json({ code: 401, message: 'Usuário não encontrado' })
  const valid = await bcrypt.compare(password, user.password_hash)
  if (!valid) return res.status(401).json({ code: 401, message: 'Senha inválida' })
  const token = signToken({ id: user.id, email: user.email })
  res.json({ code: 200, message: 'Login bem-sucedido', token })
}
