
let noise = 70;
let storageMax = 11 ; 
let storageCurrent = 0;
const storageFull =[];
const pan =  ["small-pan", "medium-pan", "big-pan"];
const pot =  ["small-pot", "medium-pot", "big-pot"];
const bowl =  ["small-bowl", "medium-bowl", "big-bowl"];
const skills = ["luck" , "seasoning" , "perception" , "agility" , "stamina" , "creativity" , "knowlage" , "inteligence", "choping skills", "to bone"]
let cash = 1000;
const ingredienceL = ["eggs", "flour" , "milk" ,"salmon" ,"sugar" ,"oil" ,"potatos", "carrot", "beef" ,"chicken leg" , "chicken brest", "salt","pepper","cheese"];
let currentlyHired = [];
let doublei = 1;
let holyMoly = 1;
let employeeAmout = 0;
let ii ;
let countD = -1 ;
let decoMad = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] ;
let decoMadfix =0;
let newArreys = [small = [], large = [], nic = [],pic =[],dks =[], lxa=[]];
const newArreysHave = [small2 = [], large2 = [], nic2 = [],pic2 =[],dks2 =[], lxa2=[],ddox=[]];
let storage ={
name:[],
number:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
}
let ingredienceFull ={
requireFridge : [ingredienceL[0],ingredienceL[2],ingredienceL[3],ingredienceL[8],ingredienceL[9],ingredienceL[10]]

}

let alredyHired =[];
const shopcash = ["0.50", "0.25" ,"0.50" , "4", "2","1", "2" ,"1" , "4", "10","1", "2" ,"1" , "4", "10","30", "20" ,"30" , "20", "10"];
let skillPointsBucket = [0,0,0,0,0,0,0,0,0,0,0,0];
let stringFix ;
let shopCashFix ;
let panOne ; 
let skillpoints = 0;
let bucket = [0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let bucketKich = [0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
let bucketCont ;
let longShot = [0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
let doubleShot ;
const currentOrder =["pancakes", "scrambleEggs","boiledEggs"];
const ordersToCome = ["lasagne" , "dish1" , "fish & chips", "cesar-salad"];
let superrand = Math.floor( Math.random()*100);
let employeeRandom;
let z ;
let ko; 
let ok ;
let zko ;
let zkoz ;
let fridgePrice = [];
let fridgeDurability = [];
let ovenPrice2 = [];
let ovenPrice = [];
let ovenDurability = [];
let utilities = 50;
let staffPaycheck = 0;
let massSpeed = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const rent = [100, 300, 500, 1000, 3000, 9000, 20000];
let rentlevel = 0;
 let zkoz1 ;
 let replevelvar = -1 ; 
 let bsm;
 let repgreen = 30;
 let reporange = 20;
 let repred = 10;
let countx = 0 ;
let levelReq = 100;
let expBar = 0;
let doubleTwo = 1;
let winChance = [80, 60,40];
let luck = 0 ;
let level = 1; 
let exp = 0;
let statuslevel = 1;
let statusexp = 0;
let statusexpbar = 0;
let quick ;
let levelReq2 = 100 ;

const newArreys1 = [ a=[],b=[],c=[],d=[],e=[],f=[],g=[],h=[],i=[]];
const newArreys2 = [];
const newArreys3 = [];
const newArreys4 = [];
const newArreys5 = [];
const newArreys6 = [];
const newArreys7 = [];
const newArreys8 = [];
const newArreys9 = [];
const newArreys10 = [];
const newArreys11 = [];

let doubleTwo2 = 1;
let fridgePrice2 = [];

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
let elecDaily = 0 ;

let mauritus = [true,true,true,true,true,true,true,true,true,true,true,true]
let recepies = {

boiledEggs : [ ingredienceL[0], ingredienceL[11]],
scrambleEggs: [ingredienceL[0],ingredienceL[11],ingredienceL[12],ingredienceL[5]],
pancakes: [ingredienceL[0],ingredienceL[1],ingredienceL[2],ingredienceL[4]],
lasagne: [ingredienceL[0],ingredienceL[1],ingredienceL[2],ingredienceL[8],ingredienceL[13]]
}


let fridgeSpecs = {

electricity :[120,40,480,520,440,590,510,625,150,320,890,390,410,210, 110,500,30,120,980,0],
freshness: [0,0,0,4,1,2,3,1,4,2,3,2,3,2,3,2,3,3,3,3],
freezer: [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
climateImp: [4,0,1,1,1,0,1,0,0,1,2,2,2,3,2,3,3,3,1,2,3,3,3],
noise: [70,120,90,40,15,70,90,110,95,45,30,100,10,15,45,5,10,20,35,20]
}

let ovenSpecs = {

    electricity :[120,40,480,520,440,590,510,625,150,320,890,390,410,210, 110,500,30,120,980,0,0,0,0],
    temperature: [0,0,0,4,1,2,3,1,4,2,3,2,3,2,3,2,3,3,3,3,3,3,3,3],
    grill: [0,0,1,1,0,1,2,2,1,2,3,2,2,3,3,2,3,3,3,3,3,3,3,3,3],
    fan: [0,0,1,1,1,0,1,0,0,1,2,2,2,3,2,3,3,3,1,2,3,3,3,3,3,3,3,3,3,3,3],
    noise: [70,120,90,40,15,70,90,110,95,45,30,100,10,15,45,5,10,20,35,20,10,20,10],
    
    }

    const ranks = ["Amature","Intern","Wood","Dishwasher","Bronze", "Kitchenhend","Kitchen Porter","Silver","Kitchen assistant",
    "Commis Chef", "Gold","Chef the partie", "Souse chef","Platinum","Head chef","Executive chef","Diamond"]


let employess ={

name: ["Vitaly", "Katy", "Jorge", "Alfred", "Marie", "Jack", "John", "Tim","Gordon","Eleonore"],
skill: [1,2,3,5,7,10,20,35,90,250],
quickness:[1,2,3,5,7,10,20,35,90,250],
paycheck: [80,120,250,750,1700,3000,5000,15000,30000,100000],
initialPayment: [150,250,700,2000,6000,10000,20000,50000,100000,500000],
maxRank: ["Wood","Bronze","Bronze","Silver","Silver","Gold","Platinum","Head chef","Executive chef","Diamond"],
currentRank: ["Amateur","Amateur","Amateur","Amateur","Amateur","Amateur","Amateur","Amateur","Amateur","Amateur",]

}




let repairMatch = 0 ;
document.querySelector(".waiting-list1").addEventListener("click", wl1);
document.querySelector(".waiting-list2").addEventListener("click", wl2);
document.querySelector(".waiting-list3").addEventListener("click", wl3);
document.querySelector(".waiting-list4").addEventListener("click", wl4);
const randomW = [1,2,3,4];
let random = 0 ;
let randomAw =[Math.floor( Math.random()*currentOrder.length),Math.floor( Math.random()*currentOrder.length),Math.floor( Math.random()*currentOrder.length),Math.floor( Math.random()*currentOrder.length)];

function randomAww(){
  randomAw = [Math.floor( Math.random()*currentOrder.length),Math.floor( Math.random()*currentOrder.length),Math.floor( Math.random()*currentOrder.length),Math.floor( Math.random()*currentOrder.length)];


}




function randomx (){
  bsm =  Math.floor( Math.random()*currentOrder.length);
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

}


    if (ing4 === 2 && document.querySelector(".waiting-list4").innerHTML === "Empty Slot" ){
    


        console.log("empty4 second if");

        clearInterval(zkoz1);
       ddx3 = 300;
       dsx3 = 60;
       randomx ();
       console.log(bsm + "bsm");
       randomAw[3] = bsm ;
        zkoz1 = setInterval(myTimz2, 1000);
        
        
    
        // clearInterval(ttd);
    }

}

function empty3(){

    if (document.querySelector(".waiting-list3").innerHTML === "Empty Slot"){
        clearInterval(zkoz);
    
    ing3 = Math.floor( Math.random()*3);

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
    
    ing2 = Math.floor( Math.random()*3);

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
            document.querySelector(".main-two-and").classList.add("green");
        
           }else if (document.querySelector(".waiting-list1").classList.contains("orange") === true ){
            document.querySelector(".waiting-list1").classList.remove("orange");
            document.querySelector(".main-two-and").classList.add("orange");
        
           }else if (document.querySelector(".waiting-list1").classList.contains("red") === true ){
            document.querySelector(".waiting-list1").classList.remove("red");
            document.querySelector(".main-two-and").classList.add("red");
        
           }
    ok = setInterval(myTimer, 1000);
    clearInterval(ko);



    function myTimer() {
    
        
    
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
            document.querySelector(".main-two-and").classList.add("green");
        
           }else if (document.querySelector(".waiting-list2").classList.contains("orange") === true ){
            document.querySelector(".waiting-list2").classList.remove("orange");
            document.querySelector(".main-two-and").classList.add("orange");
        
           }else if (document.querySelector(".waiting-list2").classList.contains("red") === true ){
            document.querySelector(".waiting-list2").classList.remove("red");
            document.querySelector(".main-two-and").classList.add("red");
        
           }
        ok = setInterval(myTimer, 1000);
        clearInterval(zko);
        function myTimer() {
        
           
        
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
           
          
        
           if (dd <= 0){
        
            // clearInterval(ok);
           
            // ok = setInterval(myTimer, 1000);
            // superRandom() 
            document.querySelector(".okok").innerHTML = "Current Order";
           }
          
        }}
        }
  
        function wl3(){ if(document.querySelector(".main-two-and").innerHTML === "Current Order: none"){
            ing3 = Math.floor( Math.random()*3);
          
            document.querySelector(".waiting-list3").innerHTML = "Empty Slot";


            if (document.querySelector(".waiting-list3").classList.contains("green") === true ){
                document.querySelector(".waiting-list3").classList.remove("green");
                document.querySelector(".main-two-and").classList.add("green");
            
               }else if (document.querySelector(".waiting-list3").classList.contains("orange") === true ){
                document.querySelector(".waiting-list3").classList.remove("orange");
                document.querySelector(".main-two-and").classList.add("orange");
            
               }else if (document.querySelector(".waiting-list3").classList.contains("red") === true ){
                document.querySelector(".waiting-list3").classList.remove("red");
                document.querySelector(".main-two-and").classList.add("red");
            
               }

            ok = setInterval(myTimer, 1000);
            clearInterval(zkoz);

function myTimer() {

    

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
   
   

   if (dd <= 0){

    // clearInterval(ok);
   
    // ok = setInterval(myTimer, 1000);
    // superRandom() 
    document.querySelector(".okok").innerHTML = "Current Order";
   }
  
}}
}



function wl4(){ if(document.querySelector(".main-two-and").innerHTML === "Current Order: none"){

    ing4 = Math.floor( Math.random()*3);
 
    document.querySelector(".waiting-list4").innerHTML = "Empty Slot";


    if (document.querySelector(".waiting-list4").classList.contains("green") === true ){
        document.querySelector(".waiting-list4").classList.remove("green");
        document.querySelector(".main-two-and").classList.add("green");
    
       }else if (document.querySelector(".waiting-list4").classList.contains("orange") === true ){
        document.querySelector(".waiting-list4").classList.remove("orange");
        document.querySelector(".main-two-and").classList.add("orange");
    
       }else if (document.querySelector(".waiting-list4").classList.contains("red") === true ){
        document.querySelector(".waiting-list4").classList.remove("red");
        document.querySelector(".main-two-and").classList.add("red");
    
       }
    ok = setInterval(myTimer, 1000);
    clearInterval(zkoz1);
    function myTimer() {
    
       
    
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
    
    
        
       document.querySelector(".main-two-and").innerHTML = "Current order: " + currentOrder[random] + " " + Math.floor(dm) +" min "+  ds + "s" ;
    //    clearInterval(zkoz1);
    //    document.querySelector(".waiting-list4").innerHTML = "Empty Slot";
       
      
    
       if (dd <= 0){
    
        // clearInterval(ok);
       
        // ok = setInterval(myTimer, 1000);
        // superRandom() 
        document.querySelector(".okok").innerHTML = "Current Order";
       }
      
    }}
    }


if ( document.querySelector(".okok").innerHTML === "Current Order"){
document.querySelector(".main-two-and").innerHTML ="Make some " + currentOrder[random];}


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

        else if ( document.querySelector(".skills-open").classList.contains("opacity1")) {
            document.querySelector(".skills-open").classList.toggle("opacity0");
            document.querySelector(".skills-open").classList.toggle("opacity1");
        
        }


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

        else if ( document.querySelector(".skills-open").classList.contains("opacity1")) {
            document.querySelector(".skills-open").classList.toggle("opacity0");
            document.querySelector(".skills-open").classList.toggle("opacity1");
        
        }






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

        else if ( document.querySelector(".skills-open").classList.contains("opacity1")) {
            document.querySelector(".skills-open").classList.toggle("opacity0");
            document.querySelector(".skills-open").classList.toggle("opacity1");
        
        }


        
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

            else if ( document.querySelector(".skills-open").classList.contains("opacity1")) {
                document.querySelector(".skills-open").classList.toggle("opacity0");
                document.querySelector(".skills-open").classList.toggle("opacity1");
            
            }


        
    document.querySelector(".store-open").classList.toggle("opacity0");
    document.querySelector(".store-open").classList.toggle("opacity1");




}


//skills

document.querySelector(".skills__button").addEventListener("click", skill);

function skill () {




    
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


            else if (document.querySelector(".store-open").classList.contains("opacity1"))    { 
    document.querySelector(".store-open").classList.toggle("opacity0");
    document.querySelector(".store-open").classList.toggle("opacity1");}


   document.querySelector(".skills-open").classList.toggle("opacity0");
    document.querySelector(".skills-open").classList.toggle("opacity1");


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
 superrand = Math.floor( Math.random()*100);
if (superrand <= winChance[0]){
    console.log(superrand +" win");

exp = exp + 120;
document.querySelector(".exp").innerHTML = exp + "XP";
expadd();
rep();
expstatus();
            cash = cash + 10;
            shopCashFix = cash +"£";
            document.querySelector(".cash").innerHTML = shopCashFix;
            document.querySelector(".main3").innerHTML = "";
    
            bucket[19] = bucket[19] + 1 ;
            superrand = Math.floor( Math.random()*100);

        }}

        else {  
    
        
            document.querySelector(".main3").innerHTML = "";}
            longShot = [0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
      
            bucket[eeeeKich] = bucket[eeeeKich] + 1 ;
            superrand = Math.floor( Math.random()*100);
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


}

for( i = 1 ; i < skills.length+2 ;i++){

   
if (i === skills.length+1){
 
    newDiv = document.createElement("div");
    document.querySelector(".skills-open").appendChild(newDiv);
    newDiv.classList.add("skills-col"+i);
    document.querySelector(".skills-col"+ i).innerHTML = " 0";

}
else {

    newDiv = document.createElement("button");
    newSpan = document.createElement("span");
    newDiv.classList.add("skills-col"+i);
    newSpan.classList.add("span-s"+i);
    document.querySelector(".skills-open").appendChild(newDiv);
    document.querySelector(".skills-col"+ i).innerHTML =  skills[i-1];
    document.querySelector(".skills-open").appendChild(newSpan);
    document.querySelector(".span-s" +i).innerHTML = " 0"
    document.querySelector(".skills-open").appendChild(document.createElement("br"));

 
    
}
  
}


document.querySelector(".skills-open").addEventListener("click", function(event){

    for (i=1; i<11 ; i++){
if (skillpoints > 0 ){

if (event.target.matches(".skills-col" +i)){

    skillPointsBucket[i] = skillPointsBucket[i] +1;
document.querySelector(".span-s" +i).innerHTML = " level " + skillPointsBucket[i];
skillpoints = skillpoints -1 ;
document.querySelector(".skills-col11").innerHTML = skillpoints +" unspend skill points";
if (event.target.matches(".skills-col1")){
winChance[0] = winChance[0] + 1;
winChance[1] = winChance[1] + 1;
winChance[2] = winChance[2] + 1;
;}

else if (event.target.matches(".skills-col2"))


{
repgreen = repgreen +0.4;
reporange = reporange +0.2;
repred = repred +0.1;



}
}}
    }


})




    
// function spend1(){

//     document.querySelector(".span-s1").innerHTML = 1;
            
//         }
  






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
    
   
    //Odejmowanie od lowodki
stringFix = parseInt(shopcash[eeee -1]);

if (stringFix <= cash ){
  if (ingredienceFull.requireFridge.includes(ingredienceL[eeee-1]) &&  storageFull.length < storageMax){
console.log("zawiera");
    storageFull.push(ingredienceL[eeee-1]);
 
    storageCurrent = storageCurrent +1;
    document.querySelector(".innertree2-04").innerHTML = "Storage: " + storageFull.length + "/" + storageMax ; 
    cash = cash - shopcash[eeee -1] ;

    shopCashFix = cash + "£";
    document.querySelector(".cash").innerHTML = shopCashFix;
    
    if (ee ===".sore-item"+ eeee ){
        bucket[eeee] = bucket[eeee] + 1
        
        
    document.querySelector(".span"+eeee).innerHTML ="x" +  bucket[eeee];}}
    
  
  
  else if (!ingredienceFull.requireFridge.includes(ingredienceL[eeee-1])){
    cash = cash - shopcash[eeee -1] ;
console.log("nie zawiera");
shopCashFix = cash + "£";
document.querySelector(".cash").innerHTML = shopCashFix;

if (ee ===".sore-item"+ eeee ){
    bucket[eeee] = bucket[eeee] + 1
    
    
document.querySelector(".span"+eeee).innerHTML ="x" +  bucket[eeee];



}}}
    
return cash, bucket;
  }


