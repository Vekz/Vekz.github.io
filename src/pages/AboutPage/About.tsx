import React from 'react'
import InfoSection from '../../components/InfoSection/InfoSection'
import * as data from './Data'

export const About = () => {
    return (
        <>
            <InfoSection props={data.aboutPageObjOne}/>
            <InfoSection props={data.aboutPageObjTwo}/>
        </>
    )
}

export default About