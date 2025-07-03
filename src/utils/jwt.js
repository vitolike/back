import jwt from 'jsonwebtoken'
const secret = process.env.JWT_SECRET || 'supersecret'

export function signToken(payload) {
  return jwt.sign(payload, secret, { expiresIn: '1d' })
}

export function verifyToken(token) {
  return jwt.verify(token, secret)
}
