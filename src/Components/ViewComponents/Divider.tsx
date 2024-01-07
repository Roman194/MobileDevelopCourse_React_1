import React from 'react'
import appearance from './Divider.module.css'

const Divider: React.FC = ({white}) => {
    const className = `${appearance.divider} ${white ? appearance.white : ''}`;
    return <div className={className} />;
};

export default Divider;