
import { dbExample } from './example';

test('teste', () => {

    const res = dbExample();

    expect(typeof res).toBe("objet");
  });
  
  