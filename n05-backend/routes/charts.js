const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();



router.get('/summary', (req, res) => {
    const summaryChartData = {
      labels: ['Banking', 'Insurance', 'Energy', 'Capital markets', 'Retail', 'Communication and Media'],
      data: [54, 48, 43, 40, 34, 33],
    };
   console.log(summaryChartData);
    res.json(summaryChartData); // Send the chart data as JSON
  });

  
router.get('/reports', (req, res) => {
    const summaryChartData1 = {
      labels: ['North America', 'Europe', 'Middle East and North Africa', 'Asia Pacific', 'Latin America'],
      data: [41,26,3,22,8],
    };
    console.log(summaryChartData1);
    res.json(summaryChartData1); // Send the chart data as JSON
  });
  

module.exports = router;
