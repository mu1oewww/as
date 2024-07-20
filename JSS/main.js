// function apply(a,b){
//     return a+b;
// }console.log(apply(2,3));
// console.log(apply(4,4));
// console.log(apply(-2,4));



// function apply(a) {
// if(a>0){
//     return "Postive";
// }

// else if(a<0){
//     return "Negative";
// }
// else if(a==0){
//     return "Zero";
// }
// }console.log(apply(5));


//  let a = 5;
//  console.log(a*1);
//  console.log(a*2);
//  console.log(a*3);
//  console.log(a*4);
//  console.log(a*5);
//  console.log(a*6);
//  console.log(a*7);
//  console.log(a*8);
//  console.log(a*9);
//  console.log(a*10);



// let a=1387;
// if(a%10==9){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }




// let a = 1701;    
// console.log(Math.ceil(a/100));



// function test(a,b,c){
//     let a1 = a*3600;
//     let b1 = b*60;
//     if(a1>=b1 && a1>c){
//         return a;
//     }
//     else if(b1>=a1 && b1>c){
//         return b;
//     }
//         else{
//             return c;
//         }
// }console.log(test(1, 59, 3598));
// console.log(test(2, 300, 15000));
// console.log(test(15, 955, 59400) );


// function test(a){
//    let a1= Math.floor(a%10);
//    let b= Math.floor(a/10%10);
//    let c = Math.floor(a/100);
//    if(a1==b || a1==c || b==c) {
//     return "TRUE";
// }
// // else{
// //     return "FALSE";
// // }
// // }
// // console.log(test(212));

// function test1(a){
//    let a1= Math.floor(a%10);
//    let b= Math.floor(a/10);
//    if(a1+""+b>a) {
//     return "false";
// }
// else{
//     return "true";
// }
// }
// console.log(test1(53)); 


// function test(a){
//     return (a%10)<Math.floor(a/10);
// }        
// // console.log(test(53));
   

// function test(a){
//     let cnt = 0;
//     for(let i=1; i<=a; i++) {
//     cnt+=i;
// }
// return cnt;
// }
// console.log(test(4));


// function test(a,b,c){
//     if(a!=b && b==c){
//         return 1;
//     } 
//     else  if(c==a && b!=c && a!=b){
//         return 2;
//     }
//     else {
//         return 3;
//     }
// }console.log(test(5,5,10));
// console.log(test(897,1,1));
// console.log(test(811,100,811));



// function test(a,b){
//     let sum = 0;
//     for(let i=a; i<=b; i++) {
//       if(i%2==0){
//         sum+=i;
//       }
//     }
//     return sum;
//     }console.log(test(-5,-3));
//     console.log(test(-1,-1));
//     console.log(test(-14,-18));


// function name(a,b) {
//     let sum = 0;
//     for(let i = 1; i<=a;i++){
//         sum+= Math.pow(i,b)
//     }return sum;
// }console.log(name(5,3));
// console.log(name(1,1));
// console.log(name(4,3));

// Test8
// function test(a){
//     let minn= -99999
//     for(let i=a;i>0;i=Math.floor(i/10)){
//         if(i%10>minn)
//             minn = i%10
//     }
//     return minn
// }
// console.log(test(7132))


// test9
// function isSymmetric(number) {
//     let str = number.toString();
//     let len = str.length; 
//     for (let i=0; i<Math.floor(len/2);i++) {
//         if (str[i] !== str[len-1-i]) {
//             return false; 
//         }
//     }
    
//     return true; 
// }
// console.log(isSymmetric(7227))



     // TASK10

        // function man(num){
        //     if(num <= 9){
        //         return num;
        //     }
        //     let num1 = 0;
        //     for (let i=num; i > 0; i = Math.floor(i/10)){
        //         num1 += i % 10;
        //     } 
        //     let num2 = 0;
        //     if(num2 < 9){
        //     for (let i=num; i > 0; i = Math.floor(i/10)){
        //         num2 += i % 10;
        //     }
        // } else {
        //     return num1;
        // } 
        // return num2;
        // } console.log(man(38));

// test11
// function test(number){
//     for(let i=0;i<Math.abs(number)+1;i++){
//         if(i===Math.abs(number)){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(test(6))


// test12
// function test(a){
//     if(a<0){
//         return -1;
//     }
//     else if (a===0 || a===1){
//       return 1;
//     }
//     else{
//         let sum=1;
//         for(let i=2;i<=a;i++){
//             sum*=i;
//         }
//             return sum;
//     }
// }
//      console.log(test(5))

    // TASK13

    // function NUMser(polo) {
    //     let sum=0;
    //     for (let i=1; i<=polo;i++) {
    //         sum+=i;
    //     }
    //     return sum;
    // }
    // console.log(NUMser(5));  
    // console.log(NUMser(12)); 7


    // TASK14

            // function apa(a){
            //     let ans = 0;
            //     let cnt = 0;
            //     for ( let i = a; i > 0; i = Math.floor(i/10)){
            //         ans += i % 10;
            //         cnt++;
            //     }
            //     return ans / cnt;   
            // } 
            // // console.log(apa(2456));

            // //    TASK15

            // function MINMAX(a) {
            //     let min = 999999;
            //     let max = -999999;
            //     for (let i = a; i > 0; i = Math.floor(i/10)){
            //         if(i % 10 < min) {
            //             min = i % 10;
            //             }
            //             if(i % 10 > max) {
            //                 max = i % 10;
            //                 }
            //             }
            //             let ans = "🐱‍👤min:" + min + " " + "🐱‍👤max:" + max;
            //                  return ans;
            // } console.log(MINMAX(5372));




            

