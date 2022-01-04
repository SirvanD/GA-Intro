# create a dummy user with digested password using library bcrypt

require 'pg'
require 'bcrypt'

puts "creating a dummy user..."

email = "sirvs@ga.com"
password = "pudding"

conn = PG.connect(dbname: 'goodfoodhunting')

password_digest = BCrypt::Password.create(password)

sql = "insert into users (email,password_digest) values ('#{email}','#{password_digest}');"

conn.exec(sql)
conn.close
puts "done!"