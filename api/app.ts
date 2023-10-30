import express, { Application } from 'express'
import { midlleWare } from './middleware/middleware';

const app: Application = express();
const port: number = 3000;
app.use(express.json());

// app.use(midlleWare.checkAuth.bind(midlleWare));

import { userRouter } from './routes/userRouter'
app.use("/user", userRouter);

app.listen(port, () => console.log(`API is running at PORT:${port}`));

export default app