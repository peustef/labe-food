import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const RestaurantTypeTabs = () => {

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div>

            <Tabs
                value={value}
                onChange={handleChange}
                textColor='primary'
                variant="scrollable"
                scrollButtons="auto"
                TabIndicatorProps={{ 
                    style: {
                        display: "none",
                    },
                  }}
                
            >
                <Tab label="Burger"  />
                <Tab label="Asiática" />
                <Tab label="Massas" />
                <Tab label="Saudável" />
                <Tab label="Vegetariana" />
                <Tab label="Japonesa" />
            </Tabs>
        </div>
    );
};

export default RestaurantTypeTabs;