# Initialize a hash called ninja_turtle with the properties name, weapon and radical. It should have values of "Michelangelo", "Nunchuks" and true respectively.

# .class returns data type

ninja = {
:name =>  "Michelangelo",
:weapon =>  "Nunchuks",
:radical => true
}

# Add a key age to ninja_turtle. Set it to whatever numerical value you'd like.
ninja[:age] = 66 #also ninja.merge({:age => 66})

# Remove the radical key-value pair from ninja_turtle.
ninja.delete!(:radical)

# Add a key pizza_toppings to ninja_turtle. Set it to an array of strings (e.g., ["cheese", "pepperoni", "peppers"]).
ninja[:pizza_topping]=["cheese","Pepperoni","peppers"]

# Access the first element of pizza_toppings.
ninja[:pizza_topping][0] # also can use ninja[:pizza_topping][-1]  or ninja[:pizza_topping].first







require 'pry'
binding.pry