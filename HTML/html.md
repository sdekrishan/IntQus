# HTML questions

### what is doctype in html

so before w3c(world wide web consortium) or web standards were made in 1994 some sites were built differently for two versions :-
1. netscape navigator
2. microsoft internet explorer

so when w3c made browsers cannot use them instantly because if they do that some existing sites would broke.

Now browsers have layout engines which have three modes 
1. quirks mode - this is essential in order to support websites which were built before w3c.
2. no-quirks mode - the desired behavior described by the modern html and css.
3. limited-quirks mode - a small number of quirks implemented.

now with the help of doctype we can tell our browser when to use quirks mode? if we don't initialize our page with <!Doctype> that means we want to enable quirks mode in our site.


