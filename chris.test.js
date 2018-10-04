const generateCode = require('./chris');

var passcode = new generateCode(1000);

test('generate 1000 passcodes', ()=> {
    expect(passcode.size).toBe(1000);
})

test('passcode does not consist incremental numbers', ()=>{
    passcode.forEach(code=>{
        for(var i = 0 ; i < code.length-2; i++){
            var isIncremental = ( parseInt(code[i+1]) == parseInt(code[i]+1) ) && (parseInt(code[i+2]) == parseInt(code[i+1]+1));
            expect(isIncremental).toBeFalsy();
        }
    })
})

test('passcode is not consecutive digits' , ()=>{
    passcode.forEach(code=>{
        for(var i = 0 ; i < code.length-2; i++){
            var isConsecutiveDigits = parseInt(code[i]) == parseInt(code[i]+1);
            expect(isConsecutiveDigits).toBeFalsy();
        }
    })
})

test('passcode can not be duplicated', ()=>{
    passcode.forEach(code=>{
        var originalSize = passcode.size
        passcode.add(code);                              //Sets will always have unique values. Cannot add same value
        expect(originalSize).toBe(passcode.size);
    })
})
