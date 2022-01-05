     
require 'sinatra' #web framework / crud apps create routs
require 'sinatra/reloader' # automatically restarts server everytime we save the project
require 'pg' #need functions to talk to the db - gives us functions to work with database
require 'pry' # a gem for debugging 
require 'bcrypt'

require_relative 'models/dish.rb'

# http is designed to be stateless
# scalable 

# to use sessions feature we have to enable it
enable :sessions


# Crud app
# some resources - likes,users,comments, dishes create read update destory
# route is the http method + path

# CRUD 

def all_dishes()

  result = db_query("select * from dishes order by name;")
end


def create_dish(name, image_url)

  sql = "insert into dishes (name, image_url) values ($1,$2);"

  db_query(sql,[name, image_url])

end



def delete_dish()

end


def update_dish()

end




# helper methods

def logged_in?()
  if session[:user_id]
    return true
  else
    return false
  end
end

def current_user() 


sql = "select * from users where id = #{ session[:user_id] };"

user = db_query(sql).first

return OpenStruct.new(user)

end



get ('/') do # is a fucntion of sinatra gem - creates a route to the homepage
  
  # we need to grab stuff from the db

  # conn = PG.connect(dbname: 'goodfoodhunting') # creates a connection to the db

  result = db_query("select * from dishes order by name;")

  # conn.close
  # erb function returns a string to the page it's assigned to then we can use the local variables inside the page
  erb(:index, locals: { 
    dishes: result
  })
end


get '/dishes/new' do
    redirect '/login' unless logged_in?
    erb(:new) 
end

get '/dishes/:id' do

  # never trust the user because of sql injection 

  dish_id = params['id']
  dish = db_query("select * from dishes where id = $1", [dish_id]).first


  # dish_id = params['id']
  # conn = PG.connect(dbname: 'goodfoodhunting')
  # sql = "select * from dishes where id = $1;" #

  # # result = conn.exec(sql) # pg will always return an array , in this case an array of single hash for id
  # result = conn.exec_params(sql, [dish_id])
  # dish = result[0] # {}
  # # dish_name = dish["name"]
  # conn.close
  

  erb(:show, locals: {
    dish: dish
    
  })
end


# post means create 
post '/dishes' do

  redirect 'login' unless logged_in?

 #anything data sent by the client will
 #automatically be placed inside the params
 
#  params["name"]


 create_dish(params['name'], params['image_url'])


# redirect '/' # always get- this is a get '/'
  
redirect '/'

  
end


delete '/dishes/:id' do

  
  delete_dish(params['id'])

  redirect '/'
end


get '/dishes/:id/edit' do

  sql = "select * from dishes where id = $1;"

  dish = db_query(sql, [params['id']]).first
  erb(:edit, locals: { dish: dish})
end


put '/dishes/:id' do

 update_dish(
   params['name'],
   params['image_url'],
   params['id']
 )
  redirect "/dishes/#{params['id']}"

end

get '/login' do

  erb :login
end


post '/session' do

  email = params["email"]
  password = params["password"]

  conn = PG.connect(dbname: 'goodfoodhunting')
  sql = "select * from users where email = '#{email}';"
  result = conn.exec(sql) # [{ id: '', email: '', password_digest: ''}]
  conn.close

# if the user exists in the db and the password is correct

if result.count > 0 && BCrypt::Password.new(result[0]['password_digest']).==(password)

  # single source of truth, that's why we're only writing the id in the session

  # write down this user is logged in

  session[:user_id] = result[0]['id'] # it's a hash / session for a signle user

  # then redirect to the home route
  redirect '/'

else
  erb :login

end



  # result.count
  
  # return result below, its a customised object so has to be converted into array and then for our sake to string
  # return result.to_a.to_s

  
  # result.count => look for how many times the email is found in db


  # returning everything thats passed in from the form - for debugging below
  # return params.to_s



  # check with the database


  # email
  # look up the email in the database

  # password
  # check if password is correct



end


delete '/session' do

  session[:user_id] = nil

  redirect '/login'


end




# route is not just the path
# it's the http method + path for example home page is combination of get and /

# so instead we should use post method


# http methods - get - doing a read
# http method - post - doing a write

# restful routes naming convention
# starts with a resource
# use http methods as much as possible to express what operation you are doing on that resource

# http methods : get post delete path/put

# tell me what resources
# resource is dishes
# resource users

# get /dishes

# get /dishes/:id #gets a single dish

# get /dishes/new
# post /dishes

# get /dishes/:id/edit
# put /dishes/:id

# delete /dishes/:id

# # example resource users - guideline

# get /users
# get /users/:id

# get /users/new
# post /users

# get /users/:id/edit
# put /users/:id

# delete /comments/:id



