

str = "This Is SirvS From FutUrE"


def switch_case(str)
    new_str = ""

    str.chars.each do |char|
        if char == char.upcase
            new_str += char.downcase
        else
            new_str += char.upcase
        end


    return new_str
end