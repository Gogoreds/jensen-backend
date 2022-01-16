const cors = require("cors")
const express = require("express")
    const app = express()

process.env.PORT = 3000

app.use(cors())
app.get("/", (req ,res)=>{
    res.set('WWW-Authenticate', 'Basic realm="Access to Index"')
    res.status(401).send("Unauthorised access")
    })

app.listen(3000 , ()=>{
    console.log(`STARTED LISTENINNG ON PORT ${process.env.PORT}`)
});
