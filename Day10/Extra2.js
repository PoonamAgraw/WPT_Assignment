console.log('Start');
Promise.resolve().then(() => console.log('Promise'));
setTimeout(() => console.log('Timeout'), 0);
process.nextTick(() => console.log('Next tick'));
setImmediate(() => console.log('Immediate'));
console.log('End');
