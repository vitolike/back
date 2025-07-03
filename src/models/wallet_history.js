import db from '../utils/db.js'

export async function getAll() {
  return db.query('SELECT * FROM wallet_history')
}

export async function getById(id) {
  return db.query('SELECT * FROM wallet_history WHERE id = $1', [id])
}

export async function create(data) {
  const keys = Object.keys(data)
  const values = Object.values(data)
  const params = keys.map((_, i) => `$${i + 1}`).join(',')
  const query = `INSERT INTO wallet_history (${keys.join(',')}) VALUES (${params}) RETURNING *`
  return db.query(query, values)
}

export async function update(id, data) {
  const keys = Object.keys(data)
  const values = Object.values(data)
  const sets = keys.map((key, i) => `${key} = $${i + 1}`).join(',')
  const query = `UPDATE wallet_history SET ${sets} WHERE id = $${keys.length + 1} RETURNING *`
  return db.query(query, [...values, id])
}

export async function remove(id) {
  return db.query('DELETE FROM wallet_history WHERE id = $1', [id])
}
