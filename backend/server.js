import express from "express";
import "dotenv/config";
import * as db from "./db/index.js"
import pg from "pg";


const requestHandler = express();
const port = process.env.PORT || 3004;

requestHandler.use(express.json());

requestHandler.get("/api/v1/traffic_volume", async (req, res) => {
    const dbResponse = await db.query("select * from traffic_volume")
    res.send("Hello World!")
});


requestHandler.listen(port, () => {
    console.log(`Server up and listening on port ${port}`)
})

//-----------------

app.get("/api/v1/VisualizationMenu", async (req, res) => {
    try{
        const dbResponse = await db.query(`
            SELECT weather_main,
            AVG(traffic_volume) as traffic_volume
            
            `)
    } catch{}
})

app.get("/api/v1/VisualizationMenu", async (req, res) => {
    {tr}
})