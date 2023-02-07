import 'react-native-get-random-values';
import '@ethersproject/shims';

import {fetch as fetchPolyfill} from 'whatwg-fetch';
import {Platform} from 'react-native';
import {Buffer} from 'buffer';

if ('ArrayBuffer' in global) console.log('ArrayBuffer in global');
else console.log('ArrayBuffer not in global');

if (typeof __dirname === 'undefined') global.__dirname = '/';
if (typeof __filename === 'undefined') global.__filename = '';
if (typeof process === 'undefined') {
  global.process = require('process');
} else {
  const bProcess = require('process');
  for (const p in bProcess) {
    if (!(p in process)) {
      process[p] = bProcess[p];
    }
  }
}

fetch = fetchPolyfill;
global.fetch = fetchPolyfill;

if (typeof btoa === 'undefined') {
  global.btoa = function (str) {
    return new Buffer(str, 'binary').toString('base64');
  };
}

if (typeof atob === 'undefined') {
  global.atob = function (b64Encoded) {
    return new Buffer(b64Encoded, 'base64').toString('binary');
  };
}

process.browser = false;
if (typeof Buffer === 'undefined') global.Buffer = require('buffer').Buffer;

// global.location = global.location || { port: 80 }
// eslint-disable-next-line no-undef
const isDev = typeof __DEV__ === 'boolean' && __DEV__;

// SEE: (https://github.com/facebook/react-native/issues/7607)
Object.assign(process.env, {NODE_ENV: isDev ? 'development' : 'production'});

// eslint-disable-next-line dot-notation
if (typeof localStorage !== 'undefined') {
  localStorage.debug = isDev ? '*' : '';
}

// If using the crypto shim, uncomment the following line to ensure
// crypto is loaded first, so it can populate global.crypto
require('crypto');

if (Platform.OS === 'ios' && !!global.HermesInternal) {
  // Polyfills required to use Intl with Hermes engine
  require('@formatjs/intl-getcanonicallocales/polyfill');

  require('@formatjs/intl-locale/polyfill');

  require('@formatjs/intl-pluralrules/polyfill');
  require('@formatjs/intl-pluralrules/locale-data/en');

  require('@formatjs/intl-numberformat/polyfill');
  require('@formatjs/intl-numberformat/locale-data/en');

  require('@formatjs/intl-datetimeformat/polyfill');
  require('@formatjs/intl-datetimeformat/locale-data/en'); // locale-data for en
  require('@formatjs/intl-datetimeformat/add-all-tz'); // Add ALL tz data
}
