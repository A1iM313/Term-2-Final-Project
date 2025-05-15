import express from "express";
import "dotenv/config";
import * as db from "./db/index.js";
import pg from "pg";

const requestHandler = express();
const port = process.env.PORT || 3004;

requestHandler.use(express.json());

requestHandler.get("/api/v1/traffic_volume", async (req, res) => {
  const dbResponse = await db.query("select * from traffic_volume");
  res.send("Hello World!");
});

requestHandler.listen(port, () => {
  console.log(`Server up and listening on port ${port}`);
});

//-----------------Bar Chart

requestHandler.get("/api/v1/VisualizationMenu", async (req, res) => {
  try {
    const dbResponse = await db.query(`
            SELECT weather_main,
            AVG(traffic_volume) as traffic_volume
            FROM traffic_volume
            GROUP BY weather_main
            `);

    const result = dbResponse.rows.map((row) => ({
      weather: row.weather_main,
      traffic: parseFloat(row.traffic_volume.toFixed(1)),
    }));

    res.json(result);
  } catch (error) {
    console.error("Error calculating site averages:", error);
    res.status(500).json({ error: "Server error" });
  }

  requestHandler.get("/api/v1/VisualizationMenu", async (req, res) => {
    {
      tr;
    }
  });
});

//-----------------Line Chart

requestHandler.get("/api/v1/VisualizationMenu", async (req, res) => {
  try {
    const dbResponse = await db.query(`
        SELECT 
        date_time,
        traffic_volume
        FROM air_quality
        WHERE date_time IS NOT NULL
        ORDER BY date_time
        EXTRACT(YEAR FROM date_time) AS year
        `);

    const formattedDate = new Date(Date).toISOString().split("T")[0];
    
    const result = Object.keys()
  } catch {}
});
