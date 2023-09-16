var createCounter = function(init) {
    var curVal = init;
     
    function increment(){
        curVal += 1;
        return curVal;
    }
    function decrement(){
        curVal -= 1;
        return curVal;
    }
    function reset(){
        curVal = init;
        return curVal;
    }
    return{ 
        increment, 
        decrement, 
        reset 
    };
};

const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
