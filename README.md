# Landing Page Project

The code in this repository is meant to satisfy the project # 2 rubric of the Front Ent Web Developer nanodegree.
Landing page is the conversion of a static page to a page that allows some sort of interaction. The dynamicity is achieved through javascript.

___


Starter code taken from udacity [repository](https://github.com/udacity/fend/tree/refresh-2019/projects/landing-page).

This project has the scope of converting a static web page in a single interactive page.


It uses javascript to dynamically create navbar links based on the content, when a section is in the viewport it show the active state of that section.





using document fragment ,then get attribute of id of the section ,
get id a href to show the content of the section . 

by using getElementById // get Element id  
querySelectorAll// to select sections will appended by 
appendChild 

getBoundingClientRect to determined active class.


During the scrolling the navbar is automatically hidden and showed according the direction of the scrolling. // event listener







When scrolling past a configurable buffer, a new element will appear close to the bottom of the page. This element can be used by the users to scroll to the very top of the page.
