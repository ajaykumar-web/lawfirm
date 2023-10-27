import React from 'react'
import style from './WhyChooseUs.module.css'
import ChooseUsCard from '../ChooseUsCard/ChooseUsCard'

const WhyChooseUs = () => {
    return (
        <>
            <h1 className={style.mainHeading}>Why Choose Us</h1>
            <div className={style.wrapperContainer}>
                <ChooseUsCard heading={'98% Success Rate'} />
                <ChooseUsCard heading={'100% Success Rate'} />
                <ChooseUsCard heading={'98% Success Rate'} />
            </div>
        </>
    )
}

export default WhyChooseUs
