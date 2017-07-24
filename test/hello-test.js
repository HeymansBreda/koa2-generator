const assert = require('assert');
const sum = require('../hello');

describe("#hello", () => {

  describe('#sum()', () => {
    it('sum() should return 0', () => {
      assert.strictEqual(sum(), 0)
    });

    it('sum(1) should return 1', () => {
      assert.strictEqual(sum(1), 1)
    });

    it('sun(2) should return 2', () => {
      assert.strictEqual(sum(1, 2), 3)
    });

    it('sun(3) should return 3', () => {
      assert.strictEqual(sum(1, 2, 3), 6)
    });

    it('sun(4) should return 4', () => {
      assert.strictEqual(sum(1,2,3,4), 10)
    })

  })
});