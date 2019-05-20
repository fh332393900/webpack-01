var t = new Array(2000000);
console.time('time1')
for (var i = 0; i < 2000000; ++i) {
    t.push(1)    
}
console.timeEnd('time1')