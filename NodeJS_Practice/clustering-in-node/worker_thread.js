/*

The worker thread module enables the use of threads that execute javascript in paraller

code executed in a worker thread runs in a seperate child process, preventing it from blocking your main application

Diff between cluster module and worker_thread
The cluster module can be used to run multiple instances of nodejs that can distribute the workload
worker_thread  module allows running multiple application thread in a single Nodejs instance

when process isolation is not needed , that is , no seperate instances of v8,event loop and memory are needed,
we should use worker_thread

Worker threads operate at thread level, providing a way to run JavaScript code in parallel within a single process. Clusters operate at process level, allowing you to create multiple Node. js processes (workers) to handle incoming network requests.

*/