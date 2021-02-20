import adderFunctions from './functions.js'



test('binaryLogic', () => {
    expect(adderFunctions.binaryLogic(0,0,0)).toEqual([0,0]);
    expect(adderFunctions.binaryLogic(0,1,0)).toEqual([1,0]);
    expect(adderFunctions.binaryLogic(1,0,0)).toEqual([1,0]);
    expect(adderFunctions.binaryLogic(0,0,1)).toEqual([1,0]);
    expect(adderFunctions.binaryLogic(1,1,0)).toEqual([0,1]);
    expect(adderFunctions.binaryLogic(1,1,1)).toEqual([1,1]);
});

test('binaryOutside', () => {
    expect(adderFunctions.binaryOutside('010','1101')).toEqual("1111");
    expect(adderFunctions.binaryOutside('110110','1101')).toEqual("1000011");
    expect(adderFunctions.binaryOutside('0','1101')).toEqual("1101");
    expect(adderFunctions.binaryOutside('','1101101')).toEqual("1101101");

});