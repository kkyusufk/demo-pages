import React from "react";
import classnames from 'classnames';
import { motion } from 'framer-motion';

import "./filter.scss";

const filters = ['Branding', 'Packaging', 'Communication', 'User Experience']

const filterVariants = {
  active : { y: 0, backgroundColor: '#333333' },
  inActive: { y: 0, backgroundColor: '#DDDDDD' },
  hover: { y: -5, backgroundColor: '#DDDDDD' }
}

const Filter = ({ active, toggleActive }) => {
  return (
    <motion.div className="filter-container">
      {filters.map((filter, index) => (
        <motion.button
        key={index}
        className={classnames("filter-buttons", {"active-filter": active === filter })} 
        onClick={() => toggleActive(filter)}
        variants = {filterVariants}
        // animate={active === filter ? 'active' : 'inActive'} 
        whileTap={{ y: 3 }}  
        whileHover="hover"
        >
          {filter}
        </motion.button>
      ))}
    </motion.div>
  );
};

export { Filter };
