# puts ('it works')

# in ruby we call them methods
#  define a method

# if we don't return in ruby, the last expression will be returned by default
magic_number = 7 # local variable = local to outside of add method - lobby and rooms

def add(num1, num2)
    # this is a comment
    total = num1 + num2 + magic_number
    # puts (total)
    return total
end

def double(num)
    result = num *2
    # puts(result)
    return result

end

# x = add(5, 6)

# puts(double(x))

puts(double(add(6,8)))

