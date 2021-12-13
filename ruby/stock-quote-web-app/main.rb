require 'sinatra'
require 'sinatra/reloader' #if development?
# require 'pry'

#functions to get stock info
require 'stock_quote'

StockQuote::Stock.new(api_key: "pk_5297b0e5a91b4f75afc2b8a65438b6f8")


# use template as a built in feature in sinatra
# mkdir views and put your template in there 
# mkdir public for any files the client can have access to
# convention over configuration 


get '/' do
    year = 2021
    erb(:index, locals: { 
        current_year: year,
        slogan: "ho ho ho" #syntax is super important
    })
end

get '/stock'  do
    
    
    ticker = params["ticker"].to_s
    stock = StockQuote::Stock.quote(ticker)

    company_name = stock.company_name
    price = stock.latest_price
    "Stock of #{company_name} is last sold at US $ #{price}"

    # erb(:stock_details, locals: {
    #     company_name: company_name,
    #     price: price
    # })

end

get '/about' do
    
    erb(:about) 

end
# everything you do in the browser is about make http requests 
# address bar
# link / anchor
# form

# google.com/search?q=cake


    # todo
    # ask your friend from stock quote gem
    # http://localhost:4567/stock?ticker=msft
    # ticker = params["ticker"].to_s
    
    # stock = StockQuote::Stock.quote(ticker)
    #automatically converts stock price to string