# server

# program that listens for requests and serves you responses
# web http, file, ftp, database, email smtp


# writing a server app
# static websites = storing files on the server

# index.html
# style.css
# app.js

# server side programming

#sinatra is a smicro framework to help make web apps-  comparing to rails which is big
# library vs framework 
# libraries you have alot of control, you have functions
# frameworks are more of shortcuts-routes
# DSL domain specific language

require 'sinatra'
require "sinatra/reloader" #if development?

# require 'pry'
require 'stock_quote'

# menu item customers can request
get '/cheeseburger' do
    # response that the shop keeper to give out

    return "sorry we don't do cheese here 🍔 " #we can remove return here 
end

get '/what_time_is_it' do
    
    Time.now.to_s
end


get '/what_is_one_plus_one' do
    result = 1+1

    result.to_s
end


get '/hello' do
    #special built in hash named params
    name = params["name"]
    "hello there #{ name } 🙈 💥💥💥 "
 
    # http://localhost:4567/cheeseburger?color=mistyrose

end

get '/add' do
# use & for separating params in browser
    number1 = params["num1"].to_i
    number2 = params["num2"].to_i
    total = number1 + number2

   "The sum of #{ number1.to_i } and #{ number2.to_i } is : #{ total }"
end



get '/stock'  do

# todo
# ask your friend from stock quote gem
# http://localhost:4567/stock?ticker=msft
ticker = params["ticker"].to_s
StockQuote::Stock.new(api_key: "pk_5297b0e5a91b4f75afc2b8a65438b6f8")
stock = StockQuote::Stock.quote(ticker)

"#{stock.company_name} #{stock.latest_price}"


end


# anatomy of an url

# http://localhost:4567/cheeseburger?color=mistyrose
# protocol domain  port      path      query string






# frontend

# backend

# client side development/programming
# server side development/programming
