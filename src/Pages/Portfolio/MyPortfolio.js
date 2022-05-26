import React from 'react';
import Footer from '../Shared/Footer';

const MyPortfolio = () => {
    return (
        <div>
            <div className='container max-w-7xl py-20'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h1 className='text-xl font-semibold text-primary mb-5'>My Portfolio</h1>
                        <div className="shadow rounded-lg p-4 mb-5">
                            <h3 className='text-lg font-semibold text-primary'><span className='text-neutral'>Name:</span> Md. Najmul Huda Eimon</h3>
                            <h3 className='text-lg font-semibold text-primary'><span className='text-neutral'>Email address:</span> najmul.eimon@gmail.com</h3>
                        </div>

                        <div className="shadow rounded-lg p-4 mb-5">
                            <h3 className='text-lg font-semibold pb-4'>Education: </h3>
                            <ol className='list-decimal ml-10'>
                                <li><span className='font-semibold'>Bachelor of Science:</span> BSc in CSE (2019)</li>
                                <li><span className='font-semibold'>Higher Secondary Certificate:</span> Shaheed Ramiz Uddid Cantonment College (2014)</li>
                                <li><span className='font-semibold'>Secondary School Certificate:</span> Banani Bidyaniketan (2012)</li>
                            </ol>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div className="shadow rounded-lg p-4">
                                <h3 className='text-lg font-semibold pb-4'>Skills</h3>
                                <ol className='list-decimal ml-10'>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Bootstrap</li>
                                    <li>Tailwind CSS</li>
                                    <li>Javascript(es6)</li>
                                    <li>React Js</li>
                                    <li>Git</li>
                                    <li>Firebase</li>
                                    <li>Node Js</li>
                                    <li>Mongo DB</li>
                                    <li>Express Js</li>
                                </ol>
                            </div>

                            <div className="shadow rounded-lg p-4">
                                <h3 className='text-lg font-semibold pb-4'>My Projects</h3>
                                <ol className='list-decimal ml-10'>
                                    <li><a href="https://warehouse-20bde.web.app/" className='link link-hover text-primary'>Warehouse Management Website</a></li>
                                    <li><a href="https://gym-trainer-e2bb6.web.app" className='link link-hover text-primary'>Personal Training Website</a></li>
                                    <li><a href="https://rewatch-review-najmul.netlify.app" className='link link-hover text-primary'>Product Review Website</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyPortfolio;