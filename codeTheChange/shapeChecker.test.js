import {shapeChecker} from './shapeChecker.js';

test('check shape', () => {
    expect(shapeChecker([1, 8, 6])).toBe(false);
    expect(shapeChecker([1, 8, 6, 9, 4])).toBe(true);

});