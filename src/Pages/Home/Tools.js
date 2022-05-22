import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='container max-w-7xl'>
            <h2 className='text-4xl font-bold text-center mb-10'>Tools</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools.map(tool => <Tool key={tool._id} tool={tool} />).slice(0, 6)
                }
            </div>
        </div>
    );
};

export default Tools;