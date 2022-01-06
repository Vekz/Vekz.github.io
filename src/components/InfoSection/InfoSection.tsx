import React from 'react'
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.elements'
import { Container } from '../../globalStyles'

export interface IInfoSection {
    lightBg: boolean,
    imgStart: boolean,
    lightTopLine: boolean,
    lightText: boolean,
    lightTextDesc: boolean,
    topLine: string,
    headline: string,
    description: string,
    start: boolean,
    img: string,
    alt: string
}

export const InfoSection: React.FC<{props: IInfoSection}> = ({props}) => {

    return (
        <>
            <InfoSec lightBg={props.lightBg}>
                <Container>
                    <InfoRow imgStart={props.imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={props.lightTopLine}>{props.topLine}</TopLine>
                                <Heading lightText={props.lightText}>{props.headline}</Heading>
                                <Subtitle lightTextDesc={props.lightTextDesc}>{props.description}</Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={props.start}>
                                <Img src={props.img} alt={props.alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>    
        </>
    )
}

export default InfoSection
