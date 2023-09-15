import { express } from "express";
const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
});
app.listen(process.env.PORT || 5000);
//# sourceMappingURL=server.js.map