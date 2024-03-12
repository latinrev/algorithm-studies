import random
import json
hashTable = {}


def my_hash(value,seed=37):
    hash_value = seed
    intValue = 0
    for char in value:
        intValue += ord(char); # get ascii value
    # grab the seed and divide it by prime number so its nicely distributed,
    # multiply so we get a big number, add the value so we bind it to the seed
    hash_value = hash_value * (seed*7) + intValue  
    hash_value = hash_value ^ (hash_value >> 8) # lets XOR the bits of a 2^8 on right shift 
    return hash_value % 1000

f = open('list.json')
data = json.load(f)
for item in data:
    hashTable[my_hash(item['email'])] = item

hashObject = json.dumps(hashTable,indent=4)
with open("hashedJson.json","w") as outfile:
    outfile.write(hashObject)

hashed = json.load(open('hashedJson.json'))
search = hashed[str(my_hash("searchValue"))]
