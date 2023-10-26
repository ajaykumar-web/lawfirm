import React from 'react'
import style from './HeroSection.module.css'
import { ReactComponent as HeroImage } from '../../assets/heroImage.svg'
import { ReactComponent as Message } from '../../assets/message.svg'

const HeroSection = () => {
    return (
        <div className={style.wrapperContainer}>
            <div>
                <h1 className={style.mainHeading}>
                    You don’t have to <br />
                    <b>Fight them Alone.</b>
                </h1>
                <p className={style.mainDescription}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    blandit, <br /> curabitur sodales conubia ut inceptos
                    faucibus himenaeos tortor <br /> eget, hac massa gravida
                    arcu interdum proin curae.
                </p>
                <div className={style.talkInfo}>
                    <Message className={style.messageImage} />
                    <input
                        type="email"
                        placeholder="Enter your eamil address"
                        className={style.emailAddress}
                    />
                    <button type="button" className={style.letsTalk}>
                        Let’s Talk
                    </button>
                </div>
            </div>
            <div>
                <HeroImage className={style.mainImage} />
            </div>
        </div>
    )
}

export default HeroSection
