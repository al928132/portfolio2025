# Alejandro Medina
# Program 3
# 2.2.2025
# Section 3

import turtle
steve = turtle.Turtle()

# Set up
screen = turtle.getscreen()
screen.bgcolor("ivory3")
steve.penup()
steve.right(90)
steve.forward(50)
steve.pendown()

# Pen color
steve.pencolor("LightGoldenrod1")

# Shape and speed
steve.shape("turtle")
steve.speed(10)


# Flower Petals
steve.fillcolor("DarkOrchid3")
steve.begin_fill()
steve.right(45)
steve.circle(105, 235)
steve.right(155)
steve.circle(100, 220)
steve.right(150)
steve.circle(100, 227)
steve.right(155)
steve.circle(95, 225)
steve.right(150)
steve.circle(95, 225)
steve.end_fill()

# Star
steve.fillcolor("LightGoldenrod1")
steve.begin_fill()
steve.forward(300)
steve.right(144)
steve.forward(300)
steve.right(144)
steve.forward(300)
steve.right(144)
steve.forward(300)
steve.right(144)
steve.forward(300)
steve.end_fill()




