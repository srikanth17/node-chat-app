let expect = require('expect');
let {generateMessage} = require('./message');

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