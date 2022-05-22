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
        <section className='container max-w-7xl'>
            <div className='mb-10 text-center'>
                <h4 className="text-4xl text-primary font-bold">Tools</h4>
                <h2 className='text-xl font-normal'>Electronic Tools</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools.map(tool => <Tool key={tool._id} tool={tool} />).slice(0, 6)
                }
            </div>
        </section>
    );
};

export default Tools;