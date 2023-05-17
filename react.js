//1. what is conditional rendering?
// ans- based on some conditions render components on ui is called conditional rendering for example if laoding is true then
// show me the data otherwise show loaders component or if you have appropriate data the show the data on ui
//otherwise show some messages instead of that.


//2. How many parts react.createElement has?
// ans - we can divide react.createElement into 3 parts
// 1. type of element such as div, button or img etc.
// 2. its attributes like classNames or styles 
//3. its children
// eg. const element = react.createElement('div',{className:"div"},"div's content")
// We can see that it is a very hectic tasks to create elements so to deal with this jsx comes into picture 
// and we can work with them very easily. e.g the above example can be written as
// <div className="div">div's content</div>

// 3. phases/ lifecycle of a component in react
// ans - it has three phases 
//a- mounting phase(when component renders to the ui)
//b- updating phase(when state/props updates and your component updates )
//c- unmount/destroy phase(when component removes from the ui)

//4. what are keys in react?
// ans- when we maps a list keys are the attributes which helps us to identify/modify each item. We can say that keys
// are a unqiue identifier with the help of that we can modify/reorder our items. We can pass index as a key but we shouldn't
// because they can create errors such as if we delete an element then the cycle of index changes and that can lead to errors.
// instead of error we should pass data's unique id to them so there will be no ambiguity.


