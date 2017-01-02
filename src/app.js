require('./styles/usage/app.scss');
var common = require('./scripts/untils/until.common.js');
var html = require('./scripts/tpls/index.html');

common.render(html);

require('./scripts/views/index.js')




//var two = require('./scripts/tpls/huati.html');
//huati.render(two);
//require('./scripts/views/huati.js')
