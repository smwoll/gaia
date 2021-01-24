// This file imports jQuery from NPM and sets its global variables so that we
// can install jQuery plugins and enable usage of scripts that assume a global
// jQuery.

import $ from 'jquery';

window.jQuery = $;
window.$ = $;
