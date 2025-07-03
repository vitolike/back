import db from '../utils/db.js'
const table = 'transactions'

export function getAll() {
  return db.query(`SELECT * FROM ${table}`)
}

export function getById(id) {
  return db.query(`SELECT * FROM ${table} WHERE id = $1`, [id])
}

export function create(data) {
  const keys = Object.keys(data)
  const values = Object.values(data)
  const cols = keys.join(', ')
  const placeholders = keys.map((_, i) => `$${i + 1}`).join(', ')
  return db.query(`INSERT INTO ${table} (${cols}) VALUES (${placeholders}) RETURNING *`, values)
}

export function update(id, data) {
  const keys = Object.keys(data)
  const values = Object.values(data)
  const sets = keys.map((key, i) => `${key} = $${i + 1}`).join(', ')
  return db.query(`UPDATE ${table} SET ${sets} WHERE id = $${keys.length + 1} RETURNING *`, [...values, id])
}

export function remove(id) {
  return db.query(`DELETE FROM ${table} WHERE id = $1`, [id])
}
