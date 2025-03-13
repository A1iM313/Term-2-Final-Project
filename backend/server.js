import express from "express";
import "dotenv/config";




const requestHandler = express();
const port = process.env.PORT || 3004;

requestHandler.use(express.json());

requestHandler.listen(port, () => {
    console.log(`Server up and listening on port ${port}`)
})

