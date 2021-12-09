# js object literal
# ruby hash
# python dictionary
# store multiple types of info
# key $ value
# property
# ley

# var account = {
#     name: ' catert',
#     balance: 100000
# }

# var sillyArr = {
#     0: 'kiwi',
#     1: 'apple',
#     2: 'mango'
# }

# keys are custom
# arrays keys are ordered numbers

#  hash

fruits = ['kiwi', 'mango', 'apple'] # accessing these with indexes fruits[1]

account = {

    "name" => "carter",
    "balance" => 0.1,
    "history" => [2,5,10],
    5 => "five", #access to this account[5]
    "7" => "seven", #access to this account["7"]
}


#symbol data type - starts with a colon
movies = [
    {
        :title => "sharknado"  # access to this : movies[0][:title]
    },
    {
        :title => "sharknado 2"
    },
    {
        :title => "sharknado 3"
    }
]


#trying to copy js
# keys will automatically be symbols
users = {
    name: "dt",
    username: "epoch" #access user[:username]
}






require 'pry'
binding.pry