const express = require('express');
const app = express();

const requestQueue = {};
const MAX_REQUESTS = 10;
const PROCESS_RATE = 1;
const leakyBucket = (req, res, next) => {
  const currentTime = Date.now();
  const userIP = req.ip;

  if (!requestQueue[userIP]) {
    requestQueue[userIP] = [];
  }

  // Process the requests in the queue
  requestQueue[userIP] = requestQueue[userIP].filter(timestamp => currentTime - timestamp < MAX_REQUESTS * 1000 / PROCESS_RATE);

  if (requestQueue[userIP].length < MAX_REQUESTS) {
    requestQueue[userIP].push(currentTime);
    next();
  } else {
    res.status(429).send('Too many requests, please try again later.');
  }
};

app.use(leakyBucket);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*

Concept
The Leaky Bucket algorithm processes requests at a fixed rate. Excess requests are queued and processed later, simulating a bucket with a hole at the bottom where water (requests) leaks out at a constant rate.

Detailed Implementation
Step 1: Maintain a queue for incoming requests.
Step 2: Process requests from the queue at a fixed rate.
Step 3: If the queue exceeds its capacity, deny new requests.

*/