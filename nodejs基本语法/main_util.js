// // util.callbackify 回调函数
// const util = require('util');

// async function fn() {
//   return 'hello world';
// }
// const callbackFunction = util.callbackify(fn);

// callbackFunction((err, ret) => {
//   if (err) throw err;
//   console.log(ret);
// });

// // util.inherits
// var util = require('util'); 
// function Base() { 
//     this.name = 'base'; 
//     this.base = 1991; 
//     this.sayHello = function() { 
//     console.log('Hello ' + this.name); 
//     }; 
// } 
// Base.prototype.showName = function() { 
//     console.log(this.name);
// }; 
// function Sub() { 
//     this.name = 'sub'; 
// } 
// util.inherits(Sub, Base); 
// var objBase = new Base(); 
// objBase.showName(); 
// objBase.sayHello(); 
// console.log(objBase); 
// var objSub = new Sub(); 
// objSub.showName(); 
// // objSub.sayHello(); 
// console.log(objSub); 

// // util.inspect
// var util = require('util'); 
// function Person() { 
//     this.name = 'D15h35'; 
//     this.toString = function() { 
//     return this.name; 
//     }; 
// } 
// var obj = new Person(); 
// console.log(util.inspect(obj)); 
// console.log(util.inspect(obj, true)); 

// // util.isArray(object)
// var util = require('util');

// util.isArray([])
//   // true
// util.isArray(new Array)
//   // true
// util.isArray({})
//   // false

// // util.isRegExp(object)
// // 如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。
// var util = require('util');

// util.isRegExp(/some regexp/)
//   // true
// util.isRegExp(new RegExp('another regexp'))
//   // true
// util.isRegExp({})
//   // false

// // util.isDate(object)
// var util = require('util');

// util.isDate(new Date())
//   // true
// util.isDate(Date())
//   // false (without 'new' returns a String)
// util.isDate({})
//   // false