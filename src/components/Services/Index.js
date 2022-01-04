import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements'

import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-6.svg'
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo totam odio officia commodi natus! Nisi modi nesciunt dolores aut animi ex maiores, quae molestiae. Ipsam dignissimos non tenetur neque harum?
                    </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo totam odio officia commodi natus! Nisi modi nesciunt dolores aut animi ex maiores, quae molestiae. Ipsam dignissimos non tenetur neque harum?
                    </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Premium Benefit</ServicesH2>
                    <ServicesP>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo totam odio officia commodi natus! Nisi modi nesciunt dolores aut animi ex maiores, quae molestiae. Ipsam dignissimos non tenetur neque harum?
                    </ServicesP>
                </ServicesCard>
                
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
