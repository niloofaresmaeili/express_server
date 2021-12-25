import express, {Application, Response, Request, NextFunction} from 'express';

//Boot application
const app : Application = express()
const port : number = 5000;

//Routing app
app.use('/',(req:Request, res:Response, next:NextFunction) => {
    res.status(200).send({data: 'Hello from niloufar application.'})
})

app.listen(port, () => {console.log(`app running on port : ${port}`)})