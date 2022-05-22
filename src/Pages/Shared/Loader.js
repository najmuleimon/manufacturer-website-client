import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-80">
            <div className="w-24 h-24 border-l-2 border-primary rounded-full animate-spin"></div>
        </div>
    );
};

export default Loader;