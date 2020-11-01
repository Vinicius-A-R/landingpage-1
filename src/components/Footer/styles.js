import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FaMagento } from 'react-icons/fa';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 4rem 0 2rem 0;
  background-color: #101522;
`;

export const FooterSubscription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 24px;
  margin-bottom: 24px;

  color: #fff;
  text-align: center;
`;

export const FooterSubHeading = styled.div`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubText = styled.div`
  font-size: 20px;
  margin-bottom: 24px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 820px) {
    width: 80%;
    flex-direction: column;
  }
`;

export const FormInput = styled.input`
  margin-right: 8px;
  padding: 8px 16px;

  font-size: 16px;
  border: 3px solid #fff;
  border-radius: 2px;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  margin-top: 1.5rem;

  color: #fff;

  @media screen and (max-width: 820px) {
    padding-top: 2rem;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 160px;
  margin: 1rem;
  text-align: left;

  @media screen and (max-width: 420px) {
    width: 100%;
    margin: 0;
    padding: 8px;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 1rem;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  margin-bottom: 0.5rem;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  width: 100%;
  max-width: 1000px;

  color: #fff;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: start;

  cursor: pointer;
  font-size: 2rem;
  color: #fff;
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 8px;
`;

export const WebsiteRights = styled.small`
  margin: 1rem 0;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;
