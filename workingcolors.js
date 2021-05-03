const pan =  ["small-pan", "medium-pan", "big-pan"];
const pot =  ["small-pot", "medium-pot", "big-pot"];
const bowl =  ["small-bowl", "medium-bowl", "big-bowl"];
let cash = 100;
const ingredienceL = ["eggs", "flour" , "milk" ,"salmon" ,"sugar" ,"oil" ,"potatos", "carrot", "beef" ,"chicken leg" , "chicken brest", "salt","pepper"];
const shopcash = ["0.50", "0.25" ,"0.50" , "4", "2","1", "2" ,"1" , "4", "10","1", "2" ,"1" , "4", "10","30", "20" ,"30" , "20", "10",];
let stringFix ;
let shopCashFix ;
let panOne ; 
let bucket = [0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let bucketKich = [0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
let bucketCont ;
let longShot = [0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
let doubleShot ;
const currentOrder =["pancakes", "scramble-eggs","boiled-eggs"];
let z ;
let ko; 
let ok ;
let zko ;
let zkoz ;
 let zkoz1 ;
 let bsm;
let countx = 0 ;
console.log(bucket[2]);

let dd = 300;
let dm ;
let ds =60;



let ddx =300;
let dmx ;
let dsx = 60;


let ddx1 =300;
let dmx1 ;
let dsx1 = 60;

let ddx2 =300;
let dmx2 ;
let dsx2 = 60;

let ddx3 =300;
let dmx3 ;
let dsx3 = 60;


document.querySelector(".waiting-list1").addEventListener("click", wl1);
document.querySelector(".waiting-list2").addEventListener("click", wl2);
document.querySelector(".waiting-list3").addEventListener("click", wl3);
document.querySelector(".waiting-list4").addEventListener("click", wl4);
const randomW = [1,2,3,4];
let random = 0 ;
let randomAw =[Math.floor( Math.random()*3),Math.floor( Math.random()*3),Math.floor( Math.random()*3),Math.floor( Math.random()*3)];

function randomAww(){
  randomAw = [Math.floor( Math.random()*3),Math.floor( Math.random()*3),Math.floor( Math.random()*3),Math.floor( Math.random()*3)];


}

function ble(){

    document.querySelector(".waiting-list4").classList.add("okok");
    document.querySelector(".okok").innerHTML = "Current Order";
}

// waitingList();

// function waitingList(){
// for (i=1 ; i<5 ; i++){

//   document.querySelector(".waiting-list"+i).innerHTML ="Awayting order";


  
//         document.querySelector(".waiting-list"+ i).innerHTML = Math.floor(dmx) +" min "+  dsx + "s" ;
//         console.log(dmx +"ok");
   
  
  
// }

// }
function randomx (){
  bsm =  Math.floor( Math.random()*3);
}

let ttd = setInterval(empty, 2300);
let ttd2 = setInterval(empty2, 3350);
let ttd3 = setInterval(empty3, 4750);
let ttd4 = setInterval(empty4, 1750);
let ing2;
let ing3;
let ing4;
let ing ;


function empty4(){

    if (document.querySelector(".waiting-list4").innerHTML === "Empty Slot"){
        clearInterval(zkoz1);
    
    ing4 = Math.floor( Math.random()*3)
console.log(ing4 +" ing 4");
}


    if (ing4 === 2 && document.querySelector(".waiting-list4").innerHTML === "Empty Slot" ){
    
        clearInterval(zkoz1);
       ddx3 = 300;
       dsx3 = 60;
       randomx ();
       randomAw[3] = bsm ;
        zkoz1 = setInterval(myTimz2, 1000);
        
        
    
        // clearInterval(ttd);
    }

}

function empty3(){

    if (document.querySelector(".waiting-list3").innerHTML === "Empty Slot"){
        clearInterval(zkoz);
    
    ing3 = Math.floor( Math.random()*3)
console.log(ing3 +" ing 3");
}


    if (ing3 === 2 && document.querySelector(".waiting-list3").innerHTML === "Empty Slot" ){
    
        clearInterval(zkoz);
       ddx2 = 300;
       dsx2 = 60;
       randomx ();
       randomAw[2] = bsm ;
        zkoz = setInterval(myTimz1, 1000);
        
        
    
        // clearInterval(ttd);
    }

}

function empty2(){

    if (document.querySelector(".waiting-list2").innerHTML === "Empty Slot"){
        clearInterval(zko);
    
    ing2 = Math.floor( Math.random()*3)
console.log(ing2 +" what in the hell");
}


    if (ing2 === 2 && document.querySelector(".waiting-list2").innerHTML === "Empty Slot" ){
    
        clearInterval(zko);
       ddx1 = 300;
       dsx1 = 60;
       randomx ();
       randomAw[1] = bsm ;
        zko = setInterval(myTimz, 1000);
        
        
    
        // clearInterval(ttd);
    }

}






function empty (){

if (document.querySelector(".waiting-list1").innerHTML === "Empty Slot"){
    clearInterval(ko);

ing = Math.floor( Math.random()*3)}

if (ing === 2 && document.querySelector(".waiting-list1").innerHTML === "Empty Slot" ){
    
    clearInterval(ko);
   ddx = 300;
   dsx = 60;
   randomx ();
   randomAw[0] = bsm ;
    ko = setInterval(myTim, 1000);
    
    

    // clearInterval(ttd);
}

// if (document.querySelector(".waiting-list1").innerHTML !== "Empty Slot"){

//     clearInterval(ko);
// }
;}










   

    
    


function myTim (){
    

   ddx = ddx -1 ;
     dsx = dsx -1;
   dmx = ddx / 60 ;
   console.log( ddx + "to");
   if (document.querySelector(".waiting-list1").classList.contains("green") === false && ddx >= 240){
    document.querySelector(".waiting-list1").classList.add("green");

   }else if (document.querySelector(".waiting-list1").classList.contains("green") === true && ddx < 240 && ddx >= 100 ){
    document.querySelector(".waiting-list1").classList.remove("green");
    document.querySelector(".waiting-list1").classList.add("orange");
   }

   else if (document.querySelector(".waiting-list1").classList.contains("orange") === true && ddx && ddx < 100 ){
    document.querySelector(".waiting-list1").classList.remove("orange");
    document.querySelector(".waiting-list1").classList.add("red");
   }

   else if (document.querySelector(".waiting-list1").classList.contains("red") === true && ddx <= 0 ){
    document.querySelector(".waiting-list1").classList.remove("red");

   }

   document.querySelector(".waiting-list1").innerHTML = "Awayting order: " + currentOrder[randomAw[0]] + " " + Math.floor(dmx) +" min "+  dsx + "s" ;
    if(Math.floor(dmx)>0 && dsx === 0){
        dsx = 60;
    }}


    
function myTimz (){

   ddx1 = ddx1 -1 ;
     dsx1 = dsx1 -1;
   dmx1 = ddx1 / 60 ;


   if (document.querySelector(".waiting-list2").classList.contains("green") === false && ddx1 >= 240){
    document.querySelector(".waiting-list2").classList.add("green");

   }else if (document.querySelector(".waiting-list2").classList.contains("green") === true && ddx1 < 240 && ddx1 >= 100 ){
    document.querySelector(".waiting-list2").classList.remove("green");
    document.querySelector(".waiting-list2").classList.add("orange");
   }

   else if (document.querySelector(".waiting-list2").classList.contains("orange") === true && ddx1 && ddx1 < 100 ){
    document.querySelector(".waiting-list2").classList.remove("orange");
    document.querySelector(".waiting-list2").classList.add("red");
   }

   else if (document.querySelector(".waiting-list2").classList.contains("red") === true && ddx1 <= 0 ){
    document.querySelector(".waiting-list2").classList.remove("red");

   }
   console.log( dmx1 + "lol");
   document.querySelector(".waiting-list2").innerHTML =  "Awayting order: " + currentOrder[randomAw[1]] + " " + Math.floor(dmx1) +" min "+  dsx1 + "s" ;
    if(Math.floor(dmx1)>0 && dsx1 === 0){
        dsx1 = 60;
    }}

     
    function myTimz1 (){
    
       ddx2 = ddx2 -1 ;
         dsx2 = dsx2 -1;
       dmx2 = ddx2 / 60 ;


       if (document.querySelector(".waiting-list3").classList.contains("green") === false && ddx2 >= 240){
        document.querySelector(".waiting-list3").classList.add("green");
    
       }else if (document.querySelector(".waiting-list3").classList.contains("green") === true && ddx2 < 240 && ddx2 >= 100 ){
        document.querySelector(".waiting-list3").classList.remove("green");
        document.querySelector(".waiting-list3").classList.add("orange");
       }
    
       else if (document.querySelector(".waiting-list3").classList.contains("orange") === true && ddx2 && ddx2 < 100 ){
        document.querySelector(".waiting-list3").classList.remove("orange");
        document.querySelector(".waiting-list3").classList.add("red");
       }
    
       else if (document.querySelector(".waiting-list3").classList.contains("red") === true && ddx2 <= 0 ){
        document.querySelector(".waiting-list3").classList.remove("red");
    
       }3
       console.log( dmx2 + "lol");
       document.querySelector(".waiting-list3").innerHTML = "Awayting order: " + currentOrder[randomAw[2]] + " " + Math.floor(dmx2) +" min "+  dsx2 + "s" ;
        if(Math.floor(dmx2)>0 && dsx2 === 0){
            dsx2 = 60;
        }}

        
    function myTimz2 (){
    
       ddx3 = ddx3 -1 ;
         dsx3 = dsx3 -1;
       dmx3 = ddx3 / 60 ;
       if (document.querySelector(".waiting-list4").classList.contains("green") === false && ddx3 >= 240){
        document.querySelector(".waiting-list4").classList.add("green");
    
       }
       
       else if (document.querySelector(".waiting-list4").classList.contains("green") === true && ddx3 < 240 && ddx3 >= 100 ){
        document.querySelector(".waiting-list4").classList.remove("green");
        document.querySelector(".waiting-list4").classList.add("orange");
       }
    
       else if (document.querySelector(".waiting-list4").classList.contains("orange") === true && ddx3 && ddx3 < 100 ){
        document.querySelector(".waiting-list4").classList.remove("orange");
        document.querySelector(".waiting-list4").classList.add("red");
       }
    
       else if (document.querySelector(".waiting-list4").classList.contains("red") === true && ddx3 <= 0 ){
        document.querySelector(".waiting-list4").classList.remove("red");
    
       }
      
            document.querySelector(".waiting-list4").innerHTML = "Awayting order: " 
            + " " +currentOrder[randomAw[3]] + "   " + Math.floor(dmx3) +" min "+  dsx3 + "s" ;
       
        if(Math.floor(dmx3)>0 && dsx3 === 0){
            dsx3 = 60;
        }}
   //-------------------
   //------------------
   //-----------------

   function wl1(){

       if(document.querySelector(".main-two-and").innerHTML === "Current Order: none"){
        document.querySelector(".waiting-list1").innerHTML = "Empty Slot";

        if (document.querySelector(".waiting-list1").classList.contains("green") === true ){
            document.querySelector(".waiting-list1").classList.remove("green");
        
           }else if (document.querySelector(".waiting-list1").classList.contains("orange") === true ){
            document.querySelector(".waiting-list1").classList.remove("orange");
        
           }else if (document.querySelector(".waiting-list1").classList.contains("red") === true ){
            document.querySelector(".waiting-list1").classList.remove("red");
        
           }
    ok = setInterval(myTimer, 1000);
    clearInterval(ko);



    function myTimer() {
    
        console.log(random +"bleble");
    
        if( countx === 0) {
            dd = ddx ;
            ds = dsx ;
            dm = ddx / 60 ;
        
        random = randomAw[0];

        }
            countx = 1;
            random = random ; 
         
            if (countx > 0 ){
       dd = dd -1; 
       ds = ds -1;
       dm = dd / 60 ;}
       if(Math.floor(dm)>0 && ds === 0 ){
           ds = 60;
       }
        
       document.querySelector(".main-two-and").innerHTML = "Current order: " + currentOrder[random] + " " + Math.floor(dm) +" min "+  ds + "s" ;
   
    
       if (dd <= 0){
    
    
        document.querySelector(".okok").innerHTML = "Current Order";
       }
      
    }}
    }

     
    function wl2(){ if(document.querySelector(".main-two-and").innerHTML === "Current Order: none"){

        ing2 = Math.floor( Math.random()*3);
        document.querySelector(".waiting-list2").innerHTML = "Empty Slot";

        if (document.querySelector(".waiting-list2").classList.contains("green") === true ){
            document.querySelector(".waiting-list2").classList.remove("green");
        
           }else if (document.querySelector(".waiting-list2").classList.contains("orange") === true ){
            document.querySelector(".waiting-list2").classList.remove("orange");
        
           }else if (document.querySelector(".waiting-list2").classList.contains("red") === true ){
            document.querySelector(".waiting-list2").classList.remove("red");
        
           }
        ok = setInterval(myTimer, 1000);
        clearInterval(zko);
        function myTimer() {
        
            console.log(random +"bleble");
        
            if( countx === 0) {
                dd = ddx1 ;
                ds = dsx1 ;
                dm = ddx1 / 60 ;
            
            random = randomAw[1];
            }
                countx = 1;
                random = random ; 
             
                if (countx > 0 ){
           dd = dd -1; 
           ds = ds -1;
           dm = dd / 60 ;}
           if(Math.floor(dm)>0 && ds === 0 ){
               ds = 60;
           }
        
        
            
           document.querySelector(".main-two-and").innerHTML = "Current order: " + currentOrder[random] + " " + Math.floor(dm) +" min "+  ds + "s" ;
        //    clearInterval(zko);
        //    document.querySelector(".waiting-list2").innerHTML = "Empty Slot";
           
           console.log(dm);
        
           if (dd <= 0){
        
            // clearInterval(ok);
           
            // ok = setInterval(myTimer, 1000);
            // superRandom() 
            document.querySelector(".okok").innerHTML = "Current Order";
           }
          
        }}
        }
  
        function wl3(){ if(document.querySelector(".main-two-and").innerHTML === "Current Order: none"){
            document.querySelector(".waiting-list3").innerHTML = "Empty Slot";


            if (document.querySelector(".waiting-list3").classList.contains("green") === true ){
                document.querySelector(".waiting-list3").classList.remove("green");
            
               }else if (document.querySelector(".waiting-list3").classList.contains("orange") === true ){
                document.querySelector(".waiting-list3").classList.remove("orange");
            
               }else if (document.querySelector(".waiting-list3").classList.contains("red") === true ){
                document.querySelector(".waiting-list3").classList.remove("red");
            
               }

            ok = setInterval(myTimer, 1000);
            clearInterval(zkoz);

function myTimer() {

    console.log(random +"bleble");

    if( countx === 0) {
        dd = ddx2 ;
        ds = dsx2 ;
        dm = ddx2 / 60 ;
    
    random = randomAw[2];
    }
        countx = 1;
        random = random ; 
     
        if (countx > 0 ){
   dd = dd -1; 
   ds = ds -1;
   dm = dd / 60 ;}
   if(Math.floor(dm)>0 && ds === 0 ){
       ds = 60;
   }


    
   document.querySelector(".main-two-and").innerHTML = "Current order: " + currentOrder[random] + " " + Math.floor(dm) +" min "+  ds + "s" ;
//    clearInterval(zkoz);
//    document.querySelector(".waiting-list3").innerHTML = "Empty Slot";
   
   console.log(dm);

   if (dd <= 0){

    // clearInterval(ok);
   
    // ok = setInterval(myTimer, 1000);
    // superRandom() 
    document.querySelector(".okok").innerHTML = "Current Order";
   }
  
}}
}



function wl4(){ if(document.querySelector(".main-two-and").innerHTML === "Current Order: none"){
 
    document.querySelector(".waiting-list4").innerHTML = "Empty Slot";


    if (document.querySelector(".waiting-list4").classList.contains("green") === true ){
        document.querySelector(".waiting-list4").classList.remove("green");
    
       }else if (document.querySelector(".waiting-list4").classList.contains("orange") === true ){
        document.querySelector(".waiting-list4").classList.remove("orange");
    
       }else if (document.querySelector(".waiting-list4").classList.contains("red") === true ){
        document.querySelector(".waiting-list4").classList.remove("red");
    
       }
    ok = setInterval(myTimer, 1000);
    clearInterval(zkoz1);
    function myTimer() {
    
        console.log(random +"bleble");
    
        if( countx === 0) {
            dd = ddx3 ;
            ds = dsx3;
            dm = ddx3 / 60 ;
        
        random = randomAw[3];
        }
            countx = 1;
            random = random ; 
         
            if (countx > 0 ){
       dd = dd -1; 
       ds = ds -1;
       dm = dd / 60 ;}
       if(Math.floor(dm)>0 && ds === 0 ){
           ds = 60;
       }
    
    
        
       document.querySelector(".main-two-and").innerHTML = "Current order: " + currentOrder[randomAw[3]] + " " + Math.floor(dm) +" min "+  ds + "s" ;
    //    clearInterval(zkoz1);
    //    document.querySelector(".waiting-list4").innerHTML = "Empty Slot";
       
       console.log(dm);
    
       if (dd <= 0){
    
        // clearInterval(ok);
       
        // ok = setInterval(myTimer, 1000);
        // superRandom() 
        document.querySelector(".okok").innerHTML = "Current Order";
       }
      
    }}
    }
console.log(ko);
// function superRandom() {

//     random =Math.floor( Math.random()*3);
//     document.querySelector(".main-two-and").innerHTML ="Make some " + currentOrder[random];
   
//     clearInterval(ok);
//     dd = 300;
//     ds = 60;
//     ok = setInterval(myTimer, 1000);
//     return random; 

// }

if ( document.querySelector(".okok").innerHTML === "Current Order"){
document.querySelector(".main-two-and").innerHTML ="Make some " + currentOrder[random];}
console.log(random);

//Section kitchen
document.querySelector(".kitchen__button").addEventListener("click", kitchen);

function kitchen(){

    
    if ( document.querySelector(".ingredience-open").classList.contains("opacity1")) {
        document.querySelector(".ingredience-open").classList.toggle("opacity0");
        document.querySelector(".ingredience-open").classList.toggle("opacity1");

    }
    
    
    
    else if (document.querySelector(".cook-book-open").classList.contains("opacity1")) {
        document.querySelector(".cook-book-open").classList.toggle("opacity0");
        document.querySelector(".cook-book-open").classList.toggle("opacity1");
    
    
    }

    else if (document.querySelector(".store-open").classList.contains("opacity1")) {
        document.querySelector(".store-open").classList.toggle("opacity0");
        document.querySelector(".store-open").classList.toggle("opacity1");}


    document.querySelector(".kitchen-open").classList.toggle("opacity0");
document.querySelector(".kitchen-open").classList.toggle("opacity1");


for (i = 1 ; i<= pan.length ; i++){
    
    document.querySelector(".kitchen-col"+ i).innerHTML = pan[i-1];
}

document.querySelector(".kitchen-col4").innerHTML = pot[0];
document.querySelector(".kitchen-col5").innerHTML = pot[1];
document.querySelector(".kitchen-col6").innerHTML = pot[2];

}

//adding kitchen stuff to mech






//ingredience section

document.querySelector(".ingredience__button").addEventListener("click",ingredience );

function ingredience(){

    if ( document.querySelector(".kitchen-open").classList.contains("opacity1")) {
        document.querySelector(".kitchen-open").classList.toggle("opacity0");
        document.querySelector(".kitchen-open").classList.toggle("opacity1");

    }
    
    
    
    else if (document.querySelector(".cook-book-open").classList.contains("opacity1")) {
        document.querySelector(".cook-book-open").classList.toggle("opacity0");
        document.querySelector(".cook-book-open").classList.toggle("opacity1");
    
    
    }

    else if (document.querySelector(".store-open").classList.contains("opacity1")) {
        document.querySelector(".store-open").classList.toggle("opacity0");
        document.querySelector(".store-open").classList.toggle("opacity1");}






    document.querySelector(".ingredience-open").classList.toggle("opacity0");
document.querySelector(".ingredience-open").classList.toggle("opacity1");




    }

//add ing mech


//cookbook

document.querySelector(".cook-book__button").addEventListener("click", cookBook);

function cookBook () {




    
    if ( document.querySelector(".kitchen-open").classList.contains("opacity1")) {
        document.querySelector(".kitchen-open").classList.toggle("opacity0");
        document.querySelector(".kitchen-open").classList.toggle("opacity1");

    }
    
    
    
   else if ( document.querySelector(".ingredience-open").classList.contains("opacity1")) {
        document.querySelector(".ingredience-open").classList.toggle("opacity0");
        document.querySelector(".ingredience-open").classList.toggle("opacity1");
    
    }

    else if (document.querySelector(".store-open").classList.contains("opacity1")) {
        document.querySelector(".store-open").classList.toggle("opacity0");
        document.querySelector(".store-open").classList.toggle("opacity1");}


        
    document.querySelector(".cook-book-open").classList.toggle("opacity0");
    document.querySelector(".cook-book-open").classList.toggle("opacity1");




}



//sotore




document.querySelector(".store__button").addEventListener("click", store);

function store () {




    
    if ( document.querySelector(".kitchen-open").classList.contains("opacity1")) {
        document.querySelector(".kitchen-open").classList.toggle("opacity0");
        document.querySelector(".kitchen-open").classList.toggle("opacity1");

    }
    
    
    
   else if ( document.querySelector(".ingredience-open").classList.contains("opacity1")) {
        document.querySelector(".ingredience-open").classList.toggle("opacity0");
        document.querySelector(".ingredience-open").classList.toggle("opacity1");
    
    }


        else if (document.querySelector(".cook-book-open").classList.contains("opacity1")) {
            document.querySelector(".cook-book-open").classList.toggle("opacity0");
            document.querySelector(".cook-book-open").classList.toggle("opacity1");}


        
    document.querySelector(".store-open").classList.toggle("opacity0");
    document.querySelector(".store-open").classList.toggle("opacity1");




}




//combine





document.querySelector(".shop__button").addEventListener("click" , check);

function check(){
//pancakes
    if (random === 0){

if (document.querySelector(".main3").innerHTML.includes(", " +ingredienceL[0] + " x " +4)
&&document.querySelector(".main3").innerHTML.includes(", " +ingredienceL[1] + " x " +5)
&&document.querySelector(".main3").innerHTML.includes(", " +ingredienceL[2] + " x " +2)
&&document.querySelector(".main3").innerHTML.includes(", " +ingredienceL[4] + " x " +1)
&&document.querySelector(".main3").innerHTML.includes(", " +pan[0])
){
    clearInterval(ok);
document.querySelector(".main-two-and").innerHTML = "Current Order: none";
countx = 0;
    cash = cash + 20;
    shopCashFix = cash +"£";
    document.querySelector(".cash").innerHTML = shopCashFix;
    document.querySelector(".main3").innerHTML = "";
    // superRandom();
    bucket[16] = bucket[16] + 1 ;
    
  
}
else {  
    
    // console.log(random);
    document.querySelector(".main3").innerHTML = "";}
    longShot = [0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];



}

//boiled eggs

    else if(random === 2){
        if (
        document.querySelector(".main3").innerHTML.includes(", " +ingredienceL[0] + " x " +2)
        &&document.querySelector(".main3").innerHTML.includes(", " +ingredienceL[11] + " x " +1)

        &&document.querySelector(".main3").innerHTML.includes(", " +pot[0])){

clearInterval(ok);
document.querySelector(".main-two-and").innerHTML = "Current Order: none"; 
countx = 0;
            cash = cash + 10;
            shopCashFix = cash +"£";
            document.querySelector(".cash").innerHTML = shopCashFix;
            document.querySelector(".main3").innerHTML = "";
    
            bucket[19] = bucket[19] + 1 ;

        }

        else {  
    
            console.log(random);
            document.querySelector(".main3").innerHTML = "";}
            longShot = [0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
      
            bucket[eeeeKich] = bucket[eeeeKich] + 1 ;
    }
//sramble eggs
    else if(random === 1){
if(
        document.querySelector(".main3").innerHTML.includes(", " +ingredienceL[0] + " x " +5)
        &&document.querySelector(".main3").innerHTML.includes(", " +ingredienceL[11] + " x " +1)
        &&document.querySelector(".main3").innerHTML.includes(", " +ingredienceL[12] + " x " +1)
        &&document.querySelector(".main3").innerHTML.includes(", " +pan[0])
        &&document.querySelector(".main3").innerHTML.includes(", " +ingredienceL[5] + " x " +2))

        {
            countx = 0;
            clearInterval(ok);
            document.querySelector(".main-two-and").innerHTML = "Current Order: none";
            cash = cash + 15;
            shopCashFix = cash +"£";
            document.querySelector(".cash").innerHTML = shopCashFix;
            document.querySelector(".main3").innerHTML = "";
            // superRandom();
            bucket[16] = bucket[16] + 1 ;

        }

        else {  
    
            // console.log(random);
            document.querySelector(".main3").innerHTML = "";}
            longShot = [0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];

        
            bucket[eeeeKich] = bucket[eeeeKich] + 1 ;
            
    }


}



let newDiv;  //includes text of buttons in ing section
let newSpan; // includes numbers near buttons in ing section
//kichen machanics so it only apply once
    
for( i = 1 ; i < ingredienceL.length+1 ;i++){

newDiv = document.createElement("button");
newSpan = document.createElement("span");
newDiv.classList.add("ingredience-col"+i);
newSpan.classList.add("span"+i);
document.querySelector(".ingredience-open").appendChild(newDiv);
document.querySelector(".ingredience-col"+ i).innerHTML =  ingredienceL[i-1];
document.querySelector(".ingredience-open").appendChild(newSpan);
document.querySelector(".ingredience-open").appendChild(document.createElement("br"));
console.log();

}






let storeItem ;
let lol ;
let ee  ;
let eee ;

function printID(e){
    e = e || window.event;
        e = e.target || e.srcElement
       
        
        ee = e.className;
        ee = "." + ee ; 

      
// document.querySelector(ee).innerHTML = "lol";
// console.log(ee);
// console.log(ee.includes("sore"));
eee = ee.includes("sore") ; //creates itsel only when clicked on div that have "sore" as a name ;
eeeIng = ee.includes("ingredience-col");
eeeKich = ee.includes("kitchen-col");
eeee = ee.substring(10); //delating class name leving number as a string
eeeeIng = ee.substring(16);
eeeeKich = ee.substring(12);
eeeeKich = parseInt(eeeeKich); 
eeeeKich = eeeeKich + 15;
// console.log(eeeeKich);
eeeeIng = parseInt(eeeeIng);
eeee = parseInt(eeee); //changing string to a number so i can use it later on to match  monay arre with ingri

        return ee , eee, eeee ;
       
        
    }

    
for (i = 1; i < 20; i++){

    

lol = lol + i;

storeItem = ".sore-item" + i ;
document.querySelector(storeItem).innerHTML = ingredienceL[i-1] + " " + shopcash[i-1] +"£";
// console.log(storeItem);
if (document.querySelector(storeItem).innerHTML === "undefined"){
    document.querySelector(storeItem).innerHTML = "not availeble";
}

if (i> 15){
    document.querySelector(storeItem).innerHTML = pan[i-16] + " " + shopcash[i-1] +"£";
}

if (i>18){ document.querySelector(storeItem).innerHTML = bowl[i-19] + " " + shopcash[i-1] +"£";}

// document.querySelector(storeItem).addEventListener("click",

// lol = function(){ document.querySelector(ee).innerHTML = "lol";});


}
document.body.addEventListener("click", lup)
function lup(){
if(eee === true){
    test2();
}else if (eeeIng === true){lup2()}

else if (eeeKich === true){lup3()}





else {console.log("fuk")}}

function test2(){
    
   
    
stringFix = parseInt(shopcash[eeee -1]);

if (stringFix <= cash){
    cash = cash - shopcash[eeee -1] ;
shopCashFix = cash + "£";
document.querySelector(".cash").innerHTML = shopCashFix;

if (ee ===".sore-item"+ eeee){
    bucket[eeee] = bucket[eeee] + 1};
document.querySelector(".span"+eeee).innerHTML ="x" +  bucket[eeee];


};
    // document.querySelector(".cash").innerHTML =  document.querySelector(".cash").innerHTML - shopcash[eeee - 1];
return cash, bucket;

}


function lup2(){

    // console.log(eeeeIng);
    if(bucket[eeeeIng]>0){  longShot[eeeeIng-1] = longShot[eeeeIng-1] +1;
  
      if(document.querySelector(".main3").innerHTML.includes(ingredienceL[eeeeIng-1])){
  
  
  
  // console.log(", " +ingredienceL[ eeeeIng-1] + " x " +parseInt(longShot[eeeeIng-1]-1) );
  document.querySelector(".main3").innerHTML = document.querySelector(".main3").innerHTML.replace(", " +ingredienceL[ eeeeIng-1] + " x " +parseInt(longShot[eeeeIng-1]-1), "");
  
      }
         
      
    
          console.log(ingredienceL[eeeeIng-1] + " x "+ longShot[eeeeIng-1]);
  
         
  
      
    
      document.querySelector(".main3").innerHTML = document.querySelector(".main3").innerHTML + ", " + ingredienceL[eeeeIng-1] + " x "+ longShot[eeeeIng-1];
      bucket[eeeeIng] = bucket[eeeeIng] -1;
      document.querySelector(".span"+eeeeIng).innerHTML = " x "+ bucket[eeeeIng];}
  
  
  
  
  };
  
  
  function lup3(){
console.log(longShot);
      console.log(eeeeKich);
      if(bucket[eeeeKich]>0){  longShot[eeeeKich-1] = longShot[eeeeKich-1] +1;
    if(eeeeKich < 19){
        if(document.querySelector(".main3").innerHTML.includes(pan[eeeeKich-16])){
    
    
    
    // console.log(", " +ingredienceL[ eeeeIng-1] + " x " +parseInt(longShot[eeeeIng-1]-1) );
    document.querySelector(".main3").innerHTML = document.querySelector(".main3").innerHTML.replace(", " +pan[eeeeKich-16] + " x " +parseInt(longShot[eeeeKich-1]-1), "");
    
        }
           
        
      
            // console.log(ingredienceL[eeeeIng-1] + " x "+ longShot[eeeeIng-1]);
    
           
    
        
      
        document.querySelector(".main3").innerHTML = document.querySelector(".main3").innerHTML + ", " + pan[eeeeKich-16] + " x "+ longShot[eeeeKich-1];
        bucket[eeeeKich] = bucket[eeeeKich] -1;
        document.querySelector(".span"+eeeeKich).innerHTML = " x "+ bucket[eeeeKich];
    
    
    
    }






    else{
        if(document.querySelector(".main3").innerHTML.includes(pot[eeeeKich-19])){
    
    
    
    // console.log(", " +ingredienceL[ eeeeIng-1] + " x " +parseInt(longShot[eeeeIng-1]-1) );
    document.querySelector(".main3").innerHTML = document.querySelector(".main3").innerHTML.replace(", " +pot[eeeeKich-19] + " x " +parseInt(longShot[eeeeKich-1]-1), "");
    
        }
           
        
      
            // console.log(ingredienceL[eeeeIng-1] + " x "+ longShot[eeeeIng-1]);
    
           
    
        
      
        document.querySelector(".main3").innerHTML = document.querySelector(".main3").innerHTML + ", " + pot[eeeeKich-19] + " x "+ longShot[eeeeKich-1];
        bucket[eeeeKich] = bucket[eeeeKich] -1;
        document.querySelector(".span"+eeeeKich).innerHTML = " x "+ bucket[eeeeKich];
    
    
    
    }






    }
    
    
    
    
    };



document.querySelector(".cash").innerHTML = cash ;

