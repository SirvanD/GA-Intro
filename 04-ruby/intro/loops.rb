#  your favourite

# lets do some counting from 1 to 10


# theres a built in function for numbers named .even?
# returns a boolean
# predicate function
counter = 1

while counter < 10
    if counter.even? #counter.even?() #() is optional
        puts(counter)
    end 
    counter += 1 # counter = counter +1
end



# ruby says the while loop sucks

# print in the terminal beetlejucie 3 times

# .times loop

3.times do 

    puts ('beetlejuice')

end

1.upto(10) do |num|
    
    puts("hello #{num}")

end

# do end - ruby blocks

#  JS function repeat(3, fn) {
    # console.log('beetlejuice')
#  }


numbers = [5,6,7,8]
total = 0
numbers.each do |number|
    
# puts("yay")
# puts("nay")
total = total + number

end
puts(total)

# numbers.sum()