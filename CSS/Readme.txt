The CSS stands for Cascading Style Sheets
it is used to format/design the html documents
the general way of using selector is 

selector{
    property:value;
}
------------------------------------------------------------------------------------------
 <!--this is called inline styling in which styles can be added in line of element by
    adding style attribute -->
    <h1 style="color:royalblue">Hello world!!!</h1>
------------------------------------------------------------------------------------------
 <!--this is anothe way in which we can write all the css inside the head of html document-->
    <style>
        h2{
            color:aqua;
        }
    </style>
------------------------------------------------------------------------------------------
 <!--the third way in styling is creating a separate css file and then linking the file
    with html document by using <link> method-->
    <link rel="stylesheet" href="the address to the css file">
------------------------------------------------------------------------------------------
some of the text properties
color
background-color
font-family
font-size
letter-spacing
text-align
font-weight
text-decoration
line-height
------------------------------------------------------------------------------------------
Selectors in css
1.Universal selector
*{
    color:black;
}
    makes every text black
2.Element selectors
button{
    background-color:red;
}
    makes every button with a red background

    selector list canbe made with comas
    h1,h2,button{
        color:green;
    }
3.ID selector
#signup{
    color:red;
}
    makes element assosiated with signup id red
3.Class selector
.page{
    color:red;
}
    makes all elements with page class red.
4.Decedant selector
footer a{
    text-decoration:none;
}
    removes underline from all the anchor tags in the footer section
5.Direct-Decedant selsector
footer>a{
    color:red;
}
    makes red color of anchor tags directly nested in the footer.
6.Adjacent selector
h2+a{
    color:red;
}
    makes red color of every anchor tag coming after a h2.
7.Attribute selector
input[type="text"]{
    color:blue;
}
    makes blue color input text with every input with type text.
------------------------------------------------------------------------------------------
pseudo classes:
:hover
:active
:nth-of-type(2n)
button:hover{
    background-color:blue;
}
    makes background of button blue when hovered hover.
------------------------------------------------------------------------------------------
pseudo elements:
::selection
::first line 
::first letter
::before
::after
p::selection{
    color:orange;
}
    makes orange color of selected lines form a paragraph.
------------------------------------------------------------------------------------------
css specificity is considered when there is a style conflict between two styles for the 
same element
    in such case specificity of declared considered in following order
    ID>class>elements
    the one style with specific id will win the most
    specificity score is calculated by no.of id no.of class no.of elements
    for eg: for style with specific id specificity score will be 100        
------------------------------------------------------------------------------------------
In css every element acts like a box that is called as box model
it has some properties like
    border
    padding
    margin
------------------------------------------------------------------------------------------
display:
    it is very important property as it can change block behaviour
    inline-inline element doesnot support margin,padding etc
    block-bolck element can not be in row
    inline-block:can be in row and support margin,padding etc.
------------------------------------------------------------------------------------------
CSS units
    percentage:relative to the parent size of element
    em:relative to the parent font-size
    rem:relative to the root font-size for all the elements
------------------------------------------------------------------------------------------
Opacity of a element can be adjusted by adusting the colors in vs code
------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------
***Very Important :

Position Property:

1.Static:
    It means the element is static that is it will not have any change in postion at any 
    given time

2.relative:
    It means the element is offseted by given parametes 
        top:
        left:
        right:
        botton:
    that much is shifted in refrence with original Position
3.absolute:
    In this case elemnet is removed from normal document flow and no space is created 
    for the element it means it can overlap and position parameters are taken in refrence
    with main body of the document i.e. 
        if it is 
            top:100px;
            this means that element is offset by 100px from the top of the web page.
    
    --but if the positino of parent container is set to relative then the position is set
    in refrence with the parent container.

4.fixed:
    In this is same as of absolute only difference is it stays fixed at that location 
    on the screen at all the time.

5.sitcky:
    In this the element acts normal but as we scroll down it starts to move on relative position 
    up or down
------------------------------------------------------------------------------------------
Transitions:
    transitions property can set timer to some change in property 
    it has following parameters
        1s: you can directly set timer of 1s to a specific transitions
        property-name: you can set timer to a specific property by adding its name.
        delay: it is the time taken befor even the transition starts

        transition-timing-function-liner
                                   ease-in/ease-out/bezuir-curve
Transformations:
    rotate
    translate
    skew
------------------------------------------------------------------------------------------

