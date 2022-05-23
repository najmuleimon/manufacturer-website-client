import React from 'react';

const Blogs = () => {
    return (
        <div>
            Question answer Manufacturer
            14.1 To improve the performance of a React Application we need to keep local component state where necessary, to prevent unnecessary re-renders we have to use memorizing react components, code-splitting using dynamic import(), with the concept of windowing, render the DOM only the visible portion to the user, we can use lazy loading images.

            14.2 The state is an object that holds information about a certain react component. There are four main types of state we need to properly manage in our React application: local, global, server, URL state. We can manage react states using react hooks. These are functions that hook us into React state and features from function components. Hooks don't work inside classes and it allows us to use React features without writing a class.

            14.3 The Prototypal Inheritance refers to a feature in javascript is used to add methods and properties in javascript objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we can use Object.getPrototypeOf and Object. In prototypical inheritance one objects inherits properties from another object.

            14.4 We never update the state directly because, If we update it directly, calling the setState() afterward may just replace the update we made. When we directly update the state, it does not change the state immediately. Instead, it creates a pending state transition, and accessing it after calling setState method will only return the present value. And we will lose control of the state across all components if we update directly.

            14.5 We can use the find() method that returns the first occurrence of an element in the array that satisfies the given predicate. The following code example demonstrates this by finding a product with the name Car.
            {/* var obj = [
            {name: 'Car', price: 1000, description: Toyota Allion },
            {name: 'Mobile', price: 500, description: Iphone 13 pro max },
            {name: 'Watch', price: 100, description: Apple Watch }
            ]; 
 
var found = obj.find(e => e.name === 'Car');*/}
            console.log(found);

            14.6 Unit testing involves automated testing individual components of the software application run by software developers to ensure that an application meets its requirements of its design and behaves as intended.
            The main purpose behind this is to check that all the individual parts are working as intended. A unit is known as the smallest possible component of software application that can be tested or compared. Generally, it has a few inputs and a single output.
        </div>
    );
};

export default Blogs;