function lup2(){

    // console.log(eeeeIng);
    if(bucket[eeeeIng]>0){  longShot[eeeeIng-1] = longShot[eeeeIng-1] +1;
  
      if(document.querySelector(".main3").innerHTML.includes(ingredienceL[eeeeIng-1])){
  
  
  
  // console.log(", " +ingredienceL[ eeeeIng-1] + " x " +parseInt(longShot[eeeeIng-1]-1) );
  document.querySelector(".main3").innerHTML = document.querySelector(".main3").innerHTML.replace(", " +ingredienceL[ eeeeIng-1] + " x " +parseInt(longShot[eeeeIng-1]-1), "");
  
  storageCurrent = storageCurrent - 1 ;
  document.querySelector(".innertree2-04").innerHTML = "Storage: " + storageCurrent + "/" + storageMax ; 
 
      }
         
      
    
          
  
         
  
      
    
      document.querySelector(".main3").innerHTML = document.querySelector(".main3").innerHTML + ", " + ingredienceL[eeeeIng-1] + " x "+ longShot[eeeeIng-1];
      bucket[eeeeIng] = bucket[eeeeIng] -1;
      document.querySelector(".span"+eeeeIng).innerHTML = " x "+ bucket[eeeeIng];}

    
       console.log(bucket+"bucket");
  
  
  
  };
  
  
  function lup3(){

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
    
    
    
    }    }
    
    };

//restaurant status 




    //exp bar

document.querySelector(".cash").innerHTML = cash ;

document.querySelector(".leveltext").innerHTML = level + " level" ;
document.querySelector(".exp").innerHTML = exp + "XP";


document.querySelector(".statustext").innerHTML = statuslevel + " level" ;
document.querySelector(".statusexp").innerHTML = statusexp + "REP";



function expstatus(){

  
    
    if (statusexp < 100){
      
    document.querySelector(".statusbar").style.width = statusexp +"%";
    document.querySelector(".statusexp").innerHTML = statusexp + "REP";}
   
  else if (statusexp >= 100 && statusexp <= levelReq2){



    statusexpbar =  ((statusexp - levelReq2/2) / doubleTwo2) *2;
    if (statusexpbar === 100){

        statusexpbar = 0 ;
    }
    console.log(statusexp + "exp")
        console.log(statusexpbar + " exp bar");
    console.log(levelReq2 + "level req");
    console.log(doubleTwo2 + "double two");

    document.querySelector(".statusbar").style.width = statusexpbar +"%";
    document.querySelector(".statusexp").innerHTML = statusexp + "REP";

  }
    else if (statusexp > 100 && statusexp > levelReq2) {
        
   
        expbar =  (statusexp - levelReq2/2) / doubleTwo2 ;
        document.querySelector(".statusbar").style.width = statusexpbar +"%";
        document.querySelector(".statusexp").innerHTML = statusexp + "REP";
        statuslevel = statuslevel + 1;
        replevel();
        document.querySelector(".statustext").innerHTML = statuslevel + " level" ;
        
madre2();
      
    
    }
   
   

}


function madre2 () {

  
    levelReq2  = levelReq2 *2;
    doubleTwo2 = doubleTwo2 *2;
    
    expstatus();


}


function expadd(){

  
    
    if (exp < 100){
      
    document.querySelector(".bar").style.width = exp +"%";
    document.querySelector(".exp").innerHTML = exp + "XP";}
   
  else if (exp >= 100 && exp <= levelReq){



    expbar =  ((exp - levelReq/2) / doubleTwo) *2;
    if (expbar === 100){

        expbar = 0 ;
    }
    // console.log(exp + "exp")
    //     console.log(expbar + " exp bar");
    // console.log(levelReq + "level req");
    // console.log(doubleTwo + "double two");

    document.querySelector(".bar").style.width = expbar +"%";
    document.querySelector(".exp").innerHTML = exp + "XP";

  }
    else if (exp > 100 && exp > levelReq) {
        
   
        expbar =  (exp - levelReq/2) / doubleTwo ;
        document.querySelector(".bar").style.width = expbar +"%";
        document.querySelector(".exp").innerHTML = exp + "XP";
        level = level + 1;
        document.querySelector(".leveltext").innerHTML = level + " level" ;
        madre();  

      
    
    }
   
   

}


function madre () {

  
    levelReq  = levelReq *2;
    doubleTwo = doubleTwo *2;
    document.querySelector(".conglevel").innerHTML = "Congratulations you are now level " + level  ;
    document.querySelector(".congratulations").classList.remove("opacity0");
    document.querySelector(".congratulations").classList.add("opacity1");
    skillpoints = skillpoints +3 ;
    document.querySelector(".skills-col11").innerHTML = skillpoints +" unspend skill points"
    expadd();


}
document.querySelector(".continue").addEventListener("click", continuea);

function continuea() {
    document.querySelector(".congratulations").classList.remove("opacity1");
    document.querySelector(".congratulations").classList.add("opacity0");

    
}



function rep (){

if (document.querySelector(".main-two-and").classList.contains("green")){
    statusexp = statusexp + repgreen;
    document.querySelector(".main-two-and").classList.remove("green");
}
else if (document.querySelector(".main-two-and").classList.contains("orange")){
    statusexp = statusexp + reporange;

    document.querySelector(".main-two-and").classList.remove("orange");
}
    else if (document.querySelector(".main-two-and").classList.contains("red")){
        statusexp = statusexp + repred;
        document.querySelector(".main-two-and").classList.remove("red");
    
    }

}

function replevel(){
    replevelvar = replevelvar + 1 ;

    currentOrder.push(ordersToCome[replevelvar]);

    
   
    clearInterval(zkoz1);
    clearInterval(zkoz);
        clearInterval(zko);
            clearInterval(ko);
    randomAww();
    document.querySelector(".waiting-list4").innerHTML = "Empty Slot";
    document.querySelector(".waiting-list2").innerHTML = "Empty Slot";
    document.querySelector(".waiting-list3").innerHTML = "Empty Slot";
    document.querySelector(".waiting-list1").innerHTML = "Empty Slot";
    for (i = 1; i<5 ; i++){
    document.querySelector(".waiting-list" + i).classList.remove("green");
    document.querySelector(".waiting-list" + i).classList.remove("orange");
    document.querySelector(".waiting-list" + i).classList.remove("red");}


    document.querySelector(".conglevel").innerHTML = "congratulations your reputation is now on level " 
    + replevelvar + " you unlock new recepie: " + ordersToCome[replevelvar];
    document.querySelector(".congratulations").classList.add("opacity1");
    document.querySelector(".congratulations").classList.remove("opacity0");
    document.querySelector(".congratulations").classList.add("opacity1");

 
}


let dayM = 0;
let dayH = 0; 
let dayTime ;
let dayC = 1;
let monthC = 1;
let yearC = 2021;
document.querySelector(".calendar").innerHTML = dayC + "/" + monthC +"/" + yearC;
setInterval(day, 1000);