//                  Task1
//  function calculateCircleArea(radius) 
//  {
//  const area = Math.PI * Math.pow(radius, 2);
// console.log(`The area of a circle with radius ${radius} is ${Math.round(area)}`);
//  }   console.log(calculateCircleArea(5));
//  console.log(calculateCircleArea(8));
//  console.log(calculateCircleArea(3));


// task2 

// function ariphmetic(a) {
//     let ans=0
//     for (let i=a; i>0; i=Math.floor(i / 10)) {
//         ans += i % 10;

//     }
//     return ans;
// }
// console.log(ariphmetic(123));
// console.log(ariphmetic(345));
// console.log(ariphmetic(321));

// task3 

// function posNeg(a) {
//    return (a>0 ? a+1 : a-2)
// }
// console.log(posNeg(22));
// console.log(posNeg(4));
// console.log(posNeg(3));

// task4

// function hundred(a,b) {
//     return(a+b<100 ? "true" : "false")
// }
// console.log(hundred(22,15));
// console.log(hundred(83,34));
// console.log(hundred(3,77));

// task5

// function time(h,m,s) {
//    let hour = h * 3600;
//    let minute = m * 60;
//    if (hour>minute && hour>s) {
//     return h
//    }
//     if (minute > hour && minute>s) {
//         return m
//     }
//     else {
//         return s
//     }
// }
// console.log(time(1, 59, 3598));
// console.log(time(2, 300, 15000));
// console.log(time(15, 955, 59400));

// task6 

// function perimeter(a) {
//     let p = a * 4
//     return p
// }
// console.log(perimeter(7));
// console.log(perimeter(8));
// console.log(perimeter(25));

// task7

// function square(a) {
//     let s = a * a
//     return s
// }
// console.log(square(8));
// console.log(square(11));
// console.log(square(6));

// task8 

// function avarage(a,b) {
//     let av = (a+b)/2
//     return av
// }
// console.log(avarage(7,9));
// console.log(avarage(8,12));
// console.log(avarage(10,30));

// task9

// function evenOrOdd(a) {
//     if (a%2==0) {
//         return 3
//     }
//     else {
//         return 4
//     }
// }
// console.log(evenOrOdd(7));
// console.log(evenOrOdd(12));
// console.log(evenOrOdd(-8));

// task10

// function equation(a) {
//     return 17*a*a-6*a+13
// }
// console.log(equation(2));
// console.log(equation(0));
// console.log(equation(10));





//   function test(a){
//     return a==1 ? 0 : a==0 ? 1 : 1;
//   } console.log(test(1));
//   console.log(test(0));


// function test(a,b){

//     return x = -b/a
// } console.log(test(4,5));
// console.log(test(3,6));


// function test(a){
//     let a1 = Math.floor(a/10);
//     let a2 = Math.floor(a%10);
//     return a2 + "" + a1> a ? false: true;
// }console.log(test(27));
// console.log(test(43));









// lesson 4
      // task1
    // function test(a) {
    //     for(let i=2;i<a;i++){
    //         if(a%i==0) return false
    //     }
    //     let cnt=0;
    //     for(let i=a;i>0;i=Math.floor(i/10)) cnt++;
    //     let ans=0;
    //     for(let i=a;i>0;i=Math.floor(i/10)){
    //         ans+=(i%10)*Math.pow(10,cnt);cnt--;
    //     }
    //     ans/=10
    //     return ans==a;
    // }
    // console.log(test(131));
    // task3
    // function test(a){
    //  let cnt=1;
    //  for(let i=0;i<=a;i++){
    //     cnt*=2;
    //     if(a == cnt){
    //         return true;
    //     }
    //  }
    //  return false;
    // }
    // console.log(test(16 ));

    // task4
    //     function sumOfPrime(a, b) {
    //         let  sum = a + b;
    //   for(let i=2;i<sum;i++){
    //     if(sum%i==0)return false;
    //   }
    //   return true;
    //     }
    //   console.log(sumOfPrime(5,7));

    // task5
        // function test(n) {
        //     let a = 0;
        //     let b = 1; 
        //     let c=0;
        //     for (let i = 2; i<=n; i++) {
        //     c=a+b;
        //     a=b 
        //     b=c; 
        //     }
        //     return c;
        // }
        // console.log(test(5));

        // task6    
        // function test(a,b){
        //     return a**b;
        // }
        // console.log(test(10,10));
    
        // task 7
    // function test(a){
    //    if(a/10>a%10)return true;
    //    else{
    //     return false
    //    }  
    // }
    // console.log(test(27));

    // task9
