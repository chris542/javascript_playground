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

class codeGenerator {
    constructor(numberOfPins = 0){
        this.codelist = new Set([]);
        while (this.codelist.size < numberOfPins){              //Repeat until we have required number of pins
            var code = this.generate();
            if(!this.isIncremental(code) && !this.isConsecutiveDigits(code)){
                this.codelist.add(code);
            }
        }
    }
    generate() {
        var code = "";
        var possible = "abcdef0123456789";

        for (var i = 0; i < 4; i++)
            code += possible.charAt(Math.floor(Math.random() * possible.length));

        return code;
    }
    isIncremental(code){
        for(var i = 0 ; i < code.length-2; i++ ){
            if( (code[i+1] == this.incrementCharacter(code[i])) && (code[i+2] == this.incrementCharacter(code[i+1])) ) {
                return true;
            } 
        }
        return false;
    }
    isConsecutiveDigits(code){
        for(var i = 0 ; i < code.length-1; i++ ){
            if( code[i] == code[i+1] ){
                return true;
            }
        }
        return false;
    }
    incrementCharacter(c){
        return String.fromCharCode(c.charCodeAt(0) + 1 );
    }
}

module.exports = codeGenerator;
