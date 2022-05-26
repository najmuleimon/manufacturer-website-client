import React from 'react';
import Footer from '../Shared/Footer';

const Blogs = () => {
    return (
        <div>
            <div className='container max-w-7xl py-20'>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">14.1 How will you improve the performance of a React Application?</h2>
                            <p className='text-base font-normal text-justify'> To improve the performance of a React Application we need to keep local component state where necessary, to prevent unnecessary re-renders we have to use memorizing react components, code-splitting using dynamic import(), with the concept of windowing, render the DOM only the visible portion to the user, we can use lazy loading images.</p>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">14.2 What are the different ways to manage a state in a React application?</h2>
                            <p className='text-base font-normal text-justify'>The state is an object that holds information about a certain react component. There are four main types of state we need to properly manage in our React application: local, global, server, URL state. We can manage react states using react hooks. These are functions that hook us into React state and features from function components. Hooks don't work inside classes and it allows us to use React features without writing a class.</p>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">14.3 How does prototypical inheritance work?</h2>
                            <p className='text-base font-normal text-justify'>The Prototypal Inheritance refers to a feature in javascript is used to add methods and properties in javascript objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we can use Object.getPrototypeOf and Object. In prototypical inheritance one objects inherits properties from another object.</p>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">14.4 Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                            <p className='text-base font-normal text-justify'>We never update the state directly because, If we update it directly, calling the setState() afterward may just replace the update we made. When we directly update the state, it does not change the state immediately. Instead, it creates a pending state transition, and accessing it after calling setState method will only return the present value. And we will lose control of the state across all components if we update directly.</p>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">14.5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                            <p className='text-base font-normal text-justify'>We can use the find() method that returns the first occurrence of an element in the array that satisfies the given predicate. The following code example demonstrates this by finding a product with the name Car.
                                <pre>{`
var products = [
    {name: 'Car', price: 1000, description: Toyota Allion },
    {name: 'Mobile', price: 500, description: Iphone 13 pro max },
    {name: 'Watch', price: 100, description: Apple Watch }
]; 
    
var found = obj.find(e => e.name === 'Car');
console.log(found);
    `}

                                </pre>
                            </p>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">14.6 What is a unit test? Why should write unit tests?</h2>
                            <p className='text-base font-normal text-justify'>Unit testing involves automated testing individual components of the software application run by software developers to ensure that an application meets its requirements of its design and behaves as intended. <br />
                                The main purpose behind this is to check that all the individual parts are working as intended. A unit is known as the smallest possible component of software application that can be tested or compared. Generally, it has a few inputs and a single output.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blogs;