import * as QUnit from 'qunit';

import exists from './assertions/exists';
import missing from './assertions/missing';
import focused from './assertions/focused';
import notFocused from './assertions/not-focused';
import textContains from './assertions/text-contains';
import textMatches from './assertions/text-matches';

QUnit.extend(QUnit.assert, {
  dom: {
    rootElement: document,
    pushResult: QUnit.assert.pushResult,

    exists,
    missing,
    focused,
    notFocused,
    textContains,
    textMatches,
  }
});
