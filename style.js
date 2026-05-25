/* var i=1; => dễ bị lỗi, vẫn ăn nếu khởi tạo thêm var a=2;
let a=2; => báo lỗi khi khai báo lại biến
const b=5; 
Kiểu dữ liệu: 
+ hay sài: string, number, boolean, undefined, null-object;
+ + - * / %
+ > < >= <= == (đúng về giá trị) === (đúng cả giá trị lẫn kiểu dữ liệu)
*/
let a = 5.5;
a = "aaaa";
// console.log(typeof(a));
// console.log(10==="10");
// console.log(a.length);
// let fruits = ["táo", "ổi", "cam"];
// let student = {
//     name: "Phúc",
//     age : "30",
//     class : "..."
// };
// function sum(a, b){
//     console.log(a+b)
//     return a+b;
// }
// let t = sum(3, 4);
// console.log(t);
// bitwise: & | ^ ~ << >> 
// let t = 5 & 1;
// console.log(t);
// for(let i=0; i<= 5; i++){
//     console.log(i);
// }
// let n = 22;
// function ngto(n){
//     kt = n > 2;
//     for(let i=2; i<=Math.sqrt(n); i++){
//         if(n%i==0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(ngto(n));
// function soHoanHao(n){
//     let sum = 0;
//     for(let i=1; i<n; i++){
//         if(n%i==0){
//             sum += i;
//         }
//     }
//     if(sum==n){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(soHoanHao(n));
// function STN(n){
//     let du = n%1;
//     if(n>=0 && (du == 0)){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(STN(n))
let n=12;
console.log("aaaaa"+ n);
console.log(`haaaaa ${n}`);
let m = "aaaa" + 2;
console.log(m);