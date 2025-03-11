const apiKey = 'e2cb7742913ce6163cd0c3395d7faeef'; // Replace with your actual API key

// Fetch market data
async function fetchMarketData() {
    try {
        const response = await fetch(`http://api.marketstack.com/v1/tickers?access_key=${apiKey}`);
        const data = await response.json();

        if (data.error) {
            console.error('Error fetching market data:', data.error.message);
        } else {
            // Find best and worst performers
            const performers = data.data.sort((a, b) => b.change - a.change);
            const bestPerformer = performers[0];
            const worstPerformer = performers[performers.length - 1];

            // Update the dashboard
            document.getElementById('best-performer').textContent = `${bestPerformer.symbol}: ${bestPerformer.change}%`;
            document.getElementById('worst-performer').textContent = `${worstPerformer.symbol}: ${worstPerformer.change}%`;
        }
    } catch (error) {
        console.error('Error fetching market data:', error);
    }
}

// Simulate algorithm performance
function updateAlgorithmPerformance() {
    const accuracy = (Math.random() * 100).toFixed(2); // Random accuracy for demo
    const profitLoss = (Math.random() * 1000 - 500).toFixed(2); // Random P/L for demo

    document.getElementById('accuracy').textContent = `${accuracy}%`;
    document.getElementById('profit-loss').textContent = `$${profitLoss}`;
}

// Calculate market projections
function updateMarketProjections() {
    const projection30 = (Math.random() * 20 - 10).toFixed(2); // Random projection for 30 days
    const projection60 = (Math.random() * 30 - 15).toFixed(2); // Random projection for 60 days
    const projection90 = (Math.random() * 40 - 20).toFixed(2); // Random projection for 90 days

    document.getElementById('projection-30').textContent = `${projection30}%`;
    document.getElementById('projection-60').textContent = `${projection60}%`;
    document.getElementById('projection-90').textContent = `${projection90}%`;
}

// Initialize the dashboard
fetchMarketData();
updateAlgorithmPerformance();
updateMarketProjections();
