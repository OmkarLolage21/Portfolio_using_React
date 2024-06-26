import React from 'react'
import styled from 'styled-components';
import HeroBgAnimation from "../HeroBgAnimation";
import {Bio} from "../../data/constants";
import Typewriter from 'typewriter-effect';
import Profile from "../../images/profile.jpg";
const MainContainer=styled.div`
background-color:${({theme})=>theme.card_light};
display:flex;
justify-content:center;
position:relative;
padding:80px 30px;
@media screen and(max-width:960px){
  padding:66px 16px;
}
@media screen and(max-width:640px){
  padding:32px 16px;
}
z-index:1;
clip-path:polygon(0 0,100% 0,100% 100%,70% 95%,0 100%);
`;

const MainBg=styled.div`
position: absolute;
display: flex;
justify-content: end;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
max-width: 1360px;
overflow: hidden;
padding: 0 30px;
top: 50%;
left: 50%;
-webkit-transform: translateX(-50%) translateY(-50%);
transform: translateX(-50%) translateY(-50%);
  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;
const MainInnerContainer=styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
max-width: 1100px;

@media (max-width: 960px) {
    flex-direction: column;
  }
`;
const MainLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const MainRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;
const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;
const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    // background: hsla(271, 100%, 50%, 1);
    // background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    // background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    // background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: rgb(37,32,213);
    background: linear-gradient(90deg, rgba(37,32,213,1) 5%, rgba(35,234,235,1) 68%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;

const Titles = styled.div`
font-weight: 700;
font-size: 50px;
color: ${({ theme }) => theme.text_primary};
line-height: 68px;
@media (max-width: 960px) {
  text-align: center;
}

@media (max-width: 640px) {
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 8px;
}
`;
const Image=styled.img`
position: relative;
width: 85%;
height: 100%;
max-width: 400px;
max-height: 400px;
border-radius: 50%;
border: 2px solid 
#23eaeb};

@media (max-width: 768px) {
  max-width: 400px;
  max-height: 400px;
}

@media (max-width: 640px) {
  max-width: 280px;
  max-height: 280px;
}
`;
const SubHead = styled.div`
font-size: 20px;
  line-height: 32px;
  margin-bottom: 27px;
  margin-top: 15px;
  color: #00aeef;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const HeroSec = () => {
  return (
    <div id="about">
      <MainContainer>
        <MainBg>
        <HeroBgAnimation />
        </MainBg>
        <MainInnerContainer>
          <MainLeftContainer>
            <Titles>Hello, I am <br/> {Bio.name} </Titles>
            <SubHead>Finalist @Barclays Hack-O-Hire'24</SubHead>
            <TextLoop >
              I am a
              <Span style={{color: "#00aeef"}}>
                <Typewriter options={
                  {
                    strings:Bio.roles,
                    autoStart:true,
                    loop:true
                  }
                }/>
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="display">Check For Resume</ResumeButton>
          </MainLeftContainer>
          <MainRightContainer>
            <Image src={Profile} alt="Profile Image"></Image>
          </MainRightContainer>
        </MainInnerContainer>
      </MainContainer>
    </div>
  )
}

export default HeroSec;