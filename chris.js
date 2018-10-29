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
        this.codelist = this.generate().slice(0,numberOfPins);
    }
    generate() {
        var self = this;
        var codes= []

        var chars = [];
        for (let i = 0; i < 16; i++) 
            chars.push(i);

        (function loop(base, i){
            for(var k=0; k< chars.length; k++) {
                var c = base+chars[k];
                if(i>1) {
                    loop(c+",", i-1); 
                } else { 
                    var code = c.split(',').map((i)=>{return parseInt(i)}) //Convert to integers for test
                    if(!self.isIncremental(code) && !self.isConsecutiveDigits(code)){
                        code = code.map((i)=>{return i.toString(16) }).join(""); //Convert to hex value before inserting to the list
                        codes.push(code); 
                    }
                }
            }
        })("", 4)

        return this.shuffle(codes);
    }
    isIncremental(code){
        for(var i = 0 ; i < code.length-2; i++ ){
            if((code[i] + 1 == code[i+1]) && (code[i+1] + 1 == (code[i+2]))) {
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
    shuffle(arr){
        var ctr = arr.length, temp, index;
        while(ctr > 0 ){
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp= arr[ctr];
            arr[ctr] = arr[index];
            arr[index]=temp;
        }
        return arr;
    }
}

module.exports = codeGenerator;
