
import * as express from 'express';
import "reflect-metadata"

const app: express.Express = express();

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(3005, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${3005}`);
});
