

def palindrome?(str) #for readibility the name can be this or is_palindrome
    str_without_spaces = str.gsub(' ', '')
    
    return str_without_spaces == str_without_spaces.reverse #we can remove return too
    # if str_without_spaces == str_without_spaces.reverse
    #     return true
    # else
    #     return false
    # end

end

puts(palindrome?('a toyota'))