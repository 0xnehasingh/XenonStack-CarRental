import express from 'express'
const app = express();
const port = process.env.PORT || 5002;
app.listen(port, () => {
    console.log(`Serve at: http://localhost:${port}`);
})