need these script to create db

mongod --dbpath [ path  ]/data
mongo
use nodetest
db.usercollection.insert({ "username" : "testuser", "email" : "testuser@youngpark.com" })
