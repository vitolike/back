import * as model from '../models/providers.js'

export async function getAll(req, res) {
  const result = await model.getAll()
  res.json(result.rows)
}

export async function getById(req, res) {
  const result = await model.getById(req.params.id)
  const item = result.rows[0]
  if (!item) return res.status(404).json({ code: 404, message: 'Provider não encontrado' })
  res.json(item)
}

export async function create(req, res) {
  if (!Object.keys(req.body).length) {
    return res.status(400).json({ code: 400, message: 'Dados obrigatórios ausentes' })
  }
  const result = await model.create(req.body)
  res.status(201).json({ code: 201, message: 'Provider criado com sucesso', data: result.rows[0] })
}

export async function update(req, res) {
  if (!Object.keys(req.body).length) {
    return res.status(400).json({ code: 400, message: 'Dados obrigatórios ausentes' })
  }
  const result = await model.update(req.params.id, req.body)
  if (!result.rowCount) {
    return res.status(404).json({ code: 404, message: 'Provider não encontrado para atualizar' })
  }
  res.json({ code: 200, message: 'Provider atualizado com sucesso', data: result.rows[0] })
}

export async function remove(req, res) {
  const result = await model.remove(req.params.id)
  if (!result.rowCount) {
    return res.status(404).json({ code: 404, message: 'Provider não encontrado para remover' })
  }
  res.json({ code: 200, message: 'Provider removido com sucesso' })
}
