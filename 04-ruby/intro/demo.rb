

# assignments
# by default its a local variable

name = 'forking legends'
age = 500
puts(name)

puts(5 == 5) # true
puts("5" == 5) #false

# convert

"5".to_i() #convert to integer
5.to_s() #convert to string


age2 = 300

if age2 > 18
    puts("drink till you drop")
elsif age > 21
    puts("have some water")
else
    puts("yay")
end


# ruby prefers words: ending with end


username = "epoch"
puts("1 - my username is " + username + "and my age is" + age2.to_s())

puts ("my username is #{ username } and my age is #{ age2 }")

# js - string template
# rubg - interpolation only works with double quotes
# \n means new line
# single quotes print everything exactly

