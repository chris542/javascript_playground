const codeGenerator = require('./chris');

var generator = new codeGenerator();

test('passcode does not consist incremental numbers', ()=>{
    let invalidCode = [[1,2,3,5],[0,2,3,4],[4,5,6,13]];
    let validCode = [[1,5,2,6],[12,4,2,6],[15,2,12,4]];
    for (var i = 0;  i < invalidCode.length-1; i++) {
        expect(generator.isIncremental(invalidCode[i])).toBeTruthy();
    }
    for (var i = 0;  i < validCode.length-1; i++) {
        expect(generator.isIncremental(validCode[i])).toBeFalsy();
    }
})

test('passcode does not consist consecutive digits' , ()=>{
    let invalidCode = [[0,0,4,2],[1,2,2,1],[1,0,0,0],[1,1,2,2]];
    let validCode = [[1,3,5,6],[1,2,5,1],[6,3,2,1],[,9,6,12,5]];
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
    console.log(generator.codelist);
    expect(generator.codelist.length == 1000).toBeTruthy();
})
