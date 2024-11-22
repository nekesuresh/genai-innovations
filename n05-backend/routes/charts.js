const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();



router.get('/summary', (req, res) => {
    const summaryChartData = {
      labels: ['January', 'February', 'March'],
      data: [10, 20, 30],
    };
  
    res.json(summaryChartData); // Send the chart data as JSON
  });
  

// Example chart data
/*router.get('/chart1', authMiddleware, (req, res) => {
    const chartData = [
        { label: 'January', value: 100 },
        { label: 'February', value: 120 },
        { label: 'March', value: 90 },
    ];
    res.json(chartData);
});

router.get('/chart2', authMiddleware, (req, res) => {
    const chartData = [
        { category: 'Category A', value: 50 },
        { category: 'Category B', value: 75 },
        { category: 'Category C', value: 100 },
    ];
    res.json(chartData); // Send the second chart data
});*/

module.exports = router;
