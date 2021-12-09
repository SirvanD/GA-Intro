

# anthing after the ? question mark
# query string
# key value pairs
# returns a json/js file to browser or in cli = curl following by url
#t = title
# make an http request to the above url using ruby

# https://www.omdbapi.com/?t=friends&apikey=6139fe0d

# Use the class methods to get down to business quickly
# response = HTTParty.get('https://www.omdbapi.com/?t=interstellar&apikey=6139fe0d')

require 'httparty' # helps us make http requests

puts "\n\nWelcome to my movie app\n\n"
print "Enter your fav movie: "
movie_input = gets.chomp

url = "https://www.omdbapi.com/?t=#{movie_input}&apikey=6139fe0d"

res = HTTParty.get(url)

puts res["Title"]
puts res["Year"]
puts res["Plot"]