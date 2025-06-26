import express, {Request, Response} from 'express'
const app = express()
const port = 3001

app.get('/', (req: Request, res: Response) => {
    let HelloMessage = "hiiih"
  res.send(HelloMessage)
})

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})