function day() {
    
if (dayM < 59){
    dayM = dayM + 1;
    if (employeeAmout >= 1 ){
        EmployeePick();}
        console.log(bucket +"bucket everysec");
}
else if (dayH <=24)

{ dayM = 0
dayH = dayH + 1 ;
}

// else {

//     dayM = 0;
//     dayH = 0 ;
// };

if (dayH > 5 && dayH < 20) {

    document.querySelector(".day-time").innerHTML = "day";
}
else {document.querySelector(".day-time").innerHTML = "night";}

if (dayH === 24){

dayC = dayC + 1 ;
    document.querySelector(".calendar").innerHTML = dayC + "/" + monthC +"/" + yearC;
    dayM = 0;
    dayH = 0 ;

if (currentFridge.durability > 0 ){
    currentFridge.durability = currentFridge.durability - 1;
    document.querySelector(".innertree2-02").innerHTML =" Durability "+ currentFridge.durability  +" days";
}

if (currentOven.durability > 0 ){
    currentOven.durability = currentOven.durability - 1;
    document.querySelector(".innertree3-02").innerHTML =" Durability "+ currentOven.durability  +" days";
}




cash = cash - utilities;


//what happen to fridge when dura meets 0 ;  write ELSE STATMENT;



}

if (dayH === 18){

    dayC = 1;
    monthC = monthC + 1;
    document.querySelector(".calendar").innerHTML = dayC + "/" + monthC +"/" + yearC;
}

  
if (dayH === 15){
     
    cash = cash - rent[rentlevel] - utilities - staffPaycheck - cash / 10 - cash / 20 ;

    shopCashFix = Math.floor(cash) +"£";
    document.querySelector(".cash").innerHTML = shopCashFix;

    document.querySelector(".innertree1-0").innerHTML = "Rent: " + rent[rentlevel] + " $";
document.querySelector(".innertree1-1").innerHTML = "Utilities: " + utilities + " $";
document.querySelector(".innertree1-2").innerHTML = "Staff-payments: "  + staffPaycheck + " $";
document.querySelector(".innertree1-3").innerHTML = "Tax: " + cash / 10  + "$";
document.querySelector(".innertree1-4").innerHTML = "Maintanance: " + cash / 20 + "$";

    }

    dayTime = dayH + ":" + dayM;
document.querySelector(".time-machine").innerHTML = dayTime  ;

//duratibily manager





//fridge checker color

for( i = 1 ; i < 21 ;i++){




if (fridgePrice[i-1] <= cash){
    document.querySelector(".fridge"+i).classList.add("green");
    document.querySelector(".fridge" +i).classList.remove("smallred")
}
else {document.querySelector(".fridge" +i).classList.add("smallred")}
}

for( i = 1 ; i < ovenName.length +1 ;i++){
if (ovenPrice[i-1] <= cash){
    document.querySelector(".oven"+i).classList.add("green");
    document.querySelector(".oven" +i).classList.remove("smallred")
}
else {document.querySelector(".oven" +i).classList.add("smallred")}


}

}


//bills
document.querySelector(".innertree1-0").innerHTML = "Rent: " + rent[rentlevel] + " $";
document.querySelector(".innertree1-1").innerHTML = "Utilities: " + utilities + " $";
document.querySelector(".innertree1-2").innerHTML = "Staff-payments: "  + staffPaycheck + " $";
document.querySelector(".innertree1-3").innerHTML = "Tax: " + cash / 10  + "$";
document.querySelector(".innertree1-4").innerHTML = "Maintanance: " + cash / 20 + "$";



const fridgeName = ["Garden hole", "Ice cube maker", "1998 Freonmaster", "Nesehis 500" ,"Amber heard heart", "Semsung GTX 200", "GL Destination", "Double-door-magic", "WoodKen freeza" , "Kobe frostFree", "A.I Elsa", "Triple-door-magic", "Garage-freezer", "Gikol legend", 

"Semsung American", "OschB zero", "OschB retro", "GL Ultimate", "Technick 2000", "Frozen Castle" ]

const ovenName =["Campfire", "Drywood 200", "Kobe single oven", "Smallville slowcook ", "340F Plesure" , "Dirty-Ribmaker" , "Mensime 8000", "WoodKen plesure", "T-rock magic", "GL symphony", "Hot happiness", "Semsung L340T", "Kobe Chimera cooper", "GL double oven", "Woodken Grill-Mania", "OschB warming drawer", " GL Temperatur master", "Kobe fast serv", "A.I Torch", "LongiDe Rb30000", "Magma-tremle", "Vulcano"]


let oven = {

    name: "Campfire",
    price: 90,
    durability: 10,

}

let currentOven = {

    name: ovenName[0],
    price: 90,
    durability: 10,
    
}


let fridge = {

name: "Semsung GTX 200" ,
price: 100,
capacity: 10,
durability: 5


}


let currentFridge = {

    name: fridgeName[0],
    price: 100,
    capacity: 10,
    durability: 5
}


// oven appl
document.querySelector(".innertree3-0").innerHTML = "Oven: "
 
 document.querySelector(".innertree3-01").innerHTML = "Name "
 + currentOven.name 
 
 document.querySelector(".innertree3-02").innerHTML =" Durability "+ currentOven.durability  +" days";

 for( i = 1 ; i < ovenName.length+1 ;i++){

    newDiv = document.createElement("div");
   
    newDiv.classList.add("oven"+i);
    oven.name = ovenName[i-1];
    oven.price = Math.floor(oven.price * 1.5);
    ovenPrice.push(oven.price);
    ovenPrice2.push(oven.price);
    ovenDurability.push(oven.durability);
   

    
    oven.durability = Math.floor(oven.durability * 1.2);
  
    document.querySelector(".kitchenOven").appendChild(newDiv);
    document.querySelector(".oven"+i).innerHTML =  oven.name + " price: " + oven.price+"$"
     + " Durability " + oven.durability;
     document.querySelector(".oven"+i).classList.add("borderS");
    
    
    
    }


    document.querySelector(".kitchenOven").addEventListener("mouseover", function(event){
        for (i=1; i<ovenName.length+1 ; i++){
            if (event.target.matches(".oven" +i) && !document.querySelector(".oven"+i).classList.contains("have")
            
            ){

                document.querySelector(".oven" +i).classList.add("have");
                newDiv = document.createElement("div");
                newDiv.classList.add("popover");
                document.querySelector(".oven" +i).appendChild(newDiv);
document.querySelector(".popover").innerHTML = ovenName[i-1];


//space for pros and cons for oven

//pros electricity
if (ovenSpecs.electricity[i-1] <=100)
{
    newDiv = document.createElement("div");
newDiv.classList.add("prosB");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML= "Very low energy cost";
}


else if (ovenSpecs.electricity[i-1] <=200)
{
    newDiv = document.createElement("div");
newDiv.classList.add("pros");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML = "Low energy cost";
}




//pros temperature


if (ovenSpecs.temperature[i-1] ===3)
{
    newDiv = document.createElement("div");
newDiv.classList.add("prosB2");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML= "Very hight temperature efficiency";
}


else if (ovenSpecs.electricity[i-1] ===2)
{
    newDiv = document.createElement("div");
newDiv.classList.add("pros2");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML = "Hight temperature efficiency";
}


//pros fan


if (ovenSpecs.fan[i-1] ===3)
{
    newDiv = document.createElement("div");
newDiv.classList.add("prosB3");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML= "Multiple hight quality fans";
}


else if (ovenSpecs.fan[i-1] ===2)
{
    newDiv = document.createElement("div");
newDiv.classList.add("pros3");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML = "Hight quality fan";
}


//pros grill


if (ovenSpecs.grill[i-1] ===3)
{
    newDiv = document.createElement("div");
newDiv.classList.add("prosB");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML= "Hight quality grill";
}


else if (ovenSpecs.grill[i-1] ===2)
{
    newDiv = document.createElement("div");
newDiv.classList.add("pros");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML = "Medium grill";
}

//cons fans

if (ovenSpecs.fan[i-1] ===0)
{
    newDiv = document.createElement("div");
newDiv.classList.add("consB3");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML= "Dosent have a fan";
}


else if (ovenSpecs.fan[i-1] ===1)
{
    newDiv = document.createElement("div");
newDiv.classList.add("cons3");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML = "Low quality fan";
}

//cons grill

if (ovenSpecs.grill[i-1] ===0)
{
    newDiv = document.createElement("div");
newDiv.classList.add("consB");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML= "Dosent have a grill";
}


else if (ovenSpecs.grill[i-1] ===1)
{
    newDiv = document.createElement("div");
newDiv.classList.add("cons");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML = "Low quality grill";
}


//cons temperature

if (ovenSpecs.temperature[i-1] ===0)
{
    newDiv = document.createElement("div");
newDiv.classList.add("consB2");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML= "Very low temperature efficiency";
}


else if (ovenSpecs.electricity[i-1] ===1)
{
    newDiv = document.createElement("div");
newDiv.classList.add("cons2");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML = "Low temperature efficiency";
}



//cons electricity


if (ovenSpecs.electricity[i-1] >=300 && ovenSpecs.electricity[i-1] <=500 )
{
    newDiv = document.createElement("div");
newDiv.classList.add("cons");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML= "Hight energy cost";
}


else if (ovenSpecs.electricity[i-1] > 500 )
{
    newDiv = document.createElement("div");
newDiv.classList.add("consB");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML = "Very hight energy cost";
}



            }}})


            document.querySelector(".kitchenOven").addEventListener("mouseout", function(event){
                for (i=1; i<ovenName.length+1 ; i++){
                    if (event.target.matches(".oven" +i)   ){
        
                        document.querySelector(".popover").remove(document.querySelector(".popover"));
                        document.querySelector(".oven" +i).classList.remove("have");
        
        
        
                    }
                }})



                //buying oven 


                
    document.querySelector(".kitchenOven").addEventListener("click", function(event){

        for (i=1; i<21 ; i++){
   
    
    if (event.target.matches(".oven" +i) && cash >=ovenPrice[i-1]){

       currentOven.name = ovenName[i-1];
       currentOven.durability = ovenDurability[i];
       currentOven.price = ovenPrice[i-1];

       
       document.querySelector(".innertree3-0").innerHTML = "oven: "
 
 document.querySelector(".innertree3-01").innerHTML = "Name "
 + currentOven.name 
 
 document.querySelector(".innertree3-02").innerHTML =" Durability "+ currentOven.durability  +" days";


cash = cash - ovenPrice[i-1];
shopCashFix = Math.floor(cash) + "$";
document.querySelector(".cash").innerHTML = shopCashFix;

utilitiesF();

}}})


//kitchen appls fridge

document.querySelector(".innertree2-0").innerHTML = "Fridge: "
 
 document.querySelector(".innertree2-01").innerHTML = "Name "
 + currentFridge.name 
 
 document.querySelector(".innertree2-02").innerHTML =" Durability "+ currentFridge.durability  +" days";




