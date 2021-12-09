# puts ('it works')


# p str_input
# last_index = str_input.length-1
# last_char = str_input[last_index]
# trim in JS to get rid of white spaces = strip in ruby
# include("?") ? anywhere in string
# .strip only removes whitespaces at either ends

loop do 
    puts ("# say something to Daniel!")
    str_input = gets().chomp#("\n")
    if str_input.end_with? "?" # if str_input[-1] == "?"
        puts "Sure" 
    elsif   str_input.empty? #str_input == ""
        puts "Fine, Be that way"
    elsif str_input.chars == str_input.upcase
        puts "Woah, Chil out!"
    else puts "Whatever"
    end
end

