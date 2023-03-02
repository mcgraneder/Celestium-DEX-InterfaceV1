import React from "react";
import styled from "styled-components";
import { ArrowLeft } from "react-feather";

export const PageContainer = styled.div`
  font-family: SuisseIntl, Helvetica, Arial, sans-serif;
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
`;
export const PageWrapper = styled.div`
  // margin: 0;
  // box-sizing: border-box;
  // width: 100%;
  // display: flex;
  // flex-wrap: wrap;
`;

export const AboutPageContentsConainer = styled.div`
  margin-top: -1px;
  min-height: calc(100vh - 137px);
  padding-top: 1px;
  display: block;
`;
export const AboutPageContentsWrapper = styled.div`
  margin-top: 124px;
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Title = styled.h1`
  font-size: 27px;
  margin-bottom: 15px;
  font-family: SuisseIntl, Helvetica, Arial, sans-serif;
  font-weight: bold;
  line-height: 1.2;
  display: block;
  color: White;
`;
export const Text = styled.p`
  margin-bottom: 23px;
  font-size: 17px;
  font-family: SuisseIntl, Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: #adadad;

  a {
    text-decoration: none;
    color: rgb(13, 94, 209);
  }

  span {
    text-decoration: none;
    color: orange;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  margin-top: 48px;
  align-items: center;
`;

export const LeftIconContainer = styled.span`
  display: inline-flex;
  font-size: 50px;
  align-items: center;
  border-right: 2px solid White;
  padding-right: 25px;
`;
export const Icon = styled.img`
  width: 2.32692em;
  font-size: inherit;
  fill: currentColor;
  height: 1em;
  display: inline-block;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
  pointer-events: none;
  overflow: hidden;
`;

export const RightIconContainer = styled.span`
  display: inline-flex;
  font-size: 42px;
  align-items: center;
  padding-top: 2px;
  padding-left: 25px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 25px;
  justify-content: space-between;
`;
export const BackContainer = styled.div`
  min-width: 72px;
  display: flex;
  justify-content: left;

  &:hover {
    cursor: pointer;
  }
`;

export const BackArrow = styled(ArrowLeft)`
  font-size: 1.125rem;
  lex: 0 0 auto;
  color: White;
  margin-right: 8px;
`;

export const HeaderText = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  color: White;
  // line-height: 25px;
`;
const About = () => {
  return (
    <PageContainer>
      <AboutPageContentsConainer>
        <AboutPageContentsWrapper>
          <Title>Switch Your Metamask Account Now</Title>
          <Text>
            Users may have multple wallets so each time you visit with a new wallet you will be prompted to verify it
           before being authenicated

          </Text>
          <Title>Is This Better?</Title>
          <Text>
           cool for allplications where email is valuable to relay information like updates, 3etc
          </Text>
          <Title>How Quick Is It?</Title>
          <Text>
            once you initially signed up with your email and password, you can use that to login or do it the webb3 way by veifying a message. no more annoying password managers
          </Text>
        </AboutPageContentsWrapper>
      </AboutPageContentsConainer>
    </PageContainer>
  );
};

export default About;
