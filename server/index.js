import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { PORT } from './config.js';
import { connectDB } from './db.js';

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'src/images')));

app.use('/api', router);

app.use(errorHandler);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
