import 'dotenv/config';
import app from './app';
import connectToDatabase from './Models/Connection';

const PORT = process.env.PORT || 3001;
connectToDatabase()
  .then(() => {
    app.listen(PORT);
  })
  .catch(() => {
    throw new Error('Failed to connect to database');
  });
