"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Boot application
const app = (0, express_1.default)();
const port = 5000;
//Routing app
app.use('/', (req, res, next) => {
    res.status(200).send({ data: 'Hello from niloufar application.' });
});
app.listen(port, () => { console.log(`app running on port : ${port}`); });
//# sourceMappingURL=index.js.map