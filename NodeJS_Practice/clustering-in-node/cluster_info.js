/*
Node is single threaded

No matter how many cores you have, node only use a single core CPU
This is fine for I/o operation but if code has long running and CPU intensive operation,then performance issue will come

cluster module enables the creation of child processes that run simultaneously
All created workers share the same server port

master is only in charge of the workers , but does not execute application code like incoming req, reading files etc

Workers are in charge of handling incoming request, reading files etc
Each worker gets its own event loop,memory and v8 instance




*/