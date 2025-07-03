import * as model from '../models/bonuses.js'

export async function getAll(req, res) {
  const result = await model.getAll()
  res.json(result.rows)
}

export async function getById(req, res) {
  const result = await model.getById(req.params.id)
  res.json(result.rows[0])
}

export async function create(req, res) {
  const result = await model.create(req.body)
  res.status(201).json(result.rows[0])
}

export async function update(req, res) {
  const result = await model.update(req.params.id, req.body)
  res.json(result.rows[0])
}

export async function remove(req, res) {
  const result = await model.remove(req.params.id)
  res.json({ deleted: result.rowCount })
}
