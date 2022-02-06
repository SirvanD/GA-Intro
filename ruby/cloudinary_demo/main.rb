require 'sinatra'
require 'sinatra/reloader'
require 'cloudinary'
require 'pry'


get '/' do


erb :index
end

options = {
    cloud_name: 'do33kjp1o',
    api_key: ENV['CLOUDINARY_API_KEY'],
    api_secret: ENV['CLOUDINARY_API_SECRET']
}

p options

post '/sign_up' do

    # params['avatar'].to_s

    file = params['avatar']['tempfile']
    result = Cloudinary::Uploader.upload(file, options)


    # binding.pry

    redirect '/'

end