function measurePerformance(){
    start = performance.now();
    exampleFunction();
    end = performance.now();
    time= end - start;
    timeOut= time/1000;
    console.log("Number Time: " + timeOut.toFixed(2) + " second");
}

function exampleFunction() {
    for(i = 0; i <= 500000; i++){
        console.log(i); 
    }
}


function exampleTwoFunction(){
    for(i = 0; i <= 500000; i++){
        console.log("BK");
    }
}

function measureTwoPerformance(){
    start = performance.now();
    exampleTwoFunction();
    end = performance.now();
    timeW= end - start;
    timeOutW= timeW/1000;
    console.log("Letter Time: " + timeOutW.toFixed(3) + " second");
}

measurePerformance();
measureTwoPerformance();
console.log("Number Time: " + timeOut.toFixed(3) + " second");

function Result(){
    if(timeOut > timeOutW){
        console.log("Letter is faster!");
    }
    else{
        console.log("Number is faster!");
    }
}
Result();
