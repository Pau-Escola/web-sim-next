import React from 'react';
import DataBandBox from './DataBandBox';

const DataBand = ( {dataArray} ) => {
    return (
            <div className="shadow-md mt-10 bg-primary">
            <div className="flex justify-around items-center space-x-4">
                
            {dataArray.map((data, index) => (
                            <DataBandBox key={index} data={data} />
                    ))}
                </div>
            </div>
    );
};

export default DataBand;
