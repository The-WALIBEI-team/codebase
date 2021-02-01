var mysql      = require('mysql');
var connection = mysql.createPool({
	    host     : 'localhost',
	    user     : 'root',
	    password : 'walibei_pwd',
	    database : 'walibei'
});
module.exports=connection;
