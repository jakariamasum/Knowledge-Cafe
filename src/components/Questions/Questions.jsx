import React from 'react';

const Questions = () => {
    return (
        <div>
            <h1 className="font-semibold text-3xl mt-7">Diffrence between props and state</h1>
            <div className="overflow-x-auto my-5">
                <table className='table w-full border-collapse bg-sky-300 '>
                    <tr>
                        <th>Props</th>
                        <th>State</th>
                    </tr>
                    <tr className='hover'>
                        <td>Props can not be modify</td>
                        <td>State can be modify</td>
                    </tr>
                    <tr>
                        <td>Props makes component reusable</td>
                        <td>State can not make component reusable</td>
                    </tr>
                    <tr className='hover'>
                        <td>Props are passed outside a components</td>
                        <td>State are passed inside a components</td>
                    </tr>
                    <tr>
                        <td>Both functional and class components can benefit from the use of props</td>
                        <td>Only class components can use state</td>
                    </tr>
                </table>
            </div>
            <div>
                <h1 className='font-semibold text-3xl mb-5'>How does useState use?</h1>
                <p>useState returns two things. One is value of a variable and another a setFunction to set the value. Before using useState we need to give default value inside the useState hook. Suppose if we want our output a collection or an array then initial value should be empty array. Let's look an example...<br />
                    <span className='text-center text-blue-600 italic'> const [shop,setShop]=useState([]);</span> <br />
                    here shop is a variable and setShop is the function to set the shop variable. The output of shop should be an array as we use an empty array for initial value.
                </p>
            </div>
            <div className='my-5'>
                <h1 className="font-semibold text-3xl mb-3">What is the use of useEffect</h1>
                <p>The useState hook is used for storing variables that are part of your application's state and will change as the user interacts with your website.It also use to load the data.
                    <br />
                    The useEffect hook allows components to react to lifecycle events such as mounting to the DOM, re-rendering, and unmounting.</p>
            </div>
            <div>
                <h1 className="font-semibold text-3xl mb-3">How does React works?</h1>
                <p> While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM. <br />
                Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it's worth keeping a DOM tree in it to speed up its manipulation.</p>
            </div>
        </div>
    );
};

export default Questions;