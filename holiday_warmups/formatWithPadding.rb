

def format_with_padding (num_input,char,num_length) 

    num_input_array = num_input.to_s
    # p num_input_array
    # p num_input_array.length
    num_output_array = []
    num_length_array = num_length.to_i
    # p num_length_array
    if (num_input_array.length >= num_length_array)
        
        return num_input.to_s
    else
        counter = num_input_array.length
        # p counter
        num_output_array = num_input_array.split('')
        # p num_output_array
        while counter < num_length_array
            num_output_array.unshift(char)
            counter += 1
        end
        return num_output_array.join('')
    end
    

end
p format_with_padding(1234, '*', 3); # "1234"
p format_with_padding(123, '0', 5); # "00123"
p format_with_padding(42, '*', 10); # "********42"