for( i = 1 ; i < 21 ;i++){

    newDiv = document.createElement("div");
   
    newDiv.classList.add("fridge"+i);
    fridge.name = fridgeName[i-1];
    fridge.price = Math.floor(fridge.price * 1.5);
    fridgePrice.push(fridge.price);
    fridgePrice2.push(fridge.price);
    fridgeDurability.push(fridge.durability);
   

    fridge.capacity = Math.floor( fridge.capacity * 1.1);
    fridge.durability = Math.floor(fridge.durability * 1.2);
  
    document.querySelector(".kitchenApp").appendChild(newDiv);
    document.querySelector(".fridge"+i).innerHTML =  fridge.name + " price: " + fridge.price+"$"
     +" storage: " + fridge.capacity + " items " + " Durability " + fridge.durability;
     document.querySelector(".fridge"+i).classList.add("borderS");
    document.querySelector(".ingredience-open").appendChild(document.createElement("br"));
    
    
    }

    document.querySelector(".kitchenApp").addEventListener("mouseover", function(event){
        for (i=1; i<21 ; i++){
            if (event.target.matches(".fridge" +i) && !document.querySelector(".fridge"+i).classList.contains("have")
            
            ){

                document.querySelector(".fridge" +i).classList.add("have");
                newDiv = document.createElement("div");
                newDiv.classList.add("popover");
                document.querySelector(".fridge" +i).appendChild(newDiv);
document.querySelector(".popover").innerHTML = fridgeName[i-1];

// fridge pros cons

//electricity pros

if (fridgeSpecs.electricity[i-1] <=100)
{
    newDiv = document.createElement("div");
newDiv.classList.add("prosB");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML= "Very low energy cost";
}


else if (fridgeSpecs.electricity[i-1] <=200)
{
    newDiv = document.createElement("div");
newDiv.classList.add("pros");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML = "Low energy cost";
}

//freshness pros
if (fridgeSpecs.freshness[i-1] ===3)
{
    newDiv = document.createElement("div");
newDiv.classList.add("prosB");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML = "Very hight product freshness";
}


else if (fridgeSpecs.freshness[i-1] ===2)
{
    newDiv = document.createElement("div");
newDiv.classList.add("pros");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML = "Hight product freshness";
}


//freezer pros 

if (fridgeSpecs.freezer[i-1] ===0)
{
    newDiv = document.createElement("div");
newDiv.classList.add("cons2");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML = "Dosent have freezer";
}


//climate imp pros

if (fridgeSpecs.climateImp[i-1]===2)

{    newDiv = document.createElement("div");
newDiv.classList.add("pros3");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML = "Good climate impact";
}


if (fridgeSpecs.climateImp[i-1]===3)

{    newDiv = document.createElement("div");
newDiv.classList.add("prosB3");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML = "Very Good climate impact";
}

//noise pros

if (fridgeSpecs.noise[i-1] < 40){
    newDiv = document.createElement("div");
    newDiv.classList.add("prosB");
    document.querySelector(".popover").appendChild(newDiv);
        document.querySelector(".popover").lastChild.innerHTML = "Very quiet";

}

if (fridgeSpecs.noise[i-1] >= 40 && fridgeSpecs.noise[i-1] < 70 ){
    newDiv = document.createElement("div");
    newDiv.classList.add("pros");
    document.querySelector(".popover").appendChild(newDiv);
        document.querySelector(".popover").lastChild.innerHTML = "Quiet";

}


//noise cons


if (fridgeSpecs.noise[i-1] >= 70 && fridgeSpecs.noise[i-1] < 100){
    newDiv = document.createElement("div");
    newDiv.classList.add("cons");
    document.querySelector(".popover").appendChild(newDiv);
        document.querySelector(".popover").lastChild.innerHTML = "Loud";

}

if (fridgeSpecs.noise[i-1] >= 100){
    newDiv = document.createElement("div");
    newDiv.classList.add("cons");
    document.querySelector(".popover").appendChild(newDiv);
        document.querySelector(".popover").lastChild.innerHTML = "Very Loud";

}


//climate imp cons


if (fridgeSpecs.climateImp[i-1 ]===1)

{    newDiv = document.createElement("div");
newDiv.classList.add("cons3");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML = "Bad climate impact";
}

if (fridgeSpecs.climateImp[i-1]===0)

{    newDiv = document.createElement("div");
newDiv.classList.add("consB3");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML = " Very Bad climate impact";
}

//freezer cons

if (fridgeSpecs.freezer[i-1] ===1)
{
    newDiv = document.createElement("div");
newDiv.classList.add("pros2");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML = "Freezer";
}

// console.log(fridgeSpecs.electricity[i-1]);
//electricity cons

if (fridgeSpecs.electricity[i-1] > 400 && fridgeSpecs.electricity[i-1] < 600)
{
    newDiv = document.createElement("div");
newDiv.classList.add("cons3");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML = "Hight energy cost";
}


else if (fridgeSpecs.electricity[i-1] > 600)
{
    newDiv = document.createElement("div");
newDiv.classList.add("consB3");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".popover").lastChild.innerHTML = "Very hight energy cost";
}


//freshness cons 

if (fridgeSpecs.freshness[i-1] ===0)
{
    newDiv = document.createElement("div");
newDiv.classList.add("consB");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".consB").innerHTML = "Very low product freshness";
}


else if (fridgeSpecs.freshness[i-1] ===1)
{
    newDiv = document.createElement("div");
newDiv.classList.add("cons");
document.querySelector(".popover").appendChild(newDiv);
    document.querySelector(".cons").innerHTML = "Low product freshness";
}



            }

        }


    })

    document.querySelector(".kitchenApp").addEventListener("mouseout", function(event){
        for (i=1; i<21 ; i++){
            if (event.target.matches(".fridge" +i)   ){

                document.querySelector(".popover").remove(document.querySelector(".popover"));
                document.querySelector(".fridge" +i).classList.remove("have");



            }
        }})


//buying FRIDGE

    document.querySelector(".kitchenApp").addEventListener("click", function(event){

        for (i=1; i<21 ; i++){
   
    
    if (event.target.matches(".fridge" +i) && cash >=fridgePrice[i-1]){

       currentFridge.name = fridgeName[i-1];
       currentFridge.durability = fridgeDurability[i];
       currentFridge.price = fridgePrice[i-1];

       
       document.querySelector(".innertree2-0").innerHTML = "Fridge: "
 
 document.querySelector(".innertree2-01").innerHTML = "Name "
 + currentFridge.name 
 
 document.querySelector(".innertree2-02").innerHTML =" Durability "+ currentFridge.durability  +" days";


cash = cash - fridgePrice[i-1];
shopCashFix = Math.floor(cash) + "$";
document.querySelector(".cash").innerHTML = shopCashFix;

//utilities dodac inne wydatki
utilitiesF();

    }}})
    let xxxx ; 
    let xxxx2;

    //repair fridge
    document.querySelector(".repair").addEventListener("click", function(){


        if (currentFridge.durability === fridgeDurability[ fridgeName.indexOf(currentFridge.name)] ){

            console.log("Your fridge is fine");}

            else if (currentFridge.durability === 0){

console.log("Your fridge is broken");

            }
            else{
        
 xxxx =(fridgePrice2[fridgeName.indexOf(currentFridge.name)]-
 (((fridgeDurability[ fridgeName.indexOf(currentFridge.name)] - 
   currentFridge.durability )/fridgeDurability[ fridgeName.indexOf(currentFridge.name)])*100))/currentFridge.durability ;
        cash = cash - xxxx ;
        shopCashFix = Math.floor(cash) + "$";
        document.querySelector(".cash").innerHTML = shopCashFix;
        currentFridge.durability = fridgeDurability[ fridgeName.indexOf(currentFridge.name)];
        document.querySelector(".innertree2-02").innerHTML =" Durability "+ currentFridge.durability  +" days";

    }})



    //repair oven

    document.querySelector(".repair2").addEventListener("click", function(){


        if (currentOven.durability === fridgeDurability[ fridgeName.indexOf(currentOven.name)] ){

            console.log("Your fridge is fine");}

            else if (currentOven.durability === 0){

console.log("Your fridge is broken");

            }
            else{
        
 xxxx2 =(ovenPrice2[ovenName.indexOf(currentOven.name)]-
 (((fridgeDurability[ ovenName.indexOf(currentOven.name)] - 
   currentOven.durability )/fridgeDurability[ ovenName.indexOf(currentOven.name)])*100))/currentOven.durability ;
        cash = cash - xxxx2 ;
        shopCashFix = Math.floor(cash) + "$";
        document.querySelector(".cash").innerHTML = shopCashFix;
        currentOven.durability = ovenDurability[ ovenName.indexOf(currentOven.name)];
        document.querySelector(".innertree3-02").innerHTML =" Durability "+ currentOven.durability  +" days";
console.log(ovenPrice2);
console.log(xxxx2);}
    })

    console.log(fridgeSpecs.electricity);

    document.querySelector(".noise").innerHTML = "Noise: " + noise +" db";
    if (noise >= 70){
    document.querySelector(".noise").style.color = "red";}
    else {document.querySelector(".noise").style.color = "green";}



document.querySelector(".innertree2-04").innerHTML = "Storage: " + storageCurrent + "/" + storageMax ; 

function utilitiesF() {


    elecDaily = (fridgeSpecs.electricity[(fridgeName.indexOf( currentFridge.name))] )*0.4 + (ovenSpecs.electricity[(ovenName.indexOf( currentOven.name))]*0.4 ) ;


noise = (fridgeSpecs.noise[(fridgeName.indexOf( currentFridge.name))]) + (ovenSpecs.noise[(ovenName.indexOf( currentOven.name))]) ;
document.querySelector(".noise").innerHTML = "Noise: " + noise +" db";
    if (noise >= 70){
    document.querySelector(".noise").style.color = "red";}
    else {document.querySelector(".noise").style.color = "green";}


utilities = elecDaily ;
document.querySelector(".innertree1-1").innerHTML = "Utilities: " + utilities + " $";
}




let currentVigetName = 0 
document.querySelector(".innertree4-0").innerHTML = employess.name[currentVigetName] +":";
document.querySelector(".innertree4-01").innerHTML = "Cooking skill: "+  employess.skill[currentVigetName];
document.querySelector(".innertree4-02").innerHTML = "Speed: "+  employess.quickness[currentVigetName];
document.querySelector(".innertree4-03").innerHTML = "Dayly upkeep: "+  employess.paycheck[currentVigetName];
document.querySelector(".innertree4-04").innerHTML = "Initial payment: "+  employess.initialPayment[currentVigetName];
document.querySelector(".innertree4-05").innerHTML = "Rank: "+  employess.currentRank[currentVigetName];


//next emp

document.querySelector(".innertree4-07").addEventListener("click",function(){

    if (currentVigetName < employess.name.length -1 ){
    currentVigetName = currentVigetName + 1 ;
    document.querySelector(".innertree4-0").innerHTML = employess.name[currentVigetName] +":";
    document.querySelector(".innertree4-01").innerHTML = "Cooking skill: "+  employess.skill[currentVigetName];
    document.querySelector(".innertree4-02").innerHTML = "Speed: "+  employess.quickness[currentVigetName];
    document.querySelector(".innertree4-03").innerHTML = "Dayly upkeep: "+  employess.paycheck[currentVigetName];
    document.querySelector(".innertree4-04").innerHTML = "Initial payment: "+  employess.initialPayment[currentVigetName];
    document.querySelector(".innertree4-05").innerHTML = "Rank: "+  employess.currentRank[currentVigetName];}

console.log(currentVigetName);

if (currentlyHired.includes(currentVigetName)){
    document.querySelector(".innertree4-0").innerHTML = employess.name[currentVigetName] +": hired";
    document.querySelector(".hire").classList.add("sell");
        }

        if (!currentlyHired.includes(currentVigetName)){

            document.querySelector(".hire").classList.remove("sell");
                }


})

//previus emp

document.querySelector(".innertree4-08").addEventListener("click",function(){

    if (currentVigetName > 0 ){
    currentVigetName = currentVigetName -1 ;
    document.querySelector(".innertree4-0").innerHTML = employess.name[currentVigetName] +":";
    document.querySelector(".innertree4-01").innerHTML = "Cooking skill: "+  employess.skill[currentVigetName];
    document.querySelector(".innertree4-02").innerHTML = "Speed: "+  employess.quickness[currentVigetName];
    document.querySelector(".innertree4-03").innerHTML = "Dayly upkeep: "+  employess.paycheck[currentVigetName];
    document.querySelector(".innertree4-04").innerHTML = "Initial payment: "+  employess.initialPayment[currentVigetName];
    document.querySelector(".innertree4-05").innerHTML = "Rank: "+  employess.currentRank[currentVigetName];}

    console.log(currentVigetName);
    if (currentlyHired.includes(currentVigetName)){

        document.querySelector(".hire").classList.add("sell");
        document.querySelector(".innertree4-0").innerHTML = employess.name[currentVigetName] +": hired";
            }
    
            if (!currentlyHired.includes(currentVigetName)){
    
                document.querySelector(".hire").classList.remove("sell");
                    }

})


//hiering

