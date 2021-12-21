def remove_spaces (str_input) 

    str_input_array = str_input.split(' ')
    return str_input_array.join('')

end

p(remove_spaces("cake pudding"));
p(remove_spaces(" cake pudding "));
p(remove_spaces("cake     pudding    "));
p(remove_spaces("p u d d i n g"));