//   function test(a){
//     let sum=0;
//     for(let i=1;i<=a;i++){
//         sum+=(a-i+1)*(a-i+1)
//     }
//     return sum
//   }
//   console.log(test(4));


  
       
         
//  task1
         // function food(a,b,c,d) {
    //     let one=c*100+d;
    //     let two=a*100+b;
    //     let all=Math.floor(one/two);
    //     return all;
    // }
    // console.log(food(1,70,3,80));
    // console.log(food(2,10,6,90));
    // console.log(food(1,30,5,20));

      //  TASK2

        // function MAintipe(a,b,c) {
        //     if ((a<b  &&    b<c) || (a>b     &&    b>c)) {
        //         a*=a;
        //         b*=b;
        //         c*=c;
        //     } else {
        //         a=-a;
        //         b=-b;
        //         c=-c;
        //     }
        //     console.log(a,b,c);
        // }
        // MAintipe(3,-2,8);  
        // MAintipe(3,6,9);    
        // MAintipe(-1,2,3); 
        

    // TASK3

        // function maaaatemaTikc(a) {
        //     let one=a+2-(a%2);
        //     let two=a-2+(a%2);
        //     console.log("next:" + one + " prev:" + two);
        // }
        // maaaatemaTikc(3); 
        // maaaatemaTikc(4); 
        // maaaatemaTikc(5);

    // TASK4

        // function lllool(a) {
        //     if (a>0) {
        //         return a-2;
        //     } else if (a<0) {
        //         return a+1;
        //     } else {
        //         return 10;   
        //     }
        // }
        // console.log(lllool(3));  
        // console.log(lllool(0));console.log(lllool(10)); 
        
     // TASK6    

        // function sag(pwak) {
        //     if (pwak<=1) {
        //         return false; }
        //     let sum=0;
        //     for (let i=1; i<=pwak/2; i++) {
        //         if (pwak%i == 0) {
        //             sum+=i;
        //         }
        //     }
        //     return sum==pwak;
        // }
        // console.log(sag(28));       
        // console.log(sag(32));  
        // console.log(sag(496));
        

//     // TASK7

//     function sumOfNumber(num1){
// for (let i=num1;i>0;i=Math.floor(i/10)){
//     let oxiron=i%10;
//     let num2=(i-oxiron)/10;
//     for(let j=num2;j>0;j=Math.floor(j/10)){
// if (oxiron == j%10){
//     return false
// }
// }
// }
// return true
// }console.log(sumOfNumber(1234));

//     // TASK8

// function test (a,b){
//         let sum=0;
//      for (let i=a;i<=b;i++){
//          if (sumOfNumber(i)){
//              sum+=i;
//         }
//      }
//      return sum;
//      }
//      console.log(sumOfNumber(10,50));
         
        
        // function sumOfNumber(num1){
        //         if (num1<=3 && num1>1){
        //          return true
        //         }
        //         for (let i=2;i<num1;i++){
        //          if (num1 % i==0){
        //              return false
        //          }
        //         }
        //         return true;
        //      }
        //      console.log(sumOfNumber(14))
             


                // function test(a,b){
                //         let x=1;
                //         for (let i=1;i<Math.min(a,b);i++){
                //                 if(a%i==0 && b%i==0) x=i;
                //         }
                //         return a*b/x     
                // }console.log(test(4,6));
                // console.log(test(3,8));
                // console.log(test(2,6)); 



                // function test(a){
                //         let cnt = 1;
                //         while(a>1){
                //                 if(a%2==1) a=a*3+1
                //                 else a=a/2;
                //                 cnt++;
                //         }
                //         return cnt
                // }
                // console.log(test(23)); console.log(test(13));
                // console.log(test(5));


                // function test(a){
                //         let fact=1;
                //         for(let i=1; i<=a;i++) fact *i;
                //         let reversedFact=0, cnt = 0;
                //         for(let i=fact; i>0;i=Math.floor(i/10)) cnt++;
                //         for(let i =fact; i>0;i=Math.floor(i/10)) {
                //                 reversedFact =(i%10) *Math.pow(10,cnt);
                //                 cnt--;
                //         }
                //         reversedFact /=10;
                //         return reversedFact ;
                // } 
                // console.log(test(5));


                //   function test(a){
                //         let cnt = "",i=0
                //         while(i<a)  
                //                 { 
                //                         i++;
                //                         cnt+=i+"," 
                //         }
                //         return  cnt  
                //   }console.log(test(5));


//   function test(a){
//     return a==1 ? 0 : a==0 ? 1 : 1;
//   } console.log(test(1));
//   console.log(test(0));


// function test(a,b){

//     return x = -b/a
// } console.log(test(4,5));
// console.log(test(3,6));


// function test(a){
//     let a1 = Math.floor(a/10);
//     let a2 = Math.floor(a%10);
//     return a2 + "" + a1> a ? false: true;
// }console.log(test(27));
// console.log(test(43));









