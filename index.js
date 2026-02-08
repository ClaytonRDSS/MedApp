import { express } from 'node:express';
import { pkg } from 'node:body-parser';
import { router } from './routes/router';

const app = express();
const { json, urlencoded } = pkg;

app.use(json());
app.user(urlencoded({extends: true}));

app.listen(3000, () => {
    console.log("Rodando na Porta 3000");
});

app.user('/', router);