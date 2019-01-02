const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-bmklet:app', () => {
    beforeAll(() => {
        return helpers.run(path.join(__dirname, '../generators/app'))
            .withPrompts({ projectName: 'my-project' });
    });

    it('creates files', () => {
        assert.file(['package.json', 'index.js']);
        assert.fileContent('package.json', /"name": "my-project"/);
    });
});
