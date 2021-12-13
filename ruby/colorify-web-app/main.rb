require 'sinatra'
require 'sinatra/reloader'

get '/' do
    erb(:index)
end


get '/random_color' do
    colors = [
        'grey',
        'mintcream',
        'tomato'
    ]
    

    
    erb(:color, locals: {
        color: colors.sample
    })
end

get '/donate' do

    erb(:donate)

end