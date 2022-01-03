animals = ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep"];
def animals_func (animals_arr) {
    if animals_arr[-1] == "wolf" # or can use .last
        return "Pls go away and stop eating my sheep"
                
    else 
        let sheep_number = animals_arr.length - animals_arr("wolf") - 1;
        return "Oi! Sheep number #{sheep_number}! You are about to be eaten by a wolf! there is a wolf at step number #{animalsArr.index("wolf")}"   
    end
}
animals_func(animals)