// lesson 4
      // task1
    // function test(a) {
    //     for(let i=2;i<a;i++){
    //         if(a%i==0) return false
    //     }
    //     let cnt=0;
    //     for(let i=a;i>0;i=Math.floor(i/10)) cnt++;
    //     let ans=0;
    //     for(let i=a;i>0;i=Math.floor(i/10)){
    //         ans+=(i%10)*Math.pow(10,cnt);cnt--;
    //     }
    //     ans/=10
    //     return ans==a;
    // }
    // console.log(test(131));
    // task3
    // function test(a){
    //  let cnt=1;
    //  for(let i=0;i<=a;i++){
    //     cnt*=2;
    //     if(a == cnt){
    //         return true;
    //     }
    //  }
    //  return false;
    // }
    // console.log(test(16 ));

    // task4
    //     function sumOfPrime(a, b) {
    //         let  sum = a + b;
    //   for(let i=2;i<sum;i++){
    //     if(sum%i==0)return false;
    //   }
    //   return true;
    //     }
    //   console.log(sumOfPrime(5,7));



        //         function test(a){
        //            if(a==1){
        //                 return "Monday Tuesday Wednesday  Friday Saturday Sunday"
        //            }
        //            if(a==2){
        //                 return "Tuesday Wednesday  Friday Saturday Sunday"
        //            }
        //            if(a==3){
        //                 return "Wednesday Thursday Friday Saturday Sunday"
        //            }
        //            if(a==4){
        //                 return "Thursday Friday Saturday Sunday"
        //            }
        //            if(a==5){
        //            return "Friday Saturday Sunday"   
        //         }
        //         if(a==6){
        //                 return "Saturday Sunday"
        //         }
        //         if(a==7){
        //                 return "Sunday"
        //         }
        // }
        // console.log(test(5));


        
        // let f = (a) => {
        //   let i = 2;
        //   while (i < a) {
        //     if (a % i == 0) return false;
        //     i++;
        //   }
        //   let ans = 0,x = a;
        //   while (a > 0) {
        //     ans = ans * 10 + a % 10;
        //     a = Math.floor(a/10);
        //   }
        //   return ans == x;
        // }
        // console.log(f(101));
       


       // home work7
// task3
    // function funcNN(number, digit) {
    //     let strNumber = number.toString();
    //     let cnt = 0;
    //     for (let i = 0; i < strNumber.length; i++) {
    //         if (parseInt(strNumber[i]) === digit) {
    //             cnt++;
    //         }
    //     }
    //     return cnt;
    // }
    // console.log(funcNN(323,3));

    // task5
    // function Ruler(a, b) {
    //     if (!Number.isInteger(a)  !Number.isInteger(b)  a > b) {
    //         return null;
    //     }
    //     let result = '';
    //     for (let i = a; i <= b; i++) {
    //         if (i > a) {
    //             result += ', ';
    //         }
    //         result += i + 'cm'; 
    //     }
        
    //     return result;
    // }
    // console.log(Ruler(10,20));
 
    // task6
    // function test(a){
    //     if((a%4==0 && a%100!==0)||a%400==0){
    //         return 29;
    //     }
    //     else{ return 28;
    // }
    // }
    // console.log(test(2024));

    // task1
    // let f=( a,b,c) =>{
    //     return  a+(b*(c+1))
    // }
    // console.log(f(1,0.1,9));
    
    // task2
    // let f=()=>{
    //     let random=Math.floor(Math.random()*100);
    //     let x=''
    //     for(let i=random;i>0;i=Math.floor(i/10))x*=i%10;
    //     return rand==x;
    // }
    // console.log();

    // task4
    // let f = (a,b,c,d,e) => {
    //     if(d>e) e=d;
    //     let ans="";
    //     if(Math.abs(a-d)<Math.abs(b-d) && Math.abs(a-d)<Math.abs(c-d)) ans+=a;
    //     else if(Math.abs(b-d)<Math.abs(a-d) && Math.abs(b-d)<Math.abs(c-d)) ans+=b;
    //     else ans+=c;
    //     ans+=" ";
    //     if(Math.abs(a-e)<Math.abs(b-e) && Math.abs(a-e)<Math.abs(c-e)) ans+=a;
    //     else if(Math.abs(b-e)<Math.abs(a-e) && Math.abs(b-e)<Math.abs(c-e)) ans+=b;
    //     else ans+=c;
    //     return ans;
    // }
    // console.log(f(10, 20, 30, 1, 30));
    // console.log(f(10, 20, 30, 30, 20));
    // console.log(f(10, 20, 30, 20, 20));

    // task7
//    function test(a,b,c,d){
//     return a/d;
//    }
//    console.log(test(1000, ‘tjs’, ‘usd’, 10));

    // task8
    // let f = (a,b,)=>{
    //     return a*(b/100)
    // }
    // dacument.get("Value").innerHtml = f(999,15)
//  task9
// let f=(a,b) =>{
//     let ans='';
//     while(a>0){
//         if(a%10==b) ans+=a%10;
//         a/=10;
//     }
//     return ans;
// }
// dacument. getElemeentByld("Value").innerHtml = f(454545,4)

// let f = (a) => {
//   let ans="";
//   while(a.length>0){
//       let mn='a',x=0;
//       for(let i=0;i<a.length;i++){
//           if(mn>a[i]) {mn=a[i]; x=i;}
//       }
//       ans+=mn;
//       let s=a.replace(mn,'');
//       a=s;
//   }
//   return ans;
// }
// console.log(f("321"));
// console.log(f("131231"));


//  function factorial(a) {
//                 let factor = 1;
//                 for (let i = 1;i<=a;i++){
//                     factor *= i;
//                 }
//                 return factor;
//             }
//             console.log(factorial(8));




//  function test(a){
//   let cnt = 0;
//   for(i=1; i<=a;i++){
//     cnt += i;
//   }
//   return cnt;
//  }console.log(test(10));



// function test(a,b){
// return Math.pow(a,b)
// }
// console.log(test(2,3));

// function test() {
//     let cnt=0
//     return () => {
//         cnt++
//         return cnt
//     }
// }
// let a = test(1)
// console.log(a());          
// console.log(a());
// console.log(a());
// console.log(a());  

    
// function test(a){
//            let cnt =0;
//            for(i=a; i>0;i= Math.floor(i/10)){
//                cnt +=(i%10); 
//         }
//         return cnt;
//         }console.log(test(111));
//         console.log(test(222));




