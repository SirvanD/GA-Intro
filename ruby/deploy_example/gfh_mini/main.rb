# dependencies 
 
require 'sinatra'
require 'pg'

# remove sinatra reloader and pry
# all gems should be in gemfile

# use gem list pg to see the versions
# bundle install to see what you have and creat gemfile.lock


def db_query(sql, params =[])
  conn = PG.connect(dbname: 'goodfoodhunting')
  result = conn.exec_params(sql, params)
  conn.close
  return result
end


def all_dishes()

  db_query('SELECT * From dishes;')
end

get '/' do
  dishes = all_dishes()
  erb :index, locals:{ dishes: dishes}
end


get '/about' do


  erb :about

end






