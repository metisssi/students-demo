import express, {Request, Response} from 'express'
const app = express()
const port =  process.env.PORT || 5000

app.get('/', (req: Request, res: Response) => {
    let HelloMessage = "Hello Andriy"
  res.send(HelloMessage)
})

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})
