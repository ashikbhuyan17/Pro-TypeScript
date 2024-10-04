import app from './app';
import mongoose from 'mongoose';
const port = 5000;

// database connection
async function bootstrap() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
    console.log('🚀 Database Connection Successful');

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log('🚀 Failed to connect database', error);
  }
}
bootstrap();
