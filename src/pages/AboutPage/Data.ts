import { IInfoSection } from "../../components/InfoSection/InfoSection"

export const aboutPageObjOne: IInfoSection = {
    lightBg: false,
    imgStart: false,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    topLine: "This is a TopLine",
    headline: "This is a Headline",
    description: "This is a Description",
    start: false,
    img: 'https://artlogic-res.cloudinary.com/w_800,h_800,c_fill,f_auto,fl_lossy/ws-morettigallery/usr/images/news/main_image/93/screenshot-2019-01-14-10.49.14.png',
    alt: 'Image'
}

export const aboutPageObjTwo: IInfoSection = {
    lightBg: true,
    imgStart: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: "This is a TopLine #2",
    headline: "This is a Headline #2",
    description: "This is a Description #2",
    start: true,
    img: 'https://artlogic-res.cloudinary.com/w_800,h_800,c_fill,f_auto,fl_lossy/ws-morettigallery/usr/images/news/main_image/93/screenshot-2019-01-14-10.49.14.png',
    alt: 'Image'
}