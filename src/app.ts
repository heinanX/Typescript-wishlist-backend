import express from 'express'
import cors from 'cors'
import { userRouter } from './user/user.router'
import { entriesRouter } from './entries/entries.router'

export const app = express();

// -----> insert corsOption into cors' parenthesis if you want to limit endpoints
// const corsOptions = {
//     origin: ['http://localhost:3000/api/journal', 'http://localhost:3000/api/journal/entry']
// }

app.use(cors())
app.use(express.json())

app.use('/api/users', userRouter)
app.use('/api/journal', entriesRouter)