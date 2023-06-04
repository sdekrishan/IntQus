# Qus related to react

### Synthetic Event
 In react when we dealing with events, React provides us React object event. It is known as synthetic event.
 It is use to resolve some browser inconsistency although it works same as DOM event.

e.g. javascript
function handleClick(event){
console.log(event)
}
return <button onClick={handleClick}>Click</button>


In the above example in our event handlers (handleClick Function) the event arguement is a synthetic event. It is a React object event. 

**Some points to remember**

Some events in the React or we can say some synthetic event may be different from browser's native elements such as in react we have onMouseLeave event but we dont have that event in DOM event. But if you want to see which browser's event matches to the onMouseLeave event you see that by using e.nativeElement in event handlers.

### 2. Controlled vs uncontrolled components

the main difference between them in only state where use of state is mandatory in controlled component and in uncontrolled component we use Refs. In controlled components, component is controlled by state and in uncontrolled, component is controlled by DOM. 
