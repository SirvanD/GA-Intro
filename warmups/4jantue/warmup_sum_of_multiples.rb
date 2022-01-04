def sum_of_multiples (num_input)
    total_sum = 0
    i = 0
    while i < num_input 
        if i % 3 == 0 || i % 5 == 0
           total_sum += i 
        end
        i += 1
    end
    return total_sum;

end

p sum_of_multiples(10) #=>23
p sum_of_multiples(16) #=>60

