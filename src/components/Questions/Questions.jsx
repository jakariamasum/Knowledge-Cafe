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
            
        </div>
    );
};

export default Questions;