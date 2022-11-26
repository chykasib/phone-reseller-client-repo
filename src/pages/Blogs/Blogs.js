import React from 'react';
import { useTitle } from '../../Hooks/UseTitle';

const Blogs = () => {
    useTitle('blogs')

    return (
        <div className='m-10'>
            <p className='text-3xl font-bold text-center'> Some Questions And Answers</p>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    <small className='text-3xl font-bold my-6'>Question:1</small><p className='text-3xl my-6'>What are the different ways to manage a state in a React application?</p>
                </div>
                <div className="collapse-content">
                    <h3 className='text-2xl'>The Four Kinds of React State to Manage</h3>
                    <p>When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

                        There are four main types of state you need to properly manage in your React apps:</p>
                    <li>Local state</li>
                    <li>Global state</li>
                    <li>Server state</li>
                    <li>URL state</li>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    <small className='text-3xl font-bold'>Question:2</small><p className='text-3xl'>How does prototypical inheritance work?</p>
                </div>
                <div className="collapse-content">
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    <small className='text-3xl font-bold'>Question:3</small><p className='text-3xl'>What is a unit test? Why should we write unit tests?</p>
                </div>
                <div className="collapse-content">
                    <p> <b>Unit Testing</b> is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>
                    <br />
                    <p> <b>They enable you to catch bugs early in the development process.</b> Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    <small className='text-3xl font-bold'>Question:4</small><p className='text-3xl'>React vs. Angular vs. Vue?</p>
                </div>
                <div className="collapse-content">
                    <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                </div>
            </div>

        </div>



    );
};

export default Blogs;