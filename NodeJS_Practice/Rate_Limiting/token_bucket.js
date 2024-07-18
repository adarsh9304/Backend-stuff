const express = require('express');
const app = express();

const tokenBuckets = {};
const MAX_TOKENS = 10;
const REFILL_RATE = 1; // 1 token per second
const WINDOW_SIZE = 60 * 1000; // 1 minute

const tokenBucket = (req, res, next) => {
  const currentTime = Date.now();
  const userIP = req.ip;

  if (!tokenBuckets[userIP]) {
    tokenBuckets[userIP] = { tokens: MAX_TOKENS, lastRefill: currentTime };
  }

  const bucket = tokenBuckets[userIP];
  const elapsedTime = currentTime - bucket.lastRefill;

  // Refill the tokens
  bucket.tokens += Math.floor(elapsedTime / 1000) * REFILL_RATE;
  bucket.tokens = Math.min(bucket.tokens, MAX_TOKENS);
  bucket.lastRefill = currentTime;

  if (bucket.tokens > 0) {
    bucket.tokens--;
    next();
  } else {
    res.status(429).send('Too many requests, please try again later.');
  }
};

app.use(tokenBucket);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*

Concept
The Token Bucket algorithm maintains a bucket filled with tokens, which are added at a fixed rate. Each request consumes a token. If no tokens are available, the request is denied. The bucket has a maximum capacity.

Detailed Implementation
Step 1: Initialize a bucket with a maximum number of tokens.
Step 2: Refill tokens at a fixed rate.
Step 3: For each request, check if a token is available.
Step 4: If a token is available, allow the request and remove a token.
Step 5: If no tokens are available, deny the request.

*/