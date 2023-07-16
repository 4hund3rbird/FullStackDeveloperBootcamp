<!Doctype html>
<html>
    all the html content goes in between the <html> tags
</html>
--------------------------------------------------------------------------------------------
in <html></html> tags 
<head></head> ---- in head factors like <title></title> are declared
<body></body> ---- in body there are main three factors are used 
<header></header>
<main></main> 
<footer></footer>
is used
--------------------------------------------------------------------------------------------
<p></p> for paragraphs
<h1></h1> to <h6></h6> for  title sizes
--------------------------------------------------------------------------------------------
for including images we have to use
<img src="source of image on local computer or internet link alt="if image is not loaded due to and error this message will show>
--------------------------------------------------------------------------------------------
<hr> for line break
<br>for break
--------------------------------------------------------------------------------------------
 <ul>
        <li>Introduction</li>
        <li>Special Relativity</li>
        <li>General Relativity</li>
    </ul>

this is the syntax used to include lists in the webpage
ul for unordered lists
ol for ordered lists
li for list elements

--------------------------------------------------------------------------------------------
<a href="https://en.wikipedia.org/wiki/Theory_of_relativity">Theory of relativity wiki</a>
<a href="is used to make a link in out website">this is the link name</a>
--------------------------------------------------------------------------------------------
<div></div> -----block elements are special containers for the separate code blocks
<span></span> -----inline elements
--------------------------------------------------------------------------------------------
<tr></tr> is used for row
<td></td> is row elements
<th></th> is for header
--------------------------------------------------------------------------------------------
html form are input fields for any website.
        it can be any thing form email to search things etc
        it has some arrtibutes one of which is action 
        action determines the location of input data from the form and sends it to the 
        designated server address relative to the current address
        in the following case it is c:file address/engine/input data
    
    
        input: it is for taking input from the user. it has arrributes like type which declares
            type of the input and place holder

            type:declares type of the input.

                radio:it creates a radio button.
                    all radio buttons should be connected by a same name 
                    each individual radion input should be given a value for server to send
                    file:///C:/engine?email=sad%40gmail.com&username=asdas&password=sad&dec=on&size=L
               
                checkbox:it is normal checkbox
                    in checkbox one or more fields can be selected
                    to make it checked before checked argument should be added

            placeholder:used for placeholder text

            name: it is used in  input to add value pair to the data we want to send
                it can be anything in the data
                it all of our form data to the url requests in for of get requests
                like file:///C:/engine?email=df%40gmail.com&username=sdfsdf&password=89745&dec=on
        
        label: it is for labeling the input for this to work for arrribute has to be
            initiated with the same id from the input
        

        button: it is the comman way to add a button
            when a button is created inside the form tags it will submit the form anyway
            to add anothe functionalities to a button inside the form we have to declare
            <button type=button>this is button</button>
        
            another way to make a button is 
            <input type="submit" value="click me!"
            this works only for form and it submits the form value enters text inside the 
            button

        select: it is used for selecting elements from a dropdowm menu
            it comes with another container called options for the options of the menu
            <select name=dish id=dish>
                <option value="fried rice">fried rice</option>
            </select>

        textarea: it is used for multiline inputs 
            can be declared as
            <textarea id="name" rows="2" cols="4" name="full name" placeholder="type here">
        
        validations can be created by adding a "required" attribute
--------------------------------------------------------------------------------------------