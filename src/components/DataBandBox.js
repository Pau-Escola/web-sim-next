import React from 'react';

const DataBandBox = ( {data} ) => {
    return (
                <div className="flex flex-col items-center p-3">
                    <h2 className="text-l sm:text-xl md:text-2xl lg:text-6xl font-bold mb-4 text-white">
                    {data[0]}
                </h2>
                <h3 className="text-l sm:text-xl md:text-2xl lg:text-2xl font-bold mb-4 text-white">
                    {data[1]}
                </h3>
                </div>
    );
};

export default DataBandBox;
