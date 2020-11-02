import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PricingSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 100px 0 160px;
  background-color: #4b59f7;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 30px;
  }
`;

export const PricingHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
  }
`;

export const PricingCard = styled(Link)`
  width: 280px;
  height: 500px;

  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  background-color: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    color: #1c2237;
    transform: scale(1.1);
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #fff;
  height: 500px;
  padding: 24px;
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
`;

export const PricingCardPlan = styled.div`
  font-size: 24px;
  margin-bottom: 4px;
`;

export const PricingCardCost = styled.div`
  font-size: 42px;
`;

export const PricingCardLength = styled.div`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const PricingCardFeatures = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #a9b3c1;
  margin: 16px 0 32px;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 8px;
`;
