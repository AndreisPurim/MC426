import { dbExample } from './example';

test('db example', () => {
    const res = dbExample();
    expect(typeof res).toBe("object");
});
