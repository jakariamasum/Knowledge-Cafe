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
            
        </div>
    );
};

export default Questions;