document.querySelector(".hire").addEventListener("click", function(){
   if(cash >= employess.initialPayment[currentVigetName]){
   
    document.querySelector(".innertree4-0").innerHTML = employess.name[currentVigetName] +": hired";
    if (!currentlyHired.includes(currentVigetName)){
        currentlyHired.push( currentVigetName );
        
cash = cash - employess.initialPayment[currentVigetName] ;
employeeAmout = employeeAmout + 1;
staffPaycheck = staffPaycheck + employess.paycheck[currentVigetName];

shopCashFix = cash + "$";
document.querySelector(".cash").innerHTML = shopCashFix;
document.querySelector(".innertree1-2").innerHTML = "Staff-payments: "  + staffPaycheck + " $";


if (document.querySelector(".employeeCurrent").innerHTML === "Current Employee:none"){
    document.querySelector(".employeeCurrent").innerHTML = "Current Employee: " +employess.name[currentlyHired[0]];
  }





for (i = 1; i <=10 ; i++){
    if (document.querySelector(".vidget" + doublei).innerHTML = "Empty"){
document.querySelector(".vidget" +doublei).innerHTML = employess.name[currentVigetName] ;
newDiv = document.createElement("div");
doublei = doublei + i; //dzieki temu moge olac parseint doublei wynosi 1 

newDiv.classList.add("vidget");
newDiv.classList.add("vidget"+doublei);
document.querySelector(".vidgetMother").appendChild(newDiv);
document.querySelector(".vidget" + doublei).innerHTML = "Empty";
document.querySelector(".vidget" +doublei).style.width = "2.5rem";

document.querySelector(".employeeWork").classList.add("grey");
newDiv = document.createElement("div");
newDiv.classList.add("employeeWork"+doublei);
newDiv.classList.add("employeeWorkC");
newDiv.innerHTML ="Employee work station:";
document.querySelector(".employeeMother").appendChild(newDiv);

for (let opa =2; opa <=12;opa++){
console.log(document.querySelector(".employeeWork"+opa));
console.log(opa);

    if(document.querySelector(".employeeWork"+opa) !== null && typeof(document.querySelector(".employeeWork"+opa)) !==undefined){

console.log("first if");

if (doublei !==opa && document.querySelector(".employeeWork"+opa).classList.contains("opacity10")){
console.log("second if");
    document.querySelector(".employeeWork"+opa).classList.add("opacity0");
    document.querySelector(".employeeWork"+opa).classList.remove("opacity10");
    newDiv.classList.add("opacity10");

}}
    else {newDiv.classList.add("opacity10");
console.log("else");
}



}



newDiv = document.createElement("div");
newDiv.classList.add("employeeCurrent"+doublei);
newDiv.innerHTML ="Current Employee:none";
document.querySelector(".employeeWork"+doublei).appendChild(newDiv);


newDiv = document.createElement("div");
newDiv.classList.add("employeeCurrentOrder"+doublei);
newDiv.innerHTML ="Current Order: none";
document.querySelector(".employeeWork"+doublei).appendChild(newDiv);




newDiv = document.createElement("div");
newDiv.classList.add("employeeCurrentOrderWork"+doublei);
newDiv.innerHTML ="No work";
document.querySelector(".employeeWork"+doublei).appendChild(newDiv);


newDiv = document.createElement("div");
newDiv.classList.add("employeeCurrentOrderIng"+doublei);
newDiv.innerHTML ="Current Ing: none";
document.querySelector(".employeeWork"+doublei).appendChild(newDiv);

document.querySelector(".employeeWork").classList.add("opacity0");


   
break;}


}

for (i = 1 ; i<10 ;i++){
   holyMoly = i + 1


   if (document.querySelector(".employeeCurrent").innerHTML === "Current Employee:none"){
   

}

  else if  (document.querySelector(".employeeCurrent" + holyMoly).innerHTML === "Current Employee:none"){
         document.querySelector(".employeeCurrent" + holyMoly).innerHTML = "Current Employee: " +employess.name[currentlyHired[i-1]];


 break;
     }
     else{
        
         console.log(i +"ojojo");}
     }
    }

    if (currentlyHired.includes(currentVigetName)){

document.querySelector(".hire").classList.add("sell");}
    }

})

if (currentlyHired.length > 0 ){

employess.name[currentlyHired];


}


function EmployeePick(){ 
    

  employeeRandom = Math.floor(Math.random()*employeeAmout) +2;
 
    
    if( 
    document.querySelector(".employeeCurrent" +employeeRandom).innerHTML === "Current Employee:none" === false
 && 
document.querySelector(".employeeCurrentOrder" +employeeRandom).innerHTML === "Current Order: none" === true


){
    
    document.querySelector(".waiting-list4").innerHTML = "Empty Slot";


    if (document.querySelector(".waiting-list4").classList.contains("green") === true ){
        document.querySelector(".waiting-list4").classList.remove("green");
        document.querySelector(".employeeWork" +employeeRandom).classList.add("green");
        
        
    
       }else if (document.querySelector(".waiting-list4").classList.contains("orange") === true ){
        document.querySelector(".waiting-list4").classList.remove("orange");
        document.querySelector(".employeeWork"+employeeRandom).classList.add("orange");
    
       }else if (document.querySelector(".waiting-list4").classList.contains("red") === true ){
        document.querySelector(".waiting-list4").classList.remove("red");
        document.querySelector(".employeeWork"+employeeRandom).classList.add("red");
    
       }
  
    
    
        
       document.querySelector(".employeeCurrentOrder"  +employeeRandom).innerHTML = "Current order: " + currentOrder[randomAw[3]] ;
    
    //    randomAw[3] = Math.floor( Math.random()*currentOrder.length);

       clearInterval(zkoz1);
    //    document.querySelector(".waiting-list4").innerHTML = "Empty Slot";
       
      
    
       if (dd <= 0){
    
      
        document.querySelector(".okok").innerHTML = "Current Order";
       }
    }

    
     



    
let currentDish = currentOrder[randomAw[3]];
for (let k in recepies) {
//   console.log(k);
  if (document.querySelector(".employeeCurrentOrderWork" +employeeRandom).innerHTML === "No work" && document.querySelector(".waiting-list4").innerHTML !=="Empty Slot"){



console.log("no work");

    if (k === currentDish) {
    
// document.querySelector(".employeeCurrentOrderIng2").innerHTML = recepies[k].join(", ");
for (let i =0 ; i<25; i ++){
for ( z of ingredienceL){
 
if (z ===recepies[k][i] ){
    
// console.log(bucket[i+1],i,z);


console.log(recepies[k][i] +"loookfooor");
console.log(bucket[i+1] +"bucket");
if (bucket[i+1] > 0){
    bucket[i+1] = bucket[i+1] - 1 ;
    document.querySelector(".span"+(i+1)).innerHTML = bucket[i+1];
console.log("dziwny buckettt");
    newArreysHave[employeeRandom].push(recepies[k][i]);
    

    for(const [da,lookFoor] of storageFull.entries()){
    
       
        console.log(recepies[k][i] +"receeepiee"+ lookFoor +"loookkffooorr");
        if (lookFoor === recepies[k][i]){
            console.log(bucket[i+1] +"bucket w loopie");
        
            console.log("SPLICE ONEEEEEEEEEEEEEEEEEEEgff");
            storageFull.splice(da,1);
            console.log(storageFull+"okokokokfiuull");
            document.querySelector(".innertree2-04").innerHTML = "Storage: " + storageFull.length + "/" + storageMax ; 
            break; 
        }}





}

 

    else {const require = (constant, ...second) => document.querySelector(".employeeCurrentOrderIng" +employeeRandom).innerHTML = constant + ": " + second;


newArreys[employeeRandom].push(recepies[k][i]);




require("Items required " , newArreys[employeeRandom]);
document.querySelector(".employeeCurrentOrderIng" +employeeRandom).classList.add("darkred");

document.querySelector(".employeeCurrentOrderWork" +employeeRandom).innerHTML = "Work in progress";

        
        
        

        

    }
}

}

for ( z of pot){

   
if (z ===recepies[k][i] ){
    
    // console.log(bucket[i+1],i,z);
    
  
    
    if (bucket[19] > 0){
        bucket[19] = bucket[19] - 1 ;
        document.querySelector(".span"+(19)).innerHTML = bucket[19];}
    
        else {const require = (constant, ...second) => document.querySelector(".employeeCurrentOrderIng" +employeeRandom).innerHTML = constant + ": " + second;
    
    
    newArreys[employeeRandom].push(recepies[k][i])
    
    
    
    
    require("Items required " , newArreys[employeeRandom]);
    document.querySelector(".employeeCurrentOrderIng" +employeeRandom).classList.add("darkred");
    
    document.querySelector(".employeeCurrentOrderWork" +employeeRandom).innerHTML = "Work in progress";
    }
            
            
            
            
            
    
    
    }
    
    }
    


for ( z of pan){
 
 
if (z ===recepies[k][i] ){
    
    // console.log(bucket[i+1],i,z);
    
    
    
    if (bucket[16] > 0){
        bucket[16] = bucket[16] - 1 ;
        document.querySelector(".span"+(16)).innerHTML = bucket[16];}
    
        else {const require = (constant, ...second) => document.querySelector(".employeeCurrentOrderIng" +employeeRandom).innerHTML = constant + ": " + second;
    
    
    newArreys[employeeRandom].push(recepies[k][i])
    
    
    
    
    require("Items required " , newArreys[employeeRandom]);
    document.querySelector(".employeeCurrentOrderIng" +employeeRandom).classList.add("darkred");
    
    document.querySelector(".employeeCurrentOrderWork" +employeeRandom).innerHTML = "Work in progress";
 
    }
            
            
            
            
            
    
    
    }
    
    }


    


}
 ;
}}
function repo (element=ingredienceL){

if (     document.querySelector(".employeeCurrentOrderWork" +employeeRandom).innerHTML === "Work in progress"){
    

    
    
    for (let b = 0 ;b<newArreys[employeeRandom].length;b++){
        // console.log(newArreys[employeeRandom][b] +"i czy to jest to");


      

   
    
let diamond =  document.querySelector(".employeeCurrentOrderIng" + employeeRandom).innerHTML.replace("Items required : ","").split(",");
// diamond.split(", ");
// console.log(diamond[b]);

for (const [i,look] of element.entries()){

// for (let key of newArreysHave[employeeRandom] ){

// if (key === )

// }

if (look === diamond[b]) {
    //   console.log( i, diamond[b]);
    //   console.log(bucket);


  

if (bucket[i+1]>0 ){

    console.log(look);
    console.log(bucket);
    
    for (const [f,key] of newArreys[employeeRandom].entries() ){ 
      



    
            if ( key ===element[i]){


                console.log(newArreysHave[employeeRandom] +" before bewarrhave");
console.log(newArreys[employeeRandom] +"before");
  
    newArreysHave[employeeRandom].push(element[i]);
newArreys[employeeRandom].splice(f,1);

console.log(newArreysHave[employeeRandom] +" after bewarrhave");
console.log(newArreys[employeeRandom] +"after");

for(const [da,lookFoor] of storageFull.entries()){
    
    console.log(element[i] +"loookfooor")
    console.log(lookFoor+"dddddddddddd");
    if (lookFoor === element[i]){
        console.log(bucket[i+1] +"bucket w loopie");
    
        console.log("SPLICEEEEEEEEEEETWOOOOOOOOOOOOOOOOOOOO");
        storageFull.splice(da,1);
        console.log(storageFull+"okokokokfiuull");
        document.querySelector(".innertree2-04").innerHTML = "Storage: " + storageFull.length + "/" + storageMax ; 
        
    }}


// console.log(newArreys[employeeRandom][b].length ,ingredienceL[i] ,newArreysHave[employeeRandom]);
document.querySelector(".employeeCurrentOrderIng" + employeeRandom).innerHTML = "Items required : " + newArreys[employeeRandom];
console.log(bucket + "jak to sie zmienia ");

bucket[i+1] = bucket[i+1] - 1 ; 
// console.log(newArreys[employeeRandom],newArreysHave[employeeRandom] +"   haves ");
            


           
                
                
                }


}





}
}




}}

// console.log(i);
//     console.log(look+"look");

//korniszon
}




if ( document.querySelector(".employeeCurrentOrderIng" + employeeRandom).innerHTML === "Items required : "){

    document.querySelector(".employeeCurrentOrderWork" + employeeRandom).innerHTML = "Processing...";
    document.querySelector(".employeeCurrentOrderIng" + employeeRandom).innerHTML = "Itemss required : ";
   }

   if(document.querySelector(".employeeCurrentOrderWork" + employeeRandom).innerHTML === "Processing...")
   
  
   
   { console.log("Czy sieeee zmieniaaaa");
if (typeof(document.querySelector(".bar"+employeeRandom)) === undefined ||document.querySelector(".bar"+employeeRandom)===null ){
newDiv = document.createElement("div");
newDiv.classList.add("employeeBarMother");
document.querySelector(".employeeWork" + employeeRandom).appendChild(newDiv)
newDiv.classList.add("bar" + employeeRandom);


newDiv = document.createElement("div");
newDiv.classList.add("employeeBarChild");
document.querySelector(".bar" + employeeRandom).appendChild(newDiv)
newDiv.classList.add("employeeBarChild" +employeeRandom);}



document.querySelector(".employeeCurrentOrderWork" + employeeRandom).innerHTML = "Processing...."}
let currentEmp = employeeRandom;
if(document.querySelector(".employeeCurrentOrderWork" + currentEmp).innerHTML === "Processing...."){

  
console.log("czyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy toooooooooooooo jesttttttttttttttttt");
console.log(mauritus[currentEmp]);
if ( document.querySelector(".employeeWork" + currentEmp).classList.contains("opacity10")===true &&mauritus[currentEmp] ===true ){





  let squuz=  setInterval(processing, 1020);
mauritus[currentEmp] = false ;

let secondsNew =  (new Date().getTime() / 1000) - newArreys1[currentEmp] ;


if (secondsNew <10000){
massSpeed[currentEmp] = massSpeed[currentEmp] + Math.floor(secondsNew);}
function processing(){
   
    
massSpeed[currentEmp] = massSpeed[currentEmp] + 10 ;
    document.querySelector(".employeeBarChild" +currentEmp).style.width = massSpeed[currentEmp]  +"%";

if (massSpeed[currentEmp]>=100){

    exp = exp + 50;
    document.querySelector(".exp").innerHTML = exp + "XP";
    expadd();
    function rep2 (){

        if (document.querySelector(".employeeWork" + currentEmp).classList.contains("green")){
            statusexp = statusexp + repgreen;
            document.querySelector(".employeeWork" + currentEmp).classList.remove("green");
        }
        else if (document.querySelector(".employeeWork" + currentEmp).classList.contains("orange")){
            statusexp = statusexp + reporange;
        
            document.querySelector(".employeeWork" + currentEmp).classList.remove("orange");
        }
            else if (document.querySelector(".employeeWork" + currentEmp).classList.contains("red")){
                statusexp = statusexp + repred;
                document.querySelector(".employeeWork" + currentEmp).classList.remove("red");
            
            }
        
        }
        rep2();
    expstatus();
                cash = cash + 10;
                shopCashFix = cash +"£";
                document.querySelector(".cash").innerHTML = shopCashFix;
                document.querySelector(".main3").innerHTML = "";
        
               
              document.querySelector(".employeeCurrentOrder" +currentEmp).innerHTML="Current Order: none";
document.querySelector(".employeeCurrentOrderWork"+currentEmp).innerHTML ="No work";

document.querySelector(".employeeBarChild" +currentEmp).style.width = 0 + "%";



              innerHTML ="No work";

                massSpeed[currentEmp] = 0 ;
                clearInterval(squuz);
                mauritus[currentEmp] =true;
                // document.querySelector(".employeeBarMother").remove();
}

    if ( document.querySelector(".employeeWork"+currentEmp).classList.contains("opacity0")===true){

        clearInterval(squuz);
    
     mauritus[currentEmp] =true;

     let seconds = new Date().getTime() / 1000;
     newArreys1[currentEmp].pop();
newArreys1[currentEmp].push(seconds);

       
    }

}}





   }



// if (   look !== diamond[b]){element = pot;

//     console.log(element +"ELEMENTTTEEEEE POTTTTTTTTTTTTT")


// }






    // console.log(document.querySelector(".employeeCurrentOrder" +employeeRandom).innerHTML.replace("Current order: ","") );
    
  
     }
   
    
}

repo(); 




    
    }
    let sniper = 1;

    document.querySelector(".vidgetMother").addEventListener("click", function(event){
       
    for (i = 1 ; i<=employeeAmout ; i++){

sniper = i + 1 ;

if (event.target.matches(".vidget"+i)){
document.querySelector(".employeeWork" +sniper).classList.add("opacity10");
document.querySelector(".employeeWork" +sniper).classList.remove("opacity0");


    }

else {document.querySelector(".employeeWork" +sniper ).classList.add("opacity0");
document.querySelector(".employeeWork" +sniper).classList.remove("opacity10")

}


}
sniper = 0;
    })
