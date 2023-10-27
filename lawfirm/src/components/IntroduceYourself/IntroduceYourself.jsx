import React from 'react'
import style from './IntroduceYourself.module.css'

const IntroduceYourself = () => {
    return (
        <div className={style.wrapperContainer}>
            <div>
                <h1 className={style.mainHeading}>
                    Let’s Introduce <br /> Ourself
                </h1>
            </div>
            <div className={style.beginningWrapper}></div>
            <div>
                <h1 className={style.subHeading}>Criminal Lawyer</h1>
                <p className={style.mainDescription}>
                    Amet minim mollit non deserunt ullamco est <br /> sit aliqua
                    dolor do amet sint. Velit officia consequatduis <br /> enim
                    velit mollit Exercitation.
                </p>
            </div>
        </div>
    )
}

export default IntroduceYourself
