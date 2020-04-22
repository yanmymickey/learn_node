// const buf = Buffer.from('runoob', 'ascii');

// // 输出 72756e6f6f62
// console.log(buf.toString('hex'));

// // 输出 cnVub29i
// console.log(buf.toString('base64'));

// // 创建一个长度为 10、且用 0 填充的 Buffer。
// const buf1 = Buffer.alloc(10);
// console.info("buf1:")
// console.log(buf1);

// // 创建一个长度为 10、且用 0x1 填充的 Buffer。 
// const buf2 = Buffer.alloc(10, 1);
// console.info("buf2:")
// console.log(buf2);

// // 创建一个长度为 10、且未初始化的 Buffer。
// // 这个方法比调用 Buffer.alloc() 更快，
// // 但返回的 Buffer 实例可能包含旧数据，
// // 因此需要使用 fill() 或 write() 重写。
// const buf3 = Buffer.allocUnsafe(10);
// console.info("buf3:")
// console.log(buf3);

// // 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
// const buf4 = Buffer.from([1, 2, 3]);
// console.info("buf4:")
// console.log(buf4);

// // 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
// const buf5 = Buffer.from('tést');
// console.info("buf5:")
// console.log(buf5);

// // 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
// const buf6 = Buffer.from('tést', 'latin1');
// console.info("buf6:")
// console.log(buf6);

// // 写入缓冲区
// buf = Buffer.alloc(256);
// len = buf.write("www.runoob.com");

// console.log("写入字节数 : "+  len);
// console.log(buf);

// // 从缓冲区读取数据
// buf = Buffer.alloc(26);
// for (var i = 0 ; i < 26 ; i++) {
//   buf[i] = i + 97;
// }

// console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
// console.log( buf.toString('ascii',0,5));   //使用 'ascii' 编码, 并输出: abcde
// console.log( buf.toString('utf8',0,5));    // 使用 'utf8' 编码, 并输出: abcde
// console.log( buf.toString(undefined,0,5)); // 使用默认的 'utf8' 编码, 并输出: abcde


// // 将 Buffer 转换为 JSON 对象
// const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
// const json = JSON.stringify(buf);

// // 输出: {"type":"Buffer","data":[1,2,3,4,5]}
// console.log(json);

// const copy = JSON.parse(json, (key, value) => {
//     return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
// });

// // 输出: <Buffer 01 02 03 04 05>
// console.log(copy);

// // 缓冲区合并
// var buffer1 = Buffer.from(('菜鸟教程'));
// var buffer2 = Buffer.from(('www.runoob.com'));
// var buffer3 = Buffer.concat([buffer1,buffer2]);
// console.log("buffer3 内容: " + buffer3.toString());

// // 缓冲区比较
// var buffer1 = Buffer.from('ABC');
// var buffer2 = Buffer.from('ABCD');
// var result = buffer1.compare(buffer2);

// if(result < 0) {
//    console.log(buffer1 + " 在 " + buffer2 + "之前");
// }else if(result == 0){
//    console.log(buffer1 + " 与 " + buffer2 + "相同");
// }else {
//    console.log(buffer1 + " 在 " + buffer2 + "之后");
// }

// // 拷贝缓冲区
// var buf1 = Buffer.from('abcdefghijkl');
// var buf2 = Buffer.from('RUNOOB');

// //将 buf2 插入到 buf1 指定位置上
// buf2.copy(buf1, 2);

// console.log(buf1.toString());

// // 缓冲区裁剪
// var buffer1 = Buffer.from('runoob');
// // 剪切缓冲区
// var buffer2 = buffer1.slice(0,2);
// console.log("buffer2 content: " + buffer2.toString());

// // 缓冲区长度
// var buffer = Buffer.from('www.runoob.com');
// //  缓冲区长度
// console.log("buffer length: " + buffer.length);