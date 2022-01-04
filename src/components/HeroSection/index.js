import React,{useState} from 'react'
import { HeroContainer,HeroBg,VideoBg, HeroP,HeroContent,HeroH1,HeroBtnWrapper,ArrowForward,ArrowRight } from './HeroElements'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'

function HeroSection() {
    const [hover,setHover] = useState(false)
    const onHover =()=>{
        setHover(!hover);
    };


    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hello Worl</HeroH1>
                <HeroP>
                    Ut sunt irure nisi commodo. Nulla reprehenderit laborum do non tempor cillum aliqua voluptate. Dolore duis nisi sunt ex sunt laborum labore sunt occaecat excepteur mollit. Fugiat ex dolore pariatur non laboris aliquip.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave = {onHover} primary='true' dark='true'>
                        Get Started {hover? <ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
