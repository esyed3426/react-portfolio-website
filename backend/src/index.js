import express from 'express';
const app = express();
const { PORT = 3030} = process.env;
import bodyParser from 'body-parser';
import cors from 'cors';
import data from "./data.js";

app.use(bodyParser.json()).use(cors());


// ----------------------------- GET REQUESTS -----------------------------


// Base path
app.get("/", (req, res) => res.send("This is the (very shady and basic) backend with all dem APIs that I'm using for my site. Why are you here???"));

// Getting a list of projects
app.get("/api/projects", (req, res) => {
    return res.json(data.projects)
});

// Get projects by id
app.get("/api/projects/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const project = data.projects.find((pr) => pr.id == id);
    if (!project) {
        res.status(404).json({error: "Project not found"});
    }
    return res.json(project);
});


// ----------------------------- LOCAL HOSTING -----------------------------


app.listen(PORT, () => console.log(`I'm listening on http://localhost:${PORT}/`));

export default app;