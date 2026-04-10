# Alejandro Medina
# 4.13.2025
# Section 3
# Program 10

# Setting up inventory
inventory = {}

# Setting up Menu
def menu():
    print("Menu:")
    print("1 - Increase Inventory")
    print("2 - Decrease Inventory")
    print("3 - View Inventory")
    print("4 - Quit")
    menuSelection = int(input("Select your option:\n"))
    return menuSelection

# Increasing inventory
def increaseInventory():
    # Asking user what game they are buying and how many
    game = input("What game are you purchasing?\n")
    quantity = int(input("How many games are you purchasing?\n"))

    # Adding inventory to existing game
    if game in inventory:
        currentQuantity = int(inventory[game])
        addQuantity = currentQuantity + quantity
        inventory[game] = addQuantity

    # Adding new game to inventory
    else:
        inventory[game] = quantity

# Decreasing inventory
def decreaseInventory():
    # Asking user what game they are selling and how many
    sell = input("What game are you selling?\n")
    sellQuantity = int(input("How many are you selling?\n"))

    # Is the game in the inventory
    if sell in inventory:
        currentQuantity = int(inventory[sell])

        # Seeing if quantity present is larger than what is being sold
        if currentQuantity >= sellQuantity:
            newQuantity = currentQuantity - sellQuantity
            # Reassigning the value of game quantity
            inventory[sell] = newQuantity

        # Seeing if current quantity is not larger than being sold
        elif currentQuantity <= sellQuantity:
            # Telling user how many can be sold
            print("You do not have", sellQuantity, "copies of", sell, "in stock.")
            print("You sold", currentQuantity, "of them.")
            # Removing game from inventory when no longer present
            del inventory[sell]

        # if game is not in inventory
        else:
            print("You do not have any copies of", sell, "in stock.")    

# Viewin inventory
def viewInventory():
    # Table with listed games and the quantity
    for game, quantity in inventory.items():
        print(game, "\t\t", quantity)

    # Games with low stock
    print("Low Stock Warning(s):\n")
    for games, quantity in inventory.items():
        if quantity < 100:
            print(game)

    # Suggesting games that should go on sale
    print("Sale Recommendation(s):\n")
    for game, quantity in inventory.items():
        if quantity>1000:
            print(game)

def main():
    # Calling menu
    select = int(menu())

    # Selecting menu options
    while select != 4:

        # Increase inventory
        if select == 1:
            increaseInventory()
        # Decrease inventory
        elif select == 2:
            decreaseInventory()
        # View inventory
        elif select == 3:
            viewInventory()
        # When not an option
        else:
            print("Sorry, that was not a valid option.")
        # Return menu
        select = int(menu())

main()