let gridNr = 4;
let isurprass = 1
gridMaster();
    //decoration grid
    function gridMaster(){
for (isurprass ; isurprass<=gridNr ; isurprass++){
    newDiv = document.createElement("div");
    newDiv.classList.add("decorationGrid"+ isurprass);
    document.querySelector(".decorationGrid").appendChild(newDiv)
    document.querySelector(".decorationGrid"+ isurprass).classList.add("gridStyle");



}}



document.querySelector(".decobutt").addEventListener("click",function(){

    if(gridNr < 4){
  document.querySelector(".decorationGrid").style.gridTemplateColumns = "33% 33% 34%";}
  else if (gridNr >4){

    document.querySelector(".decorationGrid").style.gridTemplateColumns = "25% 25% 25% 25%";

  }
  gridNr = gridNr *2 ;
  gridMaster();
})


// document.querySelector(".decorationGrid").addEventListener("mouseover", function(event){


//     for (i=1;i<=gridNr; i++)
// if(
// event.target.matches(".decorationGrid" +i)){

// document.querySelector(".decorationGrid"+ i).style.backgroundColor ="red";

// }

// else {document.querySelector(".decorationGrid"+ i).style.backgroundColor ="orange";}

// })

for (i = 1 ; i<=3 ; i++){


newDiv = document.createElement("div");
newDiv.classList.add("borderS");
newDiv.classList.add("decorationCaru"+i);
document.querySelector(".decorationCaru").appendChild(newDiv);

newDiv = document.createElement("div");
newDiv.classList.add("borderS");
newDiv.classList.add("decorationCaruTable"+i);
document.querySelector(".decorationCaruTable").appendChild(newDiv);



newDiv = document.createElement("div");
newDiv.classList.add("borderS");
newDiv.classList.add("decorationStorage"+i);
document.querySelector(".decorationStorage").appendChild(newDiv);

}





let zambimaru;


let decorationStock ={


    nameTable:["Table1", "Table2","Table3","Table4","Table5","Table6","Table7","Table8","Table9","Table10","Table11","Table12","Table13","Table14","Table15","Table16","Table17","Table18","Table19"],

    seatsTable:[0,0,0,1,2,1,1,2,3,2,3,3,4,4,4,5,5,5,7]

    ,priceTable:[10,20,50,70,90,222,400,420,800,1500,3000,5000,4000,9000,25000,76000,135000,220000,500000],
    groupTable:[0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,4]
   
    ,



    name:["lamp1", "lamp2","lamp3","lamp4","lamp5","lamp6","lamp7","lamp8","lamp9","lamp10","lamp11","lamp12","lamp13","lamp14","lamp15","lamp16","lamp17","lamp18","lamp19"],

    electricity:[10,5,9,7,12,22,30,12,33,22,9,12,65,12,80,19,12,3,100],
    brightness:[5,10,19,,22,60,30,32,33,92,19,62,65,102,80,190,210,220,300]
    ,price:[10,20,50,70,90,222,400,420,800,1500,3000,5000,4000,9000,25000,76000,135000,220000,500000],
    group:[0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,4]
   
    ,
    
    decorationValue:{
        decorationPoints:[2,4,-7,12,14,21,-24,22,31,12,31,22,-12,-13,31,35,42,50,41,60,61,-64,87],
    decorationComfort:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30],


    decorationPointsTable:[2,4,-7,12,14,21,-24,22,31,12,31,22,-12,-13,31,35,42,50,41,60,61,-64,87],
    decorationComfortTable:[-8,-10,-2,5,7,11,15,20,25,19,5,35,42,55,70,95,101,150,304],

       decorationScore:{
           
        positive:[],
        negative:[],



       },
    
       decorationResult: function() {

for (i = 1 ; i <=this.decorationPoints.length; i++){
  

  if(  this.decorationPoints[i] > 0){

this.decorationScore.positive.push(this.decorationPoints[i])

  }
  else{
    this.decorationScore.negative.push(this.decorationPoints[i]) 
}


}

    
    

        return   [this.decorationScore.positive,  this.decorationScore.negative]
      }
    
    
    
    }
    
    }

    let intersection ;
    let intresting =["ok",decorationStock.name, decorationStock.nameTable];
    let caru = ["ok","decorationCaru","decorationCaruTable"]
    let comf = ["ok",decorationStock.decorationValue.decorationComfort, decorationStock.decorationValue.decorationComfortTable]
    let points = ["ok", decorationStock.decorationValue.decorationPoints,decorationStock.decorationValue.decorationPointsTable]
    let elec =["ok",decorationStock.electricity,"N/A"]
    let seats =["ok", "N/A",decorationStock.seatsTable]
    let bright =["ok",decorationStock.brightness,"N/A"]
    let gru =["ok", decorationStock.group,decorationStock.groupTable]
    let pric =["ok", decorationStock.price,decorationStock.priceTable]
    let exarr =["ok",".extra-arrow2", ".extra-arrow2-table"]
let ix ;
if (
 intersection = decorationStock.decorationValue.decorationPoints.filter(element => decorationStock.decorationValue.decorationScore.negative.includes(element))
){
}

for (i=1 ; i <= 3;i++){

    //creating name of the item in decocaru 
for (ix = 1 ; ix<3;ix++){

//    console.log(intresting[ix][i]);
//    console.log(caru[ix]+[i]+"caru");

    newDiv = document.createElement("div");
    newDiv.classList.add(intresting[ix][i]);
    document.querySelector("."+caru[ix] + i).appendChild(newDiv);
    document.querySelector("."+intresting[ix][i]).innerHTML =intresting[ix][i];




//crating comfort feture
//lamp




//   console.log(comf[ix][i]+"comf");
 
     newDiv = document.createElement("div");
     newDiv.classList.add(intresting[ix][i]+"comfort");
     document.querySelector("."+caru[ix] + i).appendChild(newDiv);
     document.querySelector("."+intresting[ix][i]+"comfort").innerHTML = "Comfort points "+comf[ix][i];



//style 

//lamp


newDiv = document.createElement("div");
newDiv.classList.add(intresting[ix][i]+"style");
document.querySelector("."+caru[ix] + i).appendChild(newDiv);
document.querySelector("."+intresting[ix][i]+"style").innerHTML = "Style "+points[ix][i];



//electricity


if (elec[ix]!=="N/A"){
newDiv = document.createElement("div");
newDiv.classList.add(intresting[ix][i] +"electricity");
document.querySelector("."+caru[ix] + i).appendChild(newDiv);
document.querySelector("."+intresting[ix][i] +"electricity").innerHTML = "Power consumption: "+elec[ix][i];}



//seats feture
//table


if (seats[ix]!=="N/A"){
    newDiv = document.createElement("div");
    newDiv.classList.add(intresting[ix][i] +"seats");
    document.querySelector("."+caru[ix] + i).appendChild(newDiv);
    document.querySelector("."+intresting[ix][i] +"seats").innerHTML =  "Number of seats: "+seats[ix][i];}

}


if (i === 1){
    newDiv = document.createElement("div");
    newDiv.classList.add("arrow");
    newDiv.classList.add("left");
    newDiv.classList.add("extra-arrow");
  
    document.querySelector(".decorationCaru1").appendChild(newDiv);


    newDiv = document.createElement("div");
    newDiv.classList.add("arrow");
    newDiv.classList.add("left");
    newDiv.classList.add("extra-arrow-table");
  
    document.querySelector(".decorationCaruTable1").appendChild(newDiv);


}

if (i === 3){
    newDiv = document.createElement("div");
    newDiv.classList.add("arrow");
    newDiv.classList.add("right");
    newDiv.classList.add("extra-arrow2");
    document.querySelector(".decorationCaru3").appendChild(newDiv);


    newDiv = document.createElement("div");
    newDiv.classList.add("arrow");
    newDiv.classList.add("right");
    newDiv.classList.add("extra-arrow2-table");
    document.querySelector(".decorationCaruTable3").appendChild(newDiv);


}

//brightness feture 

//lamp
for (ix = 1 ; ix<3;ix++){

if (bright[ix]!=="N/A"){
    newDiv = document.createElement("div");
    newDiv.classList.add(intresting[ix][i] +"brightness");
    document.querySelector("."+caru[ix] + i).appendChild(newDiv);
    document.querySelector("."+intresting[ix][i] +"brightness").innerHTML =  "Brightness: "+bright[ix][i];}





//group feture

//lamp


if (gru[ix]!=="N/A"){
    newDiv = document.createElement("div");
    newDiv.classList.add(intresting[ix][i] +"group");
    document.querySelector("."+caru[ix] + i).appendChild(newDiv);
    document.querySelector("."+intresting[ix][i] +"group").innerHTML = "Group bonus: "+gru[ix][i];}






//cash feture - button colors /buying 

//lamp

newDiv = document.createElement("button");
newDiv.classList.add(intresting[ix][i] +"price");
document.querySelector("."+caru[ix] + i).appendChild(newDiv);
document.querySelector("."+intresting[ix][i] +"price").innerHTML = "Price: "+pric[ix][i] +"$";

if (pric[ix][i] <= cash){
    document.querySelector("."+intresting[ix][i] +"price").classList.add("green");
    document.querySelector("."+intresting[ix][i] +"price").classList.remove("smallred")
}
else {document.querySelector("."+intresting[ix][i] +"price").classList.add("smallred");
document.querySelector("."+intresting[ix][i] +"price").classList.remove("green");
}
}







}
let currentCaru = [0,0,0,0] ;


