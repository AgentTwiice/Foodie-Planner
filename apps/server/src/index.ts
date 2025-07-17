import express from 'express';
import router from './router';

const app = express();
app.use(express.json());
app.use(router);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
