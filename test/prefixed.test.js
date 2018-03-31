const favicons = require('../src');
const test = require('ava');

const {logo, normalize} = require('./util');

test('should allow setting an URL prefix', async t => {
    t.plan(1);

    const result = await favicons(logo, {
        path: 'https://domain/subdomain',
    });

    t.snapshot(normalize(result));
});