document.addEventListener("click", function(event){
// console.log(event.target.classList[1]);
if (event.target.classList[2] === "extra-arrow2"||event.target.classList[2] === "extra-arrow2-table"
){

    if (event.target.classList[2] === "extra-arrow2"){

        ix =1;
       
    }

    if (event.target.classList[2] === "extra-arrow2-table"){

        ix =2;
  
    }

 




if ( currentCaru[ix] <intresting[ix].length -5 )
   { currentCaru[ix] = currentCaru[ix] +1} ;
 if (currentCaru[ix] === 0){

    for (i=1 ; i <= 3;i++){
   
        document.querySelector("."+intresting[ix][i]).innerHTML =intresting[ix][i];
    
   
    
    }
 } 


 else if (intresting[ix].length -4 &&currentCaru[ix] > 0 ){
    for (i=currentCaru[ix] +3 ; i <= currentCaru[ix]+ 5;i++){

        document.querySelector("."+intresting[ix][i-3]).classList.replace(intresting[ix][i-3], intresting[ix][i])
        document.querySelector("."+intresting[ix][i]).innerHTML =intresting[ix][i];
     
        document.querySelector("."+intresting[ix][i-3] +"comfort").classList.replace(intresting[ix][i-3]+"comfort", intresting[ix][i]+"comfort")
        document.querySelector("."+intresting[ix][i]+"comfort").innerHTML ="Comfort points: "+comf[ix][i];
   
        document.querySelector("."+intresting[ix][i-3] +"style").classList.replace(intresting[ix][i-3]+"style", intresting[ix][i]+"style")
        document.querySelector("."+intresting[ix][i]+"style").innerHTML ="Style: "+points[ix][i];
        if (elec[ix]!=="N/A"){
        document.querySelector("."+intresting[ix][i-3] +"electricity").classList.replace(intresting[ix][i-3]+"electricity", intresting[ix][i]+"electricity")
        document.querySelector("."+intresting[ix][i]+"electricity").innerHTML ="Power consumption: "+elec[ix][i];}
        if (bright[ix]!=="N/A"){
        document.querySelector("."+intresting[ix][i-3] +"brightness").classList.replace(intresting[ix][i-3]+"brightness", intresting[ix][i]+"brightness")
        document.querySelector("."+intresting[ix][i]+"brightness").innerHTML ="Brightness: "+bright[ix][i];}
   
        document.querySelector("."+intresting[ix][i-3] +"group").classList.replace(intresting[ix][i-3]+"group", intresting[ix][i]+"group")
        document.querySelector("."+intresting[ix][i]+"group").innerHTML ="Group bonus: "+gru[ix][i];

        if (seats[ix]!=="N/A"){
        document.querySelector("."+intresting[ix][i-3] +"seats").classList.replace(intresting[ix][i-3]+"seats", intresting[ix][i]+"seats")
        document.querySelector("."+intresting[ix][i]+"seats").innerHTML ="Number of seats: "+seats[ix][i];}

   
        document.querySelector("."+intresting[ix][i-3] +"price").classList.replace(intresting[ix][i-3]+"price", intresting[ix][i]+"price")
        document.querySelector("."+intresting[ix][i]+"price").innerHTML ="Price: "+pric[ix][i]+"$";
   
        if (pric[ix][i] <= cash){
            document.querySelector("."+intresting[ix][i] +"price").classList.add("green");
            document.querySelector("."+intresting[ix][i] +"price").classList.remove("smallred")
        }
        else {document.querySelector("."+intresting[ix][i] +"price").classList.add("smallred");
        document.querySelector("."+intresting[ix][i] +"price").classList.remove("green");
        }
    
    }

    if ( currentCaru[ix] <intresting[ix].length -5 ){
currentCaru[ix] = currentCaru[ix] +2 };
 }
}

// }
// DECO CARU PREVIUS


if(event.target.classList[2] === "extra-arrow"||event.target.classList[2] === "extra-arrow-table"){




if (event.target.classList[2] === "extra-arrow"){

    ix =1;
   
}

if (event.target.classList[2] === "extra-arrow-table"){

    ix =2;

}


    currentCaru[ix] = currentCaru[ix] -1 ;
 if (currentCaru[ix] === 0){

    for (i=1 ; i <= 3;i++){
   
        document.querySelector("."+intresting[ix][i]).innerHTML =intresting[ix][i];
    
   
    
    }
 } 


 else if (currentCaru[ix] > 0){
    for (i=currentCaru[ix]  ; i <= currentCaru[ix] +2;i++){
   
     
        document.querySelector("."+intresting[ix][i+2]).classList.replace(intresting[ix][i+2], intresting[ix][i-1])
        document.querySelector("."+intresting[ix][i-1]).innerHTML =intresting[ix][i-1];
    
        document.querySelector("."+intresting[ix][i+2] +"comfort").classList.replace(intresting[ix][i+2] +"comfort", intresting[ix][i-1] +"comfort")
        document.querySelector("."+intresting[ix][i-1] +"comfort").innerHTML ="Comfort points: "+comf[ix][i-1];
    
        document.querySelector("."+intresting[ix][i+2] +"style").classList.replace(intresting[ix][i+2] +"style", intresting[ix][i-1] +"style")
        document.querySelector("."+intresting[ix][i-1] +"style").innerHTML ="Style: "+points[ix][i-1];
        if (elec[ix]!=="N/A"){
        document.querySelector("."+intresting[ix][i+2] +"electricity").classList.replace(intresting[ix][i+2] +"electricity", intresting[ix][i-1] +"electricity")
        document.querySelector("."+intresting[ix][i-1] +"electricity").innerHTML ="Power consumption: "+elec[ix][i-1];}
    
        if (bright[ix]!=="N/A"){
        document.querySelector("."+intresting[ix][i+2] +"brightness").classList.replace(intresting[ix][i+2] +"brightness", intresting[ix][i-1] +"brightness")
        document.querySelector("."+intresting[ix][i-1] +"brightness").innerHTML ="Brightness: "+bright[ix][i-1];};

        if (seats[ix]!=="N/A"){
        document.querySelector("."+intresting[ix][i+2] +"seats").classList.replace(intresting[ix][i+2] +"seats", intresting[ix][i-1] +"seats")
        document.querySelector("."+intresting[ix][i-1] +"seats").innerHTML ="Number of seats: "+seats[ix][i-1];};



        document.querySelector("."+intresting[ix][i+2] +"group").classList.replace(intresting[ix][i+2] +"group", intresting[ix][i-1] +"group")
        document.querySelector("."+intresting[ix][i-1] +"group").innerHTML ="Group points: "+gru[ix][i-1];

        document.querySelector("."+intresting[ix][i+2] +"price").classList.replace(intresting[ix][i+2] +"price", intresting[ix][i-1] +"price")
        document.querySelector("."+intresting[ix][i-1] +"price").innerHTML ="Price: "+pric[ix][i-1]+"$";
    
        if (pric[ix][i] <= cash){
            document.querySelector("."+intresting[ix][i-1] +"price").classList.add("green");
            document.querySelector("."+intresting[ix][i-1] +"price").classList.remove("smallred")
        }
        else {document.querySelector("."+intresting[ix][i-1] +"price").classList.add("smallred");
        document.querySelector("."+intresting[ix][i-1] +"price").classList.remove("green");
        }
   
   
    
    }
currentCaru[ix] = currentCaru[ix] -2 ;
 }




}})



