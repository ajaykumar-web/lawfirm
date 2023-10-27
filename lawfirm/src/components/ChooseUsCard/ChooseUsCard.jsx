import React from 'react'
import style from './ChooseUsCard.module.css'
import { ReactComponent as SuccessRate } from '../../assets/successRate.svg'

const ChooseUsCard = ({ heading }) => {
    return (
        <div className={style.cardWrapper}>
            <SuccessRate />
            <h4 className={style.subHeading}>{heading}</h4>
            <p className={style.subDescription}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className={style.btnReadMore}>Read More</button>
        </div>
    )
}

export default ChooseUsCard