// function test(a){
//            let cnt =0;
//            for(i=1; i<=10;i++){
//                cnt +=a*i; 
//         }
//         return cnt;
//         }console.log(test(1));
//         console.log(test(6));





// function test(a,b){
//  let cnt =0;
//  for(i =1; i<=b; ++i){
//     if(a%i==0  && b%i==0) cnt = i
//  }
//  return cnt;    
// }console.log(test(32,8));
// console.log(test(8,12));

// function test(a){
//     if(a%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }console.log(test(124));
// console.log(test(-22));
// console.log(test(3));

// function test(a){
//     let  a1 = "ly";
//     return a+a1;
// }console.log(test("hopelles"));
// console.log(test("total"));
 
//  function test(a){
//     let factor =1;
//     for(let i=1; i<=a; i++){
//         factor *= i;
//     }
//     return factor;
// }console.log(test(0));
//     console.log(test(2));
//     console.log(test(9));


// function test(a,b){
//     return Math.pow(a,b)
// }console.log(test(2,2));
// console.log(test(2,3));
// console.log(test(2,4));






// function test(a) {
//     let max=-999999
//     for(let i=a; i>0; i=Math.floor(i/10)) {
//         if (i%10>max) {
//             return i%10
//         }
//     }
// }
// console.log(test(105)); 

// function test(a) {
//     let sum=0
//     for (let i=1; i <=a; i++){
//         if (i%2!=0) {
//             sum += i;
//         }
//     }
//     return sum
// }
//  console.log(test(5));

//    function arm(a)
//    {
//     let sum =0; ans=0;
//     for (let i=a; i>0; i= Math.floor(i/10))
// //         {
// //             cnt++
// //         }
// //     for (let i=a; i>0 ;i= Math.floor(i/10)){
// //         sum+=Math.pow(i%10,cnt);
// //     }
// //     return a==ans;
// //    }console.log(arm(153));

// // function as(a,b){
// //     let aba = 0;
// //     while (num2!=0)
// //         {  
// //             aba=b;
// //             b=a%b;
// //             a=aba;
// //         }
// //          return a;
// // }console.log(as(8,12));



// // function task (ppp,number){
// //     let cnt = 0;
// //     return () => {
// //         ++cnt;
// //         if (number<cnt){
// //             return ppp();
// //         }
// //             return cnt;
// //     }
// // }
// //   let limit = task(() => "notugriii gaii mant kard",3);
// // console.log(limit());
// // console.log(limit());
// // console.log(limit());
// // console.log(limit());


// //  function factorial(a) {
// //                 let factor = 1;   
// //                 for (let i = 1; i<=a;i++){
// //                     factor *= i;
// //                 }
// //                 return factor;
// //             }
// //             console.log(factorial(5));
    

// function test(a) {
//     let cnt = 0;
//     for (let i = a; i > 0; i = Math.floor(i / 10)) cnt++
//     for (let j = a; j > 0; j = Math.floor(i / 10))
//         return cnt;
// }
// console.log();


// function test(a,b) {
//     if (a % b == 0)
//         return true;
//     else {
//     return false;}
// }
// console.log(test(10,5));

// function test(a) {
//     return function (b) {
//         return b % a == 0;
//     }
// }
// let ans = test(3);
// console.log(ans(9));
// console.log(ans(10));

// function sumOddTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i += 2) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumOddTo(5));
// console.log(sumOddTo(8));

// function f(a) {
//     let max = 0;
//     let f1=(a)=>{
//         if(max<a)
//         {
//             max=a;
//         }
//         console.log(max);
//     }
//     return f1;
// }
// let x = f ();
// x(2);
// x(6);
// x(3);

// function name(n) {
//     let ans = 0;
//     for(let i = n; i > 0; i= Math.floor(i/10))
//     {
//         ans+=i%10;
//     }
//     return ans;
// }
// console.log(name(1101));

// function name() {
//     let sum = 0;
//     return function(n) {
//         sum+=n;
//         return sum;
//     }
// }
// let ans = name();
// console.log(ans(3));
// console.log(ans(5));

// function name() {
//     let sum = 0,cnt = 0;
//     return function(n) {
//         sum+=n; cnt ++;
//         return sum/=cnt;
//     }
// }
// let ans = name ();
// console.log(ans(10));
// console.log(ans(15));

// function name(a){
//     let fn1 = 1;
//     let fn2 = 1;
//     let fn = 0;
//     for (let i = 3; i <= a; i++)
//     {
//         fn = fn1 + fn2;
//         fn1 = fn2;
//         fn2 = fn;
//     }
//     return fn;
// }
// console.log(name(6));

// function name(n) {
//     let cnt = 0, ans = 0;
//     for (let i=n; i>0;i=Math.floor(i/10))
//     {
//         cnt++;
//     }
//     for (let i=n; i>0;i=Math.floor(i/10)) {
//         ans+=Math.pow(i%10,cnt);
//     }
//     return ans==n;
// }
// console.log(name(153));
// console.log(name(123));
// console.log(name(370));

// function name(n,k) {
//     if(n%k==0)
//     {
//         return "true";
//     }
//     else
//     {
//         return "false";
//     }
// }
// console.log(name(10,5));

