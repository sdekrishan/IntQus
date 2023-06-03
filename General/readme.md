# 1. Critical Rendering Path

Critical Redering path (CRP) is process of three steps in which the browser goes through to convert html, css and js on the screen. By improving this we can improve the render performance.
It includes four major parts :- 
1. DOM (Document Object Model)
2. CSSOM (CSS Object Model)
3. Render Tree
4. Layout

*** How CRP works ***

A page starts with a HTML request. The server will give the data and headers after that browser begin to parsing the html by converting the data into DOM tree. Once the dom is constructed browser fetches the css files associated with the html. When css file is parsed CSSOM  tree is built. The CSSOM represents the styles defined in the CSS files, including selectors, properties, and values.
After that browser builds the render tree. After the render tree is complete, layout occurs, defining the location and size of all the render tree elements. Once complete, the page is rendered, or 'painted' on the screen.

We can avoid *** Jank *** by optimise CRP

### Jank 

Jank refers to lazy rendering or slow rendering. It happens when js executes long and heavier tasks.

