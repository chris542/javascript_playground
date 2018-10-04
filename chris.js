//FIRST EXERCISE

var a = [1,1,3,5];
var b = [1,2,3,4];

var fullLength = a.length + b.length;
var aIndex = 0;
var bIndex = 0;
var mergedArray = [];

for(var i = 0; i < fullLength; i++){
    if(a[aIndex] < b[bIndex]){
        //A is smaller push A
        mergedArray.push(a[aIndex]);
        aIndex++;
    } else if(a[aIndex] > b[bIndex]){
        //B is smaller push B
        mergedArray.push(b[bIndex]);
        bIndex++;
    } else if (a[aIndex] == b[bIndex]){
        //A and B are same. Push both
        mergedArray.push(a[aIndex]);
        mergedArray.push(b[bIndex]);
        i++;
        aIndex++;
        bIndex++;
    } else {
        if(a[aIndex] == null){
            //A has ended. Push left over of B
            var chunk = b.slice(bIndex,b.length);
            mergedArray = mergedArray.concat(chunk);
            i+= chunk.length;
            bIndex += chunk.length;
        } else if(b[bIndex] == null){
            //B has ended. Push left over of A
            var chunk = a.slice(aIndex, a.length);
            mergedArray = mergedArray.concat(chunk);
            i+= chunk.length;
            aIndex += chunk.length;
        } 
    }
}
console.log(mergedArray);
            

//SECOND EXERCISE

class generateCode {
    constructor(numberOfPins){
        var pinlist = new Set([]);
        
        while (pinlist.size < numberOfPins){              //Repeat until we have required number of pins
            var code = this.generate();
            if(!this.isIncremental(code) && !this.isConsecutiveDigits(code) && !pinlist.has(code)){
                pinlist.add(code);
            }
        }
        return pinlist;
    }
    generate() {
        var code = ( Math.floor(Math.random() * 9999) + 1).toString().split("");             //Generate 1 ~ 9999
        if(code.length < 4){                                                                 //Add 0 if x / xx / xxx
            var zeroRequired = 4 - code.length;
            for(var i = 0 ; i < zeroRequired; i++){
                code.unshift("0");
            }
        }
        return code.join('');
    }
    isIncremental(code){
        for(var i = 0 ; i < code.length-2; i++ ){
            if((parseInt(code[i+1]))==(parseInt(code[i])+1) && (parseInt(code[i+2]))==(parseInt(code[i+1])+1)){
                return true;
            } 
        }
        return false;
    }
    isConsecutiveDigits(code){
        for(var i = 0 ; i < code.length-2; i++ ){
            if( parseInt(code[i]) == parseInt(code[i+1]) ){
                return true;
            }
        }
        return false;
    }
}

module.exports = generateCode;