// function name(n) {
//     return function(k)
//     {
//         return n%k==0;
//     }
// }
// let ans=name(3);
// console.log(ans(9));





// function test(str){
//     let a = str.at(-1)
//     let b = a.repeat(2)
//     return str+b
// }
// console.log(test("Hello"));

// function test(a) {
//     let aa = a.charAt(0)
//     let bb = a.at(-1)
//     return aa+bb);
// }console.log(test("ganesh"));


// function test(a) {
//     return a.includes("s")
// } console.log(test("changes"));
// console.log(test("chane"));
// console.log(test("test("));


// function test(a) {
//     let a1 = a.split(",");
//     let cnt = 1;
//     for (let i = 0; i < a1.length; i++) {
//         {
//             cnt *= a1[i];
//         }
//     }
//     return cnt;
// }
// console.log(test("2, 3"));

// function test(a) {
//     let q = a.split("-");
//     let cnt = 0;
//     for (let i = 0; i < q.length; i++) {
//         cnt  ++;
//     }
//     return cnt;
// }console.log(test("but-fel"));

// function test(a,b) {
//     let a1 = a.includes(b);
//     return a1;
// } console.log(test("abc", "bc"));
// console.log(test("abc", "d"));

// function test(a) {
//     let b = a.includes(" ");
//     return b;
// } console.log(test("hello"));
// console.log(test("hello, world"));


// function test(a) {
//     let a1 = "Hello " + a
//     return a1
// }console.log(test("ABDURASHID"));

// function test(a) {
//     let c = a.split("");
//     if (a.length  % 2 == 0) {
//     return c[a.length/2 - 1] + c[a.length/2]
//     }
//     else {
//         return c[Math.floor(a.length / 2)]

//     }
// } console.log(test("ABDURASHID"));

// function test(a, b) {
//     let b2 = a.includes("o");
//     return b2;
// }console.log(test("Loop"));

// function test(a) {
//     for (let i = 0; i < a.legth; ++i){
//         if (a.at[i] == a.at[i + 1]) {
//             return true;
//         }
//     }
//     return false;
// }console.log(test("Lopooooo"));


// function test(a) {
//     let a1 = a.split(" ")
//     for (let i = 0; i < a1.length; ++i) {
//         if (a1[i] == "Nemo") {
//           return "I found Nemo at " +  `${i+1}` + "!";
//         }
//     }
//     return " can't find Nemo"
// } console.log(test("I am finding Nemo !"));
// console.log(test("Nemo is me"));
// console.log("I'm Muhammad");


// function test(a) {
//     let b = a.split(" ");
//     for (let i = 0; i < b.length; ++i){
//         if (b[i].length >= 5) {
//             b[i] = b[i].split("").reverse().join("");
//         }
//     }
//     return b.join(" ");
// }console.log(test("Reverse"));



// function test(a,c) {
//     let b = 2;
//     return a *b **c
// }console.log(test(5,2));

// function test(a) {
//     if (typeof a === "string") {
//         return Number(a) + " is number "

//     }
//     else if (typeof a === "number") {
//         return String(a) + " is string "
//     }
// } console.log(test(12));

// function a() {
//     let a = "ba" + +"hello " + "a"
//     return a.toLocaleLowerCase()
// }console.log(a());


// function system (a,b){
//     return a*(2**b)
// }
// console.log(system(10,3));
//task 2
// function system (a){
// let s=""
// // if(typeof(a)=="string") return [Number(a),"is number"]
// return function (b){
//     // if(typeof(b)=="number") return [b.toString,"is string"]
//     if(typeof(a)=="number") return s+=a
// if(typeof(b)=="string") return [Number(b),"is number"]

//     }
// }
// let ans=system(32)
// console.log(ans(""));
// task2
// function system (a){
//     return function(b){
//         return a+=b
//     }
// }

// console.log(system(2)(5));
//task 4
// function system (a,b){
//     return a/(2**b)
// }
// console.log(system(80,3));
//task 5
// function system (a){
//     let s=a
//     return function(){
//         if(a%2==0)return s++
//     if(a%2!=0)return s--

