import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './routes/auth.js'
import adminAuthRoutes from './routes/adminAuth.js'
import swaggerUi from 'swagger-ui-express'
import swaggerDoc from './utils/swagger.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (_, res) => res.send({ ok: true, msg: 'Casino API - Express' }))
app.use('/auth', authRoutes)
app.use('/admin', adminAuthRoutes)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

// CRUD rotas
import usersRoutes from './routes/users.js'
import providersRoutes from './routes/providers.js'
import gamesRoutes from './routes/games.js'
import walletsRoutes from './routes/wallets.js'
import wallet_historyRoutes from './routes/wallet_history.js'
import transactionsRoutes from './routes/transactions.js'
import betsRoutes from './routes/bets.js'
import game_roundsRoutes from './routes/game_rounds.js'
import bonusesRoutes from './routes/bonuses.js'
import user_bonusesRoutes from './routes/user_bonuses.js'
import event_logsRoutes from './routes/event_logs.js'
import sessionsRoutes from './routes/sessions.js'
import adminsRoutes from './routes/admins.js'
import admin_logsRoutes from './routes/admin_logs.js'
import user_blocksRoutes from './routes/user_blocks.js'
import affiliatesRoutes from './routes/affiliates.js'
app.use('/users', usersRoutes)
app.use('/providers', providersRoutes)
app.use('/games', gamesRoutes)
app.use('/wallets', walletsRoutes)
app.use('/wallet_history', wallet_historyRoutes)
app.use('/transactions', transactionsRoutes)
app.use('/bets', betsRoutes)
app.use('/game_rounds', game_roundsRoutes)
app.use('/bonuses', bonusesRoutes)
app.use('/user_bonuses', user_bonusesRoutes)
app.use('/event_logs', event_logsRoutes)
app.use('/sessions', sessionsRoutes)
app.use('/admins', adminsRoutes)
app.use('/admin_logs', admin_logsRoutes)
app.use('/user_blocks', user_blocksRoutes)
app.use('/affiliates', affiliatesRoutes)