document.addEventListener("click", function(event){
    for (i=1; i <=19 ;i++){
        ix = 1 ; 
      
      if ( document.querySelector("."+event.target.parentNode.classList[1]).parentNode.classList[0] === "decorationCaru"){
      
      ix = 1 ;
      
      } 
      
      else if (document.querySelector("."+event.target.parentNode.classList[1]).parentNode.classList[0] === "decorationCaruTable")
      
      {ix = 2 ;}
          if (event.target.classList[0] === intresting[ix][i-1]+"price" )
         
   


    { cash = cash - pric[ix][i];


   



        shopCashFix = cash + "$";
document.querySelector(".cash").innerHTML = shopCashFix;



if (document.querySelector(".decorationStorage1").innerHTML===""){




    newDiv = document.createElement("div");
    newDiv.classList.add(intresting[ix][i-1]+"S");
    document.querySelector(".decorationStorage1").appendChild(newDiv);
    document.querySelector("."+intresting[ix][i-1]+"S").innerHTML =intresting[ix][i-1];


newDiv = document.createElement("img");
newDiv.src ="img/ceiling-lamp.png";
newDiv.width=  34;
document.querySelector(".decorationStorage1").appendChild(newDiv);
newDiv.classList.add(intresting[ix][i-1]+"Simg");



 

    document.querySelector("."+intresting[ix][i-1]+"Simg").setAttribute('draggable', true);
    document.querySelector("."+intresting[ix][i-1]+"Simg").id = "ok"+i;
    

    document.querySelector("."+intresting[ix][i-1]+"Simg").addEventListener("dragstart" , function drag(event){

        // console.log(event.target.className);
        event.dataTransfer.setData("text", event.target.id);

    });

newDiv = document.createElement("div");
newDiv.classList.add(intresting[ix][i-1] +"comfortS");
document.querySelector(".decorationStorage1").appendChild(newDiv);
document.querySelector("."+intresting[ix][i-1] +"comfortS").innerHTML = "Comfort points "+comf[ix][i-1];

newDiv = document.createElement("div");
newDiv.classList.add(intresting[ix][i-1] +"styleS");
document.querySelector(".decorationStorage1").appendChild(newDiv);
document.querySelector("."+intresting[ix][i-1] +"styleS").innerHTML = "Style "+points[ix][i-1];

if (elec[ix] !== "N/A"){
newDiv = document.createElement("div");
newDiv.classList.add(intresting[ix][i-1] +"electricityS");
document.querySelector(".decorationStorage1").appendChild(newDiv);
document.querySelector("."+intresting[ix][i-1] +"electricityS").innerHTML = "Power consumption: "+elec[ix][i-1];}
if (bright[ix] !== "N/A"){
newDiv = document.createElement("div");
newDiv.classList.add(intresting[ix][i-1] +"brightnessS");
document.querySelector(".decorationStorage1").appendChild(newDiv);
document.querySelector("."+intresting[ix][i-1] +"brightnessS").innerHTML = "Brightness: "+bright[ix][i-1];}


if (seats[ix] !== "N/A"){
    newDiv = document.createElement("div");
    newDiv.classList.add(intresting[ix][i-1] +"seatsS");
    document.querySelector(".decorationStorage1").appendChild(newDiv);
    document.querySelector("."+intresting[ix][i-1] +"seatsS").innerHTML = "Brightness: "+seats[ix][i-1];}
    


newDiv = document.createElement("div");
newDiv.classList.add(intresting[ix][i-1] +"groupS");
document.querySelector(".decorationStorage1").appendChild(newDiv);
document.querySelector("."+intresting[ix][i-1] +"groupS").innerHTML = "Group bonus: "+gru[ix][i-1];



storage.name.push(intresting[ix][i-1]+"S")
// storage.number.push(1);

newDiv = document.createElement("div");

newDiv.classList.add(intresting[ix][i-1] +"Storage");
document.querySelector(".decorationStorage1").appendChild(newDiv);
document.querySelector("."+intresting[ix][i-1] +"Storage").innerHTML = "In storage: " +storage.number[0];

}



else if (document.querySelector(".decorationStorage1").innerHTML.includes(intresting[ix][i-1]+"S")){
    storage.number[0] = storage.number[0] +1;
  
    document.querySelector("."+intresting[ix][i-1] +"Storage").innerHTML = "In storage: " +storage.number[0];
    
    }

else if (document.querySelector(".decorationStorage2").innerHTML===""){



    newDiv = document.createElement("div");
    newDiv.classList.add(intresting[ix][i-1]+"S");
    document.querySelector(".decorationStorage2").appendChild(newDiv);

    
    document.querySelector("."+intresting[ix][i-1]+"S").innerHTML =intresting[ix][i-1];

    newDiv = document.createElement("img");
    newDiv.src ="img/ceiling-lamp.png";
    newDiv.width=  34;
    document.querySelector(".decorationStorage2").appendChild(newDiv);
    newDiv.classList.add(intresting[ix][i-1]+"Simg");
    
    
    
     
    
        document.querySelector("."+intresting[ix][i-1]+"Simg").setAttribute('draggable', true);
        document.querySelector("."+intresting[ix][i-1]+"Simg").id = "ok"+i;
        
    
        document.querySelector("."+intresting[ix][i-1]+"Simg").addEventListener("dragstart" , function drag(event){
    
           

            event.dataTransfer.setData("text", event.target.id);
    
        });
newDiv = document.createElement("div");
newDiv.classList.add(intresting[ix][i-1] +"comfortS");
document.querySelector(".decorationStorage2").appendChild(newDiv);
document.querySelector("."+intresting[ix][i-1] +"comfortS").innerHTML = "Comfort points "+comf[ix][i-1];

newDiv = document.createElement("div");
newDiv.classList.add(intresting[ix][i-1] +"styleS");
document.querySelector(".decorationStorage2").appendChild(newDiv);
document.querySelector("."+intresting[ix][i-1] +"styleS").innerHTML = "Style "+points[ix][i-1];
if(elec[ix] !== "N/A"){

newDiv = document.createElement("div");
newDiv.classList.add(intresting[ix][i-1] +"electricityS");
document.querySelector(".decorationStorage2").appendChild(newDiv);
document.querySelector("."+intresting[ix][i-1] +"electricityS").innerHTML = "Power consumption: "+elec[ix][i-1];
}


if (bright[ix] !== "N/A"){
newDiv = document.createElement("div");
newDiv.classList.add(intresting[ix][i-1] +"brightnessS");
document.querySelector(".decorationStorage2").appendChild(newDiv);
document.querySelector("."+intresting[ix][i-1] +"brightnessS").innerHTML = "Brightness: "+bright[ix][i-1];}



if (seats[ix] !== "N/A"){
    newDiv = document.createElement("div");
    newDiv.classList.add(intresting[ix][i-1] +"seatsS");
    document.querySelector(".decorationStorage2").appendChild(newDiv);
    document.querySelector("."+intresting[ix][i-1] +"seatsS").innerHTML = "nr of seats: "+seats[ix][i-1];}


newDiv = document.createElement("div");
newDiv.classList.add(intresting[ix][i-1] +"groupS");
document.querySelector(".decorationStorage2").appendChild(newDiv);
document.querySelector("."+intresting[ix][i-1] +"groupS").innerHTML = "Group bonus: "+gru[ix][i-1];



storage.name.push(intresting[ix][i-1]+"S")
// storage.number.push(1);

newDiv = document.createElement("div");

newDiv.classList.add(intresting[ix][i-1] +"Storage");
document.querySelector(".decorationStorage2").appendChild(newDiv);
document.querySelector("."+intresting[ix][i-1] +"Storage").innerHTML = "In storage: " +storage.number[1];

}

else if (document.querySelector(".decorationStorage2").innerHTML.includes(intresting[ix][i-1]+"S")){
    storage.number[1] = storage.number[1] +1;
  
    document.querySelector("."+intresting[ix][i-1] +"Storage").innerHTML = "In storage: " +storage.number[1];
    
    }



    else if (document.querySelector(".decorationStorage3").innerHTML===""){



        newDiv = document.createElement("div");
        newDiv.classList.add(intresting[ix][i-1]+"S");
        document.querySelector(".decorationStorage3").appendChild(newDiv);
        document.querySelector("."+intresting[ix][i-1]+"S").innerHTML =intresting[ix][i-1];
    
newDiv = document.createElement("img");
newDiv.src ="img/ceiling-lamp.png";
newDiv.width=  34;
document.querySelector(".decorationStorage3").appendChild(newDiv);
newDiv.classList.add(intresting[ix][i-1]+"Simg");



 

    document.querySelector("."+intresting[ix][i-1]+"Simg").setAttribute('draggable', true);
    document.querySelector("."+intresting[ix][i-1]+"Simg").id = "ok"+i;
    

    document.querySelector("."+intresting[ix][i-1]+"Simg").addEventListener("dragstart" , function drag(event){

    
        event.dataTransfer.setData("text", event.target.id);

    });
    newDiv = document.createElement("div");
    newDiv.classList.add(intresting[ix][i-1] +"comfortS");
    document.querySelector(".decorationStorage3").appendChild(newDiv);
    document.querySelector("."+intresting[ix][i-1] +"comfortS").innerHTML = "Comfort points "+comf[ix][i-1];
    
    newDiv = document.createElement("div");
    newDiv.classList.add(intresting[ix][i-1] +"styleS");
    document.querySelector(".decorationStorage3").appendChild(newDiv);
    document.querySelector("."+intresting[ix][i-1] +"styleS").innerHTML = "Style "+points[ix][i-1];
    

    if (elec[ix] !== "N/A"){
    newDiv = document.createElement("div");
    newDiv.classList.add(intresting[ix][i-1] +"electricityS");
    document.querySelector(".decorationStorage3").appendChild(newDiv);
    document.querySelector("."+intresting[ix][i-1] +"electricityS").innerHTML = "Power consumption: "+elec[ix][i-1];}
    

    if(bright[ix] !== "N/A"){
    newDiv = document.createElement("div");
    newDiv.classList.add(intresting[ix][i-1] +"brightnessS");
    document.querySelector(".decorationStorage3").appendChild(newDiv);
    document.querySelector("."+intresting[ix][i-1] +"brightnessS").innerHTML = "Brightness: "+bright[ix][i-1];}


    if(seats[ix] !== "N/A"){
        newDiv = document.createElement("div");
        newDiv.classList.add(intresting[ix][i-1] +"seatsS");
        document.querySelector(".decorationStorage3").appendChild(newDiv);
        document.querySelector("."+intresting[ix][i-1] +"seatsS").innerHTML = "Number of seats: "+seats[ix][i-1];}

    
    newDiv = document.createElement("div");
    newDiv.classList.add(intresting[ix][i-1] +"groupS");
    document.querySelector(".decorationStorage3").appendChild(newDiv);
    document.querySelector("."+intresting[ix][i-1] +"groupS").innerHTML = "Group bonus: "+gru[ix][i-1];
    
    
    
    storage.name.push(intresting[ix][i-1]+"S")
    // storage.number.push(1);
    
    newDiv = document.createElement("div");
    
    newDiv.classList.add(intresting[ix][i-1] +"Storage");
    document.querySelector(".decorationStorage3").appendChild(newDiv);
    document.querySelector("."+intresting[ix][i-1] +"Storage").innerHTML = "In storage: " +storage.number[2];


    }
    
    else if (document.querySelector(".decorationStorage3").innerHTML.includes(intresting[ix][i-1]+"S")){
        storage.number[2] = storage.number[2] +1;
   
        document.querySelector("."+intresting[ix][i-1] +"Storage").innerHTML = "In storage: " +storage.number[2];
        



        }






else if (document.querySelector(".decorationStorage" +decoMad[i-1]+intresting[ix][i-1])===null){


   

    decoMad[i-1] = i;
    newDiv = document.createElement("div");
    newDiv.classList.add("borderS");
    newDiv.classList.add("decorationStorage"+decoMad[i-1]+intresting[ix][i-1]);
    document.querySelector(".decorationStorage").appendChild(newDiv);








    if (storage.name.length < 8){
quick = parseInt(storage.name.length)+1 ;}
else if (storage.name.length >= 8){

    quick = parseInt(storage.name.length)-4 ;

}

        document.querySelector(".decorationStorage").style.setProperty('grid-template-columns', 'repeat(' + quick + ', 1fr)');
    if (storage.name.length === 8)
    
    
    {document.querySelector(".decorationStorage").style.setProperty('grid-template-rows', 'repeat(' + storage.name.length/4 + ', 1fr)')}
    



(parseInt(event.target.className[4]));








newDiv = document.createElement("div");
newDiv.classList.add(intresting[ix][i-1]+"S");
document.querySelector(".decorationStorage"+ decoMad[i-1]+intresting[ix][i-1]).appendChild(newDiv);
document.querySelector("."+intresting[ix][i-1]+"S").innerHTML =intresting[ix][i-1];
document.querySelector("."+intresting[ix][i-1]+"S").setAttribute('draggable', true);
newDiv = document.createElement("div");
newDiv.classList.add(intresting[ix][i-1] +"comfortS");
document.querySelector(".decorationStorage"+ decoMad[i-1]+intresting[ix][i-1]).appendChild(newDiv);
document.querySelector("."+intresting[ix][i-1] +"comfortS").innerHTML = "Comfort points "+comf[ix][i-1];

newDiv = document.createElement("div");
newDiv.classList.add(intresting[ix][i-1] +"styleS");
document.querySelector(".decorationStorage"+ decoMad[i-1]+intresting[ix][i-1]).appendChild(newDiv);
document.querySelector("."+intresting[ix][i-1] +"styleS").innerHTML = "Style "+points[ix][i-1];


if(elec[ix] !== "N/A"){
newDiv = document.createElement("div");
newDiv.classList.add(intresting[ix][i-1] +"electricityS");
document.querySelector(".decorationStorage"+ decoMad[i-1]+intresting[ix][i-1]).appendChild(newDiv);
document.querySelector("."+intresting[ix][i-1] +"electricityS").innerHTML = "Power consumption: "+elec[ix][i-1];}


if(bright[ix] !== "N/A"){
newDiv = document.createElement("div");
newDiv.classList.add(intresting[ix][i-1] +"brightnessS");
document.querySelector(".decorationStorage"+ decoMad[i-1]+intresting[ix][i-1]).appendChild(newDiv);
document.querySelector("."+intresting[ix][i-1] +"brightnessS").innerHTML = "Brightness: "+bright[ix][i-1];}



if(seats[ix] !== "N/A"){
    newDiv = document.createElement("div");
    newDiv.classList.add(intresting[ix][i-1] +"seatsS");
    document.querySelector(".decorationStorage"+ decoMad[i-1]+intresting[ix][i-1]).appendChild(newDiv);
    document.querySelector("."+intresting[ix][i-1] +"seatsS").innerHTML = "Number of seats : "+seats[ix][i-1];}

newDiv = document.createElement("div");
newDiv.classList.add(intresting[ix][i-1] +"groupS");
document.querySelector(".decorationStorage"+ decoMad[i-1]+intresting[ix][i-1]).appendChild(newDiv);
document.querySelector("."+intresting[ix][i-1] +"groupS").innerHTML = "Group bonus: "+gru[ix][i-1];



storage.name.push(intresting[ix][i-1]+"S")
// storage.number.push(1);


newDiv = document.createElement("div");

newDiv.classList.add(intresting[ix][i-1] +"Storage");
document.querySelector(".decorationStorage"+ decoMad[i-1]+intresting[ix][i-1]).appendChild(newDiv);
document.querySelector("."+intresting[ix][i-1] +"Storage").innerHTML = "In storage: " +storage.number[i-1];





newDiv = document.createElement("img");
newDiv.src ="img/ceiling-lamp.png";
newDiv.width=  34;
document.querySelector(".decorationStorage"+decoMad[i-1]+intresting[ix][i-1]).appendChild(newDiv);
newDiv.classList.add(intresting[ix][i-1]+"Simg");



 

    document.querySelector("."+intresting[ix][i-1]+"Simg").setAttribute('draggable', true);
    document.querySelector("."+intresting[ix][i-1]+"Simg").id = "ok"+i;
    

    document.querySelector("."+intresting[ix][i-1]+"Simg").addEventListener("dragstart" , function drag(event){

        event.dataTransfer.setData("text", event.target.id);

    });


// decoMad[i] = i;


// newDiv = document.createElement("div");
// newDiv.classList.add("borderS");
// newDiv.classList.add("decorationStorage"+decoMad[i]);
// document.querySelector(".decorationStorage").appendChild(newDiv);
// console.log(i+"to jest max number");


//     document.querySelector(".decorationStorage").style.setProperty('grid-template-columns', 'repeat(' + i + ', 1fr)');
    // if (i === 8)
    
    
    // {document.querySelector(".decorationStorage").style.setProperty('grid-template-rows', 'repeat(' + i + ', 1fr)')}}


}
else if (document.querySelector(".decorationStorage"+ decoMad[i-1]+intresting[ix][i-1]).innerHTML.includes(intresting[ix][i-1]+"S")){

storage.number[i-1] = storage.number[i-1] +1;

document.querySelector("."+intresting[ix][i-1] +"Storage").innerHTML = "In storage: " +storage.number[i-1];






}





    }

    

}})













// function drag(event) {
//     console.log(event.target.id);
//     event.dataTransfer.setData("text", event.target.id);
//   }



  function drop(ev) {
    ev.preventDefault();


    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data).cloneNode(true));
    // console.log(ev.target.classList[0]);
   document.querySelector("."+ ev.target.classList[0]).style.backgroundColor = "red";
  }


  function allowDrop(ev) {
    ev.preventDefault();
  }
  