//     }
// }
// let ans=system(6)
// console.log(ans());
// console.log(ans());
// console.log(ans());
// function system (a){
//     let p0=3
//     let p1=0
//     let p2=2
//     let pn=0
//     for(let i=3;i<=a;i++){
// pn=p1+p0
// p0=p1
// p1=p2
// p2=pn
//     }
//     return pn
// }
// console.log(system(8));
// task 7
// function system(a){
//     return function(b=null){
//         if(b==null)return a
//         return b
//     }
// }
// let ans=system(19)
// console.log(ans());
// console.log(ans());
// task 8
// function system (a,b){
//     return a.repeat(b)
// }
// console.log(system("ab"));
// task 9
// function system (a,b){
//     return function(a1,b1){
//         return function(a2,b2){
//             return (a*a1*a2)+(b*b1*b2)
//         }
//     }
// }
// console.log(system(1,2)(1,1)(2,3));
// task 10
// function system (a,b){
//     return a.repeat(b)
// }
// console.log(system("ab"));
///////////////////////////////////gome task
//task 1
// function system (a){
//     return a.at(0).toUpperCase()+a.slice(1)
// }
// console.log(system("world"));
// task 2
// function system (a,b){
//     let s=0
//     for(let i=a.length-1;i>=0;i--){
//         if(a[i]==b)s++
//     }
//     return s
// }
// console.log(system("hello","l"));
// task 3
// function system (a,b){
//         let s=""
//         for(let i=a.length-1;i>=0;i--){
//           s+=a[i]
//         }
//         return s
//     }
//     console.log(system("hello"));
// task 4
// function system (a,b){
//     return a.repeat(b)
// }
// console.log(system("hello",3));
// task 5
// function system (a){
//     s=''
//     let k="qQwWrRtTpPsSdDfFgGhHjJkKlLzZxXcCvVbBnNmM"  
//     for(let i=0;i<a.length;i++){
// for(let r=0;r<k.length;r++){
//     if(a[i]==k[r])s+=a[i]       
// }
//     }
//     return s
// }
// console.log(system("helloo"));
//task 6
// function system (a){
//     s=0
//     let m="aAeEyYuUiIoO"  
//     for(let i=0;i<a.length;i++){
// for(let r=0;r<m.length;r++){
//     if(a[i]==m[r])s++       
// }
//     }
//     return s
// }
// console.log(system("hello"));
// task 14
// function system (a){
//     min=9999999
//     s=''
//     let y=a.split(" ")
//     for(let i=0;i<=y.length-1;i++){
//         if(y[i].length<min)s=y[i];min=y[i].length
//     }
//     return s
// }
// console.log(system("hello wldo"));
// let a=2311313
// console.log(a.sort);
// task 7
// function system (a){
   
//    let s=''
// for(let i=0;i<a.length;i++){
//     if(i==0)s+=a[i].toUpperCase();i
//     if(a[i]==" "){s+=" "+a[i+1].toUpperCase();
//     i+=2
// }
//         s+=a[i]

// }
// return s
// }
// console.log(system('hello world'));
//task 8
// function system (a){
//     s=''
//     for(let i=a.length-1;i>=0;i--){
//         s+=a[i]
//     }
//     return s==a
// }
// console.log(system("sda"));
// task 9
// function system (a){
//     let r=a.split(" ")
//     let s=''
//     for(let i=r.length-1;i>=0;i--)s+=" "+r[i]
// return s
// }
// console.log(system("madad ssasss "));
//task 10
// function system (a,b){
//   let  s=''
//   let y=''
//     for(let i=0;i<=a.length-1;i++){
//         if(a[i]==b){y+=a[i]}
//      else{s+=a[i]}   
//     }
//     return s
// }
// console.log(system("hello world", "l"));
//task 11

// function system(a){
//   let s=''
//   for(let i=0;i<=a.length-1;i++){
//     if(a[i]==a[i+1])i+=1;
//     s+=a[i]
//   }
//   return s
// }
// console.log(system(""));
// task 12
// function system(a){
//     let s=a.at(0)
//     let d=a.at(-1)
//     // return a.replace(a.at(0),d).replace(a.at(-1),s)
//     let r=a.slice(1,-1)
//     return d+r+s
// }
// console.log(system("hello"));
// task 13
// function system (a){
//     min=9999999
//     s=''
//     let y=a.split(" ")
//     for(let i=0;i<=y.length-1;i++){
//         if(y[i].length<min)s=y[i];min=y[i].length
//     }
//     return s
// }
// console.log(system("hello wldo"));


// function test(a){
//     let cnt=0;
//     for(let i=0;i<a.length;i++){
//         if(a[i]>'0' && a[i]<='9')cnt++;

//     }
//     return cnt=a.length
// }
// console.log(test("1234"));

// task3
// function test(a,b){
//     let ans=' ';
//     for(let i=0;i<b;i++) ans+=a[i]
//     return ans;
// }
// console.log(test("1234",3));

// task4
// function test(a){
//     let ans=' ';
//     for(let i=0;i<a.length;i++){
//         if(a[i].toUpperCase()==a[i])ans+='-'+a[i].toLowerCase();
//         else ans+=a[i]
//     }
//     return ans
// }
// console.log(test("Converttosnakecase"));

// task5
// function test(a){
//     let x=a.split(" "),ans=" ";
//     for(let i=0;i<x.length;i++){
//         let z=x[i][0].toUpperCase();
//     let h=x[i][x[i].length-1].toUpperCase();
//     ans+=z+x[i].slice(1,x[i].length-1)+h=" ";
//     }
//     return ans;
// }
// console.log(test("hello world"));

// task6
// function test(a){
//     let a1=a.replaceAll('https://','');
//     let a2=a1.replaceAll('http://','');
//     let a3=a2.replaceAll('www.','');
//     let a4=a3.replaceAll('sub.','');
//     let a5=a4.replaceAll('/path','');
//     return a5;
// }
// console.log(test("https://domain.com"));

// task7
// function test(a){
//     let ans='';
//     for(let i=0;i<a.length;i++){
//         if((a[i]>='a' && a[i]<='z')  (a[i]>='A' && a[i]<='Z')  (a[i]>='0' && a[i]<='9')) ans+=a[i]
//     }
// return ans
// }
// console.log(test("hello@world!"));

// task8
// function test(a){
//     for(let i=0;i<a.length/2;i++) if(a[i]!=a[a.length-i-1]) return false
//     return true
// }
// console.log("madam");

// task9
// function test(a){
//     return a.split(" ").reverse().join(" ");
// }
// console.log(test("hello world"));

// task10

