// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample endpoint returning DevOps metrics data
app.get('/api/metrics', (req, res) => {
    res.json({
        deploymentFrequency: "Lightening Fast Delivery",
        leadTimeForChanges: "< 30 mins",
        timeToRestoreService: "< 5 mins",
        changeFailRate: "< 1%"
    });
});

// For testing purposes (CI validation)
app.get('/api/health', (req, res) => {
    res.status(200).send('Healthy');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app; // Export for unit tests
