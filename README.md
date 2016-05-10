#Vablet html presentation

This is simple HTML page based on swipe navigation by Owl Carousel.

##Gulp setup
* **gulp** - runs the dev mode with browser refresh
* **gulp dist** - builds a project and creates dist.zhtml file, that's the one you should upload to vablet

##Good to know
Most of the animations are CSS based. They work based on an assumtion that Owl Carousel always adds `active` class on the currently displayed container.
All elements that are animated get initial values and transition attribute. Those values are overwritten whenever the parent container gets class `active` that results in animation. There's no need to reset any of those animations because they simple get back to initial state once the `active` class is removed.
The rest of the project is quite straight forward.

##The WTFs
There are couple of WTFs in this project, like the Vablet app crashes and good luck figuring out what's the reason. One of my assumtions was an image overload, therefore you'll see a class called `clear` on all non `active` Owl slide containers, that way I just force `background:none` on all invisible elements hoping it's going to make some space in the memory.

Another WTF is a form, adding or removing stuff to this fragile code usually results in a crash at least on iOS7. Vablet's documentation and error messaging is so elaborate that the only thing you can rely on is trial and error.  

Making this whole thing work nicely with Vablet is very frustrating and time consuming experience.