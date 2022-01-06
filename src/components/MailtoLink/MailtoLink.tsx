import React from 'react'
import { FooterMailtoLink } from './MailtoLink.elements'

export interface Mailto{
    mailto: string,
    label: string
}

export const MailtoLink: React.FC<Mailto> = (props) => {
    return (
        <FooterMailtoLink
            to='#'
            onClick={(e) => {
                window.location.href = props.mailto;
                e.preventDefault();
            }}
        >
            {props.label}
        </FooterMailtoLink>
    )
}

export default MailtoLink
