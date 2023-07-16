Flexbox
    It is a way of dynamically aligning the elements of a section for reponsive web design
    To activate flexbox display:flex; should be added in the parent container

    --In flexbox the parent container has main two axes 
        main axis;
        cross axis;

    1.flex-direction:
        The default is row
        in this direction of dynamic alignment should be declared as 
        row
        row-reverse
        column
        column-reverse

    2.justify-content:
        The default is flex-start
        It is used to align elements in the row or column
        flex-start
        flex-end
        space-around
        space-between
        space-evenly
    
    3.flex-wrap:
        The default is set to no-wrap
        It is used to wrap items in a container
        wrap
        wrap-reverse

    4.align-items:
        It aligns the items in refrence with the cross line
        flex-start
        fles-end
        center
        baseline

    5.align-content:
        It is alignment of elements considering the space 
        space-around
        space-between

    6.align-self:
        It is the property associated with a single element's alignment
        flex-start/end
        center

    7.flex-basis:
        It is the initial size of an element about the main axis
        100px
        200px etc

    8.flex-grow:
        It determines how the element will eat the additional space into the container
        it accepts an unit-less number
        eg.1/2/3/5

    9.flex-shrink :
        It is vice versa of flex-grow

    10.flex:
        It is shorthand property for flex-grow/shrink/basis
        flex: flex-grow flex-shrink flex-basis;