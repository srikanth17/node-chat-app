let expect = require('expect');
let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        let from = 'Sri';
        let text = 'This is test';
        let res = generateMessage(from, text);

        expect(res).toMatchObject({
            from,
            text
        });
        expect(typeof res.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let from = 'Sri';
        let latitude = 1;
        let longitude = 1;
        let url = 'https://www.google.com/maps?q=1,1';
        let res = generateLocationMessage(from, latitude, longitude);

        expect(res).toMatchObject({
            from,
            url
        });
        expect(typeof res.createdAt).toBe('number');
    });
});