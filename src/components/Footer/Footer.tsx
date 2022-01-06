import React from 'react'
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText
} from './Footer.elements'
import MailtoLink from '../MailtoLink/MailtoLink'

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    If you wish to contact me directly, please do by clicking this link:
                </FooterSubHeading>
                <FooterSubText>
                    <MailtoLink mailto="mailto:arturporowski@hotmail.com?subject=Github%20Contact%3A" label="Artur Porowski" />
                </FooterSubText>
            </FooterSubscription>
        </FooterContainer>
    )
}

export default Footer
