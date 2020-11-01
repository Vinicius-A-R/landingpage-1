import styled from 'styled-components';

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background-color: ${({ lightBg }) => (lightBg ? '#FFF' : '#101522')};
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};

  margin: 0 -16px -16px;
`;

export const InfoColumn = styled.div`
  flex: 1;
  padding: 0 16px;
  margin-bottom: 16px;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-basis: 100;
    justify-content: center;
    max-width: 100%;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 64px;

  @media screen and (max-width: 768px) {
    padding-bottom: 64px;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4b59f7')};
  font-size: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
  font-size: 48px;
  line-height: 1.1.%;
  margin-bottom: 24px;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 32px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;

export const ImgWrapper = styled.div`
  display: flex;
  max-width: 555px;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
  display: inline-block;
  padding-right: 0;
  max-width: 500px;
  border: 0;
  vertical-align: middle;
`;
