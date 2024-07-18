
const express = require('express');
const app = express();

const requestLog = {};
const MAX_REQUESTS = 10;
const WINDOW_SIZE = 60 * 1000; // 1 minute

const slidingWindowLog = (req, res, next) => {
  const currentTime = Date.now();
  const userIP = req.ip;

  if (!requestLog[userIP]) {
    requestLog[userIP] = [];
  }

  // Filter requests in the current window
  requestLog[userIP] = requestLog[userIP].filter(timestamp => currentTime - timestamp < WINDOW_SIZE);

  if (requestLog[userIP].length >= MAX_REQUESTS) {
    res.status(429).send('Too many requests, please try again later.');
  } else {
    requestLog[userIP].push(currentTime);
    next();
  }
};

app.use(slidingWindowLog);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



/*
Concept
The Sliding Window Log algorithm keeps a log of request timestamps. For each incoming request, it checks the log to determine the number of requests within the sliding time window. If the number exceeds the limit, the request is denied.

Detailed Implementation
Step 1: Maintain a log (array) of timestamps for each user.
Step 2: For each request, filter out timestamps outside the current window.
Step 3: If the log size exceeds the limit, deny the request.
Step 4: Otherwise, add the current timestamp to the log.

*/