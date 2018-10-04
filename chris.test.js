const codeGenerator = require('./chris');

var generator = new codeGenerator();

test('passcode does not consist incremental numbers', ()=>{
    let invalidCode = ["abc5","0234","4561"];
    let validCode = ["1423","4651","1356"];
    for (var i = 0;  i < invalidCode.length-1; i++) {
        expect(generator.isIncremental(invalidCode[i])).toBeTruthy();
    }
    for (var i = 0;  i < validCode.length-1; i++) {
        expect(generator.isIncremental(validCode[i])).toBeFalsy();
    }
})

test('passcode does not consist consecutive digits' , ()=>{
    let invalidCode = ["0042","1001","1000","0001", "aa02", "0bb0", "c0cc"];
    let validCode = ["1356","1251","6235","7824"];
    for (var i = 0;  i < invalidCode.length-1; i++) {
        expect(generator.isConsecutiveDigits(invalidCode[i])).toBeTruthy();
    }
    for (var i = 0;  i < validCode.length-1; i++) {
        expect(generator.isConsecutiveDigits(validCode[i])).toBeFalsy();
    }
})

test('passcode is generating 1000 codes', ()=>{
    const numberOfPins = 1000;
    let generator = new codeGenerator(numberOfPins);
    expect(generator.codelist.size == 1000).toBeTruthy();
})
