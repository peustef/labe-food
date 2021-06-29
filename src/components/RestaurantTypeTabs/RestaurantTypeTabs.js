import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const RestaurantTypeTabs = () => {

    const [value, setValue] = useState(false);

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
                <Tab label="Burger" value="burger" />
                <Tab label="Asiática" value="asiatica" />
                <Tab label="Massas" value="massas" />
                <Tab label="Saudável" value="saudavel" />
                <Tab label="Vegetariana" value="vegetariana" />
                <Tab label="Japonesa" value="japonesa" />
            </Tabs>
        </div>
    );
};

export default RestaurantTypeTabs;