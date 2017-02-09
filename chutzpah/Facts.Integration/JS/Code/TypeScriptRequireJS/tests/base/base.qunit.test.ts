﻿/// <reference path="../../qunit.d.ts" />

import core = require('base/core');

QUnit.module("base/core");
test("will return correct version from core", function () {
    var version = core.version;
    equal(version, 8);
});