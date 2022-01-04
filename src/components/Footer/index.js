import React from 'react'
import { FaFacebook,FaTwitter,FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinkTitle, FooterLinkWrapper, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Abouy Us</FooterLinkTitle>
                                <FooterLink to='/signin'>Hello</FooterLink>
                                <FooterLink to='/signin'>Contact</FooterLink>
                                <FooterLink to='/signin'>Messages</FooterLink>
                                <FooterLink to='/signin'>Chat</FooterLink>
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Abouy Us</FooterLinkTitle>
                                <FooterLink to='/signin'>Hello</FooterLink>
                                <FooterLink to='/signin'>Contact</FooterLink>
                                <FooterLink to='/signin'>Messages</FooterLink>
                                <FooterLink to='/signin'>Chat</FooterLink>
                            
                        </FooterLinkItems>

                    </FooterLinkWrapper>
                    
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Abouy Us</FooterLinkTitle>
                                <FooterLink to='/signin'>Hello</FooterLink>
                                <FooterLink to='/signin'>Contact</FooterLink>
                                <FooterLink to='/signin'>Messages</FooterLink>
                                <FooterLink to='/signin'>Chat</FooterLink>
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Abouy Us</FooterLinkTitle>
                                <FooterLink to='/signin'>Hello</FooterLink>
                                <FooterLink to='/signin'>Contact</FooterLink>
                                <FooterLink to='/signin'>Messages</FooterLink>
                                <FooterLink to='/signin'>Chat</FooterLink>
                            
                        </FooterLinkItems>
                        
                    </FooterLinkWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Dolla</SocialLogo>
                        <WebsiteRights>Dolla &copy; {new Date().getFullYear()} Allright reserved</WebsiteRights>

                        <SocialIcons>

                            <SocialIconLink href="//www.facebook.com" target="_blank" aria-label='Facebook'>
                                <FaFacebook/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label='Twitter'>
                                <FaTwitter/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label='Youtube'>
                                <FaYoutube/>
                            </SocialIconLink>


                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer

