import { css } from "@emotion/css";

export const commonDisplay = css`
  display: flex;
  align-itmes: center;
`;
export const fontStyle = css`
  font-weight: 700;
  line-height: 120%;
`;

export const footerSection = css`
  min-width:500px;
  padding:18px
  justify-content: center;
  margin-top: 79.8px;
  .product,
  .products-name,{
    text-align: center;
  }
  .product {
    color: #000;
    ${fontStyle}
    text-transform: uppercase;
  }
  .products-name {
    margin-top: 12px;
    color: #000;
    line-height: 120%;
    text-decoration-line: underline;
    text-transform: uppercase;
    margin-right: 24px;
  }
  .author-note {
    margin-top: 120px;
    .note,
    .note-description{
      text-align: center;
    }
    .note {
      ${fontStyle}
      text-transform: uppercase;
    }
    .note-description {
      font-size: 32px;
      line-height: 140%;
      margin: 16px 0;
      padding: 0px 200px;
      @media (max-width: 768px) {
        padding: 18px; 
      }
    }
    .author {
      color: #000;
      line-height: 120%;
      text-transform: capitalize;
      text-align: center;
    }
  }
`;

export const tabPanel = css`
  .tab-container {
    background-color: transparent;
    color: black;
    box-shadow: none;
    text-decoration: none;
  }
  .tab-container .Mui-selected,
  .tab-container .MuiTab-root,
  .tab-container .MuiTabs-indicator {
    font-size: 14px !important;
    align-items: center !important;
  }
  .tab-container .Mui-selected {
    color: black !important;
    ${fontStyle}
  }
  .tab-container .MuiTabs-indicator {
    background-color: black !important;
  }
  .tab-container .MuiTab-root {
    -webkit-align-items: start;
  }
`;

export const tabsDescription = css`
  color: #000;
  line-height: 20px;
  margin-top: 24px;
`;

export const cartSection = css`
  .cart-section {
    margin-top: 95px;
    .name,
    .description,
    .color,
    .price,
    .size,
    .sizeGuide,
    .sizeType,
    .learnMore {
      color: #000;
    }
    .name {
      font-size: 48px;
      width: 288px;
      line-height: 96%;
      letter-spacing: -1.92px;
      text-transform: uppercase;
      @media (max-width: 768px) {
        width: 440px;
      }
    }
    .description {
      line-height: 17px;
    }
    .color {
      padding-top: 24px;
      align-items: center;
      ${commonDisplay}
      gap: 8px;
      ${fontStyle}
      text-transform: uppercase;
    }
    .image {
      ${commonDisplay}
      cursor: pointer;
      padding-top: 8px;
      img {
        width: 41.8px;
        height: 47.824px;
      }
      .selected-image {
        margin: 0 4px;
        border: 1px solid #000;
      }
    }
    .price {
      ${fontStyle}
      padding-top: 8px;
      text-transform: uppercase;
    }
    .size {
      ${commonDisplay}
      margin-top: 24px;
      justify-content: space-between;
      ${fontStyle}
      text-transform: uppercase;
    }
    .sizeGuide {
      text-decoration-line: underline;
    }
    .sizeType {
      line-height: 120%;
      font-weight: 400;
    }
    .commonStyle {
      display: flex;
      gap: 8px;
    }
    .chipStyle,
    .sizeDisabled,
    .selectedSize {
      width: 78px;
      height: 30px;
      flex-shrink: 0;
      border-radius: 100px;
      background: var(--White, #fff);
    }
    .chipStyle,
    .sizeDisabled {
      border: 1px solid var(--Light-Grey, #e5e5e5);
    }
    .chipStyle {
      padding-left: 4px;
    }
    .sizeDisabled {
      color: #a6a6a6;
      position: relative;
    }
    .sizeDisabled::before {
      content: "";
      position: absolute;
      top: 0;
      left: 38px;
      width: 2px;
      height: 100%;
      transform: rotate(68deg);
      background-color: #a6a6a6;
    }
    .selectedSize {
      border: 1px solid var(--Bazaar-Black, #000);
      background: var(--Bazaar-Black, #000);
      color: #ffffff;
    }
    .addToBagStyle {
      flex-shrink: 0;
      border-radius: 100px;
      border: 0.999px solid var(--Bazaar-Black, #000);
      background: var(--Bazaar-Black, #000);
      color: var(--White, #fff);
      padding: 16px;
      line-height: 120%;
      text-transform: uppercase;
      margin-top: 24px;
    }
    .learnMore {
      line-height: 120%;
      margin-top: 24px;
    }
  }
  .footerSection {
    min-width: 500px;
    padding: 18px;
    text-align: center;
    justify-content: center;
    margin-top: 79.8px;
  }
  .footerSection .product,
  .footerSection .products-name {
    color: #000;
    text-align: center;
    ${fontStyle}
    text-transform: uppercase;
  }
  .footerSection .products-name {
    margin-top: 12px;
    text-decoration-line: underline;
    margin-right: 24px;
  }
  .footerSection .note {
    text-align: center;
    ${fontStyle}
    text-transform: uppercase;
  }
  .footerSection .note-description {
    text-align: center;
    font-size: 32px;
    line-height: 140%;
    margin: 16px 0;
    @media (max-width: 768px) {
      padding: 0;
      padding-left: 67px;
    }
  }
  .footerSection .author {
    color: #000;
    line-height: 120%;
    text-transform: capitalize;
    text-align: center;
  }
`;
