function measurePerformance(){
    start = performance.now();
    exampleFunction();
    end = performance.now();
    time= end - start;
    timeOut= time/1000;
    console.log("time: " + timeOut);
}

function exampleFunction() {
    for(i = 0; i <= 500000; i++){
        console.log(i); 
    }
}

measurePerformance();
