# library is called gem in ruby
#delete the extra space at the end always
require 'stock_quote' #dependency - need for the stock.quote()
require 'sinatra'
require "sinatra/reloader" #if development?

# require 'pry'

# tickers
puts "stock quote app"

print "enter a ticker name [bmbl,goog,amzn,aapl,msft,tsla] : "
user_input = gets 

# setup the api key
StockQuote::Stock.new(api_key: "pk_5297b0e5a91b4f75afc2b8a65438b6f8")
stock = StockQuote::Stock.quote(user_input)

puts stock.company_name
puts stock.latest_price


# anthing after the ? question mark
# returns a json file to browser or in cli = curl following by url
#t = title

# https://www.omdbapi.com/?t=jaws&apikey=6139fe0d