// function test(a){
//     return a[a.length-1]+a.slice(1,a.length-1)+a[0]
// }
// console.log(test("hello world"));


// function test(a,b) {
//     if (a > b) return undefined;
//     let ans = '';
//     for (let i = a; i < b; i++) ans += i + ", "
//     ans += b;
//     return ans;
// }
// console.log(test(3,1));


// let f=(a,b,c) => {
//     return (a+b+c)+(a-b-c) +(a*b*c) +(a/b/c)+ (a*b*c)
// }
// console.log(f(1,2,3));



// function f() {
//     let cnt = 0;
//     let test = (a, b) => {
//         cnt++;
//         if (cnt % 5 == 0) return a % b;
//         else if (cnt % 5 == 1) return a + b
//         else if (cnt % 5 == 2) return a - b;
//         else if (cnt % 5 == 3) return a * b;
//         else return a / b;
//     }
//     return test
// } let x = f();
// console.log(f(1,2));

// home Worke 
// function test(a){
//     let cnt=0;
//     for(let i=0;i<a.length;i++){
//         if(a[i]>'0' && a[i]<='9')cnt++;

//     }
//     return cnt=a.length
// }
// console.log(test("1234"));
// task3
// function test(a,b){
//     let ans=' ';
//     for(let i=0;i<b;i++) ans+=a[i]
//     return ans;
// }
// console.log(test("1234",3));

// task4
// function test(a){
//     let ans=' ';
//     for(let i=0;i<a.length;i++){
//         if(a[i].toUpperCase()==a[i])ans+='-'+a[i].toLowerCase();
//         else ans+=a[i]
//     }
//     return ans
// }
// console.log(test("Converttosnakecase"));

// task5
// function test(a){
//     let x=a.split(" "),ans=" ";
//     for(let i=0;i<x.length;i++){
//         let z=x[i][0].toUpperCase();
//     let h=x[i][x[i].length-1].toUpperCase();
//     ans+=z+x[i].slice(1,x[i].length-1)+h=" ";
//     }
//     return ans;
// }
// console.log(test("hello world"));

// task6
// function test(a){
//     let a1=a.replaceAll('https://','');
//     let a2=a1.replaceAll('http://','');
//     let a3=a2.replaceAll('www.','');
//     let a4=a3.replaceAll('sub.','');
//     let a5=a4.replaceAll('/path','');
//     return a5;
// }
// console.log(test("https://domain.com"));

// task7
// function test(a){
//     let ans='';
//     for(let i=0;i<a.length;i++){
//         if((a[i]>='a' && a[i]<='z')  (a[i]>='A' && a[i]<='Z')  (a[i]>='0' && a[i]<='9')) ans+=a[i]
//     }
// return ans
// }
// console.log(test("hello@world!"));

// task8
// function test(a){
//     for(let i=0;i<a.length/2;i++) if(a[i]!=a[a.length-i-1]) return false
//     return true
// }
// console.log("madam");

// task9
// function test(a){
//     return a.split(" ").reverse().join(" ");
// }
// console.log(test("hello world"));

// task10

// function test(a){
//     return a[a.length-1]+a.slice(1,a.length-1)+a[0]
// }
// console.log(test("hello world"));

// home work2
// function test(a){
//     let mn=1e19;
//     for(let i=a;i>0;i=Math.floor(i/10)) mn=Math.floor(mn,i%10);
//     return mn
// }
// console.log(test(123456789));

// // task3
// function test(a,b){
//     let ans=' ';
//     for(let i=a;i<b;i++) ans+=i+",";
//     ans+=b
//     return ans
// }
// console.log(test(3,12));

// task5
// let f=(a,b,c)=>{
//     return (a+b+c)+(a-b-c)+(a*b*c)+(a/b/c)+(a%b%c)

// }

// function test(a){
//     let x= a.toString()
//     return x[Math.floor(x.length/2)]
// }
// console.log(test(123));

// function test () {
//   let cnt=0;
//   let test1=(a,b)=>{
//     cnt++
//     if(cnt%5==0) return a%b;
//     else if(cnt%5==1) return a+b;
//     else if(cnt%5==2) return a-b;
//     else if(cnt%5==3) return a*b;
//     else return a/b
//   }
//   return test1;
// }
// let x=test()
// console.log(x(1,2));



// function test(a) {
//     let sum = 0;
//     for (let i = 0; i < a.length; i++) {
//         sum += a[i];
//     }
//     return sum;
// }
// console.log(test([2, 4, 6, 8]));
// console.log(test([1, 2, 3, 4, 5])); 
// console.log(test([])); 


// function test(a,b) {
//     for (let i=0;i<a.length;i++) {
//         if (a[i] == b) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(test([10, 20, 30, 40, 50], 30));


// function maxNum(arr) {
//     let max = arr[0];    
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];    
//         }
//     }
//     return max;
// }
// console.log(maxNum([3, 8, 1, 6, 2])); 
// console.log(maxNum([1, 2, 5, 7, 9])); 
// console.log(maxNum([1, 2, 3, 4, 5]));


// function test(a) {
//     let cnt=0;    
//     for (let i=0;i<a.length;i++) {
//         if(a[i]%2==0) {
//             cnt++;    
//         }
//     }
//     return cnt;
// }
// console.log(test([1, 2, 3, 4, 5, 6]));
// console.log(test([2, 4, 6, 8])); 



function arithmetic(a) {
    
}