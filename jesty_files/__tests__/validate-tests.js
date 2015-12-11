// Load the file that exports the functionality to test
jest.dontMock('../app/validate');  // Don't create mock functions
var validate = require('../app/validate');

// Test to verify the checkWordCount function
describe('checkWordCount', function() {
  it('defines a word count check function', function() {
    expect(validate.checkWordCount).toBeDefined();
  });

  it('validates "the cat jumped over the moon"', function() {
    expect(validate.checkWordCount("the cat jumped over the moon")).toBe(true);
  });
});

// Test to verify the duplicateCheck function
describe('duplicateCheck', function() {
  it('defines a duplicate word checker function', function() {
    expect(validate.duplicateCheck).toBeDefined();
  });

  it('does not validate "the cat jumped over the moon"', function() {
    expect(validate.duplicateCheck("the cat jumped over the moon")).toBe(false);
  });
});

// Test to verify the verifyAlphaNumeric function
describe('verifyAlphaNumeric', function() {
  it('defines a function to validate input if text is only alphaNumeric characters', function() {
    expect(validate.verifyAlphaNumeric).toBeDefined();
  });

  it('returns "true" and does not validate "the cat jumped over %#*"', function() {
    expect(validate.verifyAlphaNumeric("the cat jumped over %#*")).toBe(true);
  });
});