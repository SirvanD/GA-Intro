

def remove_ends (str_input) 
    counter = 1
    str_output = []
    if (str_input.length < 3) 
        return str_output.join()
    else  
        while counter.to_i<str_input.length-1 
            str_output.push (str_input[counter])
            counter += 1;
        end
        return str_output.join('')
    end
end

p(remove_ends("SEI Rocks!"));
p(remove_ends("a"));
p(remove_ends("This is a test"));
p(remove_ends("Fin"));