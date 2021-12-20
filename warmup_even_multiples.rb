#  Write a method called even_multiples that takes a list of numbers and returns only numbers that are both even AND multiples of 5.

def even_multiples(user_array) 
    output_array = []
    user_array.each do |number|
        if number % 2 == 0 && number % 5 == 0
            output_array << number
        end  
    end
    output_array
end

p even_multiples([14, 5, 7, 2, 25, 10, -4, 3, 3, 20, 2, 6, 5])
p even_multiples([14, 5, 7, 2])