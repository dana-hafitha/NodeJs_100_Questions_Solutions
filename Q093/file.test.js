const fs = require('fs');
const readFileContent = require('./file.js');

jest.mock('fs');

test('readFileContent returns "hello"', done => {
  fs.readFile.mockImplementation((path, encoding, callback) => {
    callback(null, 'hello');
  });

  readFileContent('anyfile.txt', (err, data) => {
    expect(err).toBeNull();
    expect(data).toBe('hello');
    done();
  });
});
