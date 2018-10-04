//FIRST EXERCISE

var a = [1,1,3,5];
var b = [1,2,3,4];

for(var j = 0; j < b.length; j++){
    for(var i = 0; i < a.length; i++){
        if(b[j] <= a[i]){
            a.splice(a.indexOf(a[i]),0, b[j] );
            break;
        }
    }
}
console.log(a);

            

//SECOND EXERCISE

class generateCode {
    constructor(noOfPins){
        this.numberOfPins = noOfPins;
        this.pins = [];
        for(var i = 0; i < this.numberOfPins; i++){
            this.generate();
            this.checkIncremental();
            this.checkConsecutiveDigits();
            this.checkUnique();
            this.pins.push(this.newCode);
        }
        return this.pins;
    }
    generate() {
        this.newCode = Math.floor(1000 + Math.random() * 9000);
    }
    checkIncremental(){
        var codeString = this.newCode.toString().split('');
        for(var i = 0 ; i < 3; i++ ){
            var actualNextNum = parseInt(codeString[i+1]);
            var actualNextNextNum = parseInt(codeString[i+2]);
            var expectedNextNum = parseInt(codeString[i])+1;
            var expectedNextNextNum = parseInt(codeString[i+1])+1;
            if(actualNextNum == expectedNextNum && actualNextNextNum == expectedNextNextNum ) {
                //console.warn(this.newCode + ": INCREMENTAL PASSCODE! REGEN PASSCODE");
                this.generate();
                this.checkIncremental();
            }
        }
    }
    checkConsecutiveDigits(){
        var codeString = this.newCode.toString().split('');
        for(var i = 0 ; i < 3; i++ ){
            var actualNextNum = parseInt(codeString[i]);
            var actualNextNextNum = parseInt(codeString[i+1]);
            if(actualNextNum == actualNextNextNum ) {
                //console.warn(this.newCode + ": CONSECUTIVE PASSCODE! REGEN PASSCODE");
                this.generate();
                this.checkConsecutiveDigits();
            }
        }
    }
    checkUnique(){
        for(var i = 0; i < this.pins.length; i++){
            if(this.newCode == this.pins[i]){
                //console.warn(this.newCode + ": DUPLICATE PASSCODE! REGEN PASSCODE");
                this.generate();
                this.checkUnique();
            }
        }
    }
}

var passcode = new generateCode(1000);
