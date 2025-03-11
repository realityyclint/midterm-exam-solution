const express = require('express');
const app = express ();
const port = 3000;

//serve static file from the public folder
app.use (express.static('public'));

app.get('/test', (req, res) => {
    // Send a JSON response with a message
    res.json({ message: 'Express is working! Clint Brian Castillo' });
  });
  
  // Start the server and listen on port 3000
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });