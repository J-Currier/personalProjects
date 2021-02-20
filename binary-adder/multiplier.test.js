import multiplierFunctions from './multiplier.js'

test('binaryMultiplier', () => {
    // expect(multiplierFunctions.binaryOutside('0','0')).toEqual('0');
    // expect(multiplierFunctions.binaryOutside('1', '1')).toEqual('1');
    // expect(multiplierFunctions.binaryOutside('10', '1')).toEqual('10');
    // expect(multiplierFunctions.binaryOutside('10', '0')).toEqual('0');
    expect(multiplierFunctions.binaryOutside('10', '10')).toEqual('100');
    // expect(multiplierFunctions.binaryOutside(1,1,1)).toEqual([1,1]);
});



