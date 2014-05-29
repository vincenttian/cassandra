Following tutorial: 
http://msvaljek.blogspot.com/2014/01/hello-cassandra-in-nodejs.html

Using hellocassandrainnodejs example on github:
https://github.com/msval/hellocassandrainnodejs

Start cassandra server by going to  ~/Downloads/cassandra and running the command:

$ sudo bin/cassandra -f

Interact with the database with cql with:

$ bin/cqlsh -u cassandra -p cassandra

	To add things to database:
	> INSERT INTO company_table(id, impressions, name) VALUES (5, 3000, 'google');

	To see all tables:
	> DESCRIBE Tables;

	To see table schema:
	> DESCRIBE TABLE company_table;

	To create a new table:
	> CREATE TABLE company_table ( id int, name text, impressions integer, PRIMARY KEY (id) );

Then, go to directory ~/Desktop/workspace/network_tracking/cassandra/tutorial

$ cd ~/Desktop/workspace/network_tracking/cassandra/tutorial

Start the client:

$ node hellocassandra.js
