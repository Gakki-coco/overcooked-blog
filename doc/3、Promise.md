
1. typeof Promise === 'function'
2. Promise 原型方法
   - `Promise.prototype.then` return 一个新的 Promise
   - `Promise.prototype.catch` return 一个新的 Promise

3. Promise 静态方法
   - Promise.resolve
   - Promise.reject
   - Promise.all
   - Promise.race

4. Promise 作用
   - 状态存储
   - 异步处理
   - 链式调用

5. Promise 状态
   - pending
   - rejected
   - fulfilled

6. then 接收两个函数作为参数，第一个处理 resolve 的结果，第二个处理 reject 的结果
7. then 和 catch 会将这些回调函数，存入处理队列。如果 Promise 已经是 fulfilled 或者 rejected 状态，则 autoRun
8. then 和 catch 从数据结构的角度讲是一个链表，原来 new 的 Promise 有个指针指向它们返回的新的 Promise