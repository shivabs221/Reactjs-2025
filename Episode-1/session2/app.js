
// const heading=React.createElement("h1",{id:"heading1"},"Welcome to React Demo");

// output

{/* <div id="root">
    <h1 id="heading1">Welcome to React Demo</h1>
</div> */}

const heading = [React.createElement("div",{id:"child1"},[React.createElement("h1",{id:"child1-h1"},"Child1 Heading1"),React.createElement("h2",{id:"child1-h2"},"Child1 Heading2")]),React.createElement("div",{id:"child2"},[React.createElement("h3",{id:"child2-h1"},"Child2 Heading1"),React.createElement("h4",{id:"child2-h2"},"Child2 Heading2")])]

// output
{/* <div id="root">
    <div id="child1">
        <h1 id="child1-h1">Child1 Heading1</h1>
        <h2 id="child1-h2">Child1 Heading2</h2>
    </div>
        <div id="child2">
            <h3 id="child2-h1">Child2 Heading1</h3>
            <h4 id="child2-h2">Child2 Heading2</h4>
        </div>
</div> */}


// To create a Html element we are using React.CreateElement Statement. 
// With in the statement we have to pass 3 parameters 
// first - html element 
// second - element attributes 
// third - content / text to be displayed in the html s
console.log(heading);
// heading is the object type while rendering the heading variable converted into html elements.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);