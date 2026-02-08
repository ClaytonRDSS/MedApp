import { express } from 'node:express';

let router = express.Router();

router.get("/", function(req, res) {
    console.log("Oi!");
    res.status(200).jason({message: "Oi!"});
});

export default router;