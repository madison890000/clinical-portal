import { capitalize } from '../index';

describe('utils -----> capitalize ', () => {
    test('capitalize: make first letter to be uppercase', () => {
        expect(capitalize('test'))
            .toBe('Test');
        expect(capitalize())
            .toBe('');
        expect(capitalize('abcs'))
            .toBe('Abcs');
        expect(capitalize('abcs def'))
            .toBe('Abcs def');
    });
});
