import { myDate } from '@/helpers/my-date.js'


suite('myDate', () => {
    it('should return null when passed falsy value', () => {
        const input = myDate('');
        const output = null;
        assert.equal(input, output);

    });

    it('should return proper date when pass UTC Date string', () => {
        const input = myDate('Sun Oct 21 2018 02:42:23 GMT+0200 (Central European Summer Time')
        const output = /2019/;
        assert.match(input, output)
    });
});