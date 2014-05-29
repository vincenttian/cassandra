var cql = require('node-cassandra-cql');
var client = new cql.Client({hosts: ['127.0.0.1:9042'], keyspace: 'impressions', username: 'testuser', password: 'testuser'});
client.execute('SELECT * FROM company_table', [], 
  function(err, result) {
    if (err) {
		console.log('execute failed', err);
    } else {
		for (var i = 0; i < result.rows.length; i++) {
			console.log('id=' + result.rows[i].get('id'));
			console.log('name=' + result.rows[i].get('name'));
			console.log('impressions=' + result.rows[i].get('impressions'));
			console.log('');
		}
		process.exit(0);
    }
  }
);