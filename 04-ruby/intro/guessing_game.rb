# secret number
# allow user to guess
# until they guess it corectly

# prompt - getting user input ???
# secret number check
# keep a count for number of guesses

# while loop - check 

# JS - prompt
# puts ('guess a number')
# user_input = gets().chomp.to_i
# p(user_input) #user_input.chomp cleans up the input

# setup a secret number

secret_num = rand(1..10)

# infinite loop

loop do
    puts "enter a number"
    guess = gets.chomp.to_i

    if guess == secret_num
        puts "congrats"
        break
    end

end





# ask user to make a guess
# puts ('guess a number between 1 to 10')
# user_input = gets().chomp.to_i


# # while guess is not equal to the secret

# while user_input != secret_num
#     # tell them it's wrong 
#     puts "oops try again" 
#     # tell them higher or lower
#     if user_input < secret_num
#         puts('go higher')           
#     else 
#         puts ('go lower')
#     end
#     # ask them to guess again
#     user_input = gets().chomp.to_i
# end
# # tell them they guess it right when they exist the loop
# puts ("yay you got it! ")



