"use strict";
/*
1、vscode配置自动编译

    1.第一步   tsc --inti 生成tsconfig.json   改 "outDir": "./js",


    2、第二步 任务 - 运行任务  监视tsconfig.json


2、typeScript中的数据类型

    typescript中为了使编写的代码更规范，更有利于维护，增加了类型校验，在typescript中主要给我们提供了以下数据类型


        布尔类型（boolean）
        数字类型（number）
        字符串类型(string)
        数组类型（array）
        元组类型（tuple）
        枚举类型（enum）
        
        任意类型（any）
        null 和 undefined
        void类型
        never类型

3、typeScript中的函数

    3.1、函数的定义
    3.2、可选参数
    3.3、默认参数
    3.4、剩余参数
    3.5、函数重载
    3.6、箭头函数  es6
4、typeScript中的类

    4.1 类的定义
    4.2 继承
    4.3 类里面的修饰符
    4.4 静态属性 静态方法
    4.5 抽象类 多态
5、typeScript中的接口

    5.1 属性类接口
    5.2 函数类型接口
    5.3 可索引接口
    5.4 类类型接口
    5.5 接口扩展

   
*/
var md5 = function (key, value) {
    //模拟操作
    return key + value;
};
console.log(md5('name', 'zhangsan'));
var sha1 = function (key, value) {
    //模拟操作
    return key + '----' + value;
};
console.log(sha1('name', 'lisi'));
