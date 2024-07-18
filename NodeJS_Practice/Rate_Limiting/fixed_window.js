
const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute window
  max: 10, // limit each IP to 10 requests per windowMs
  message: 'Too many requests from this IP, please try again after a minute'
});

app.use(limiter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



/*
1. Fixed Window Counter
Concept
The Fixed Window Counter algorithm divides time into fixed-size windows (e.g., one minute). For each window, a counter tracks the number of requests. If the counter exceeds the limit within the window, subsequent requests are denied until the window resets.

Detailed Implementation
Step 1: Create a counter for each window.
Step 2: Increment the counter for each request.
Step 3: If the counter exceeds the limit, deny the request.
Step 4: Reset the counter at the end of each window.

*/