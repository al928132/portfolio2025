# Alejandro Medina
# 3.16.2025
# Section 3
# Program 7b

# First Function
def alejandro_medina_logo(steve):
    steve.penup()
    steve.right(90)
    steve.forward(50)
    steve.pendown()
    steve.pencolor("pale violet red")
    steve.fillcolor("SlateBlue3")
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
    steve.fillcolor("pale violet red")
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
    
# Logo 2
# function with name
def jullian_marzan_logo(m):  
    m.setheading(0)  
    m.pencolor("#3295a8")
    
    # mission is to draw two stars
    # restrictions of the 150 pixels by 150 pixels
    
    for i in range(5):  
        m.forward(75)  
        m.right(144)

# Logo 3
def diego_caban_logo(m):

    #Set Heading to the default
    m.setheading(0)
    #Make a boundary
    m.color("Black")
    m.left(0)
    m.begin_fill()
    for i in range(4):
        m.forward(150)
        m.left(360/4)
    m.end_fill()
    #Step 2: draw something
    #Step 2.1: Draw something with a loop

    #Eye Setup
    c=50
    m.color("White")
    m.penup()
    m.forward(150/2)
    m.left(90)
    m.forward(c/2)
    m.right(90)
    m.pendown()
    m.begin_fill()
    m.circle(c)
    m.end_fill()
    #Saw Setup
    m.color("Green")
    m.penup()
    m.left(90)
    m.forward(10)
    m.right(90)
    m.backward(5)
    m.pendown()
    m.begin_fill()
    f=12
    #Saw Shape
    m.speed(0)
    for i in range(f):
        m.left(360/f)
        m.right(90)
        m.forward(5)
        m.left(90)
        m.forward(15)
    m.speed(5)
    m.end_fill()
    #Pupil Setup
    m.color("Black")
    m.penup()
    m.left(90)
    m.forward(18)
    m.right(90)
    m.pendown()
    #Pupil
    m.begin_fill()
    m.circle(10)
    m.end_fill()

def main():
    import turtle
    screen = turtle.getscreen()
    steve = turtle.Turtle()
    steve.shape("turtle")
    steve.speed(10)
    alejandro_medina_logo(steve)

    # Jullian Marzan driver
    t = turtle.Turtle()
    t.shape("turtle")
    t.penup()
    t.backward(300)

    # drawing of star 1    
    t.setheading(90)  
    t.forward(50)  
    t.setheading(0) 
    t.pendown()

    jullian_marzan_logo(t)  

    # drawing of star 2
    t.penup()
    t.forward(100)  
    t.pendown()
    jullian_marzan_logo(t)

    # Diego Caban driver
    t=turtle.Turtle()
    t.shape("turtle")
    t.penup()
    t.backward(300)
    t.left(90)
    t.forward(100)
    t.pendown()
    
    diego_caban_logo(t)

main()

