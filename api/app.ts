import express, { Application } from 'express'
import { checkAuth } from './middleware/middleware';

const app: Application = express();
const port: number = 3000;
app.use(express.json());

app.use(checkAuth);

import { userRouter } from './routes/userRouter'
app.use("/user", userRouter);

app.listen(port, () => console.log(`API is running at PORT:${port}`));

export default app