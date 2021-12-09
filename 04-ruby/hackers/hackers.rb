require "pry" #dependency

hackers = [
    "hannah carney",
    "moya m",
    "nicky",
    "misty rose",
    "john"
]

# make directories and files

# binding.pry

# puts "the end"

# how to create directories
#  how to create a file 

require 'fileutils' #requiring all fileutils functions

# FileUtils.touch("test.txt")
hackers.each do |hacker|
    dir_name = hacker.gsub(' ', '_')
    FileUtils.mkdir(dir_name)
    FileUtils.touch("#{dir_name}/readme.md")
end

# FileUtils.mkdir("hannah_carney")
