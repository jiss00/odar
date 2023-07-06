import styled , {css} from 'styled-components';
import {useState} from 'react';
import { useEffect } from 'react';
import StyledSection from './StyledSection';


const StyledSpan = styled.span`
    position: absolute;
    // 부모 기준
    box-sizing: border-box;
    width: ${(props) => props.width ? props.width: "auto"};
    height: ${(props) => props.height ? props.height: "auto"};
    top: ${(props) => props.top ? props.top: "auto"};
    left: ${(props) => props.left ? props.left: "auto"};

    



    ${(props) =>
        props.type ==='recruitment' &&
        css`
        
        width: 60px;
        height: 30px;
        top: 21px;
        left: 33px;
        
        background: rgba(91, 142, 49, 1);
        border-radius: 10px;

        
        color:white;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: center;
    `}

    ${(props) =>
        props.type ==='title' && css`
        width: 200px;
        height: 25px;
        top: 23px;
        left: 113px;
        
        color: black;
        font-family: Pretendard;
        font-size: 18px;
        font-weight: 800;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;

    `}


    ${(props) => props.type ==='body' && css`
        top : 24px;
        left : 24px;
        width : 280px;

        font-family: Pretendard;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;

    `}

    ${(props) => props.type === 'footer' && css`
        position: fixed;
        width: 200px;
        height: 50px;
        top: 759px;
        left: 162px;
        padding: 15px 69px 15px 68px;
        border-radius: 15px;

        background: rgba(91, 142, 49, 1);

        font-family: Pretendard;
        font-size: 18px;
        font-weight: 800;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;

    `}

    ${(props) => props.type === 'image' && css`
        position: absolute;
        width: 20px;
        height: 20px;
        top: ${(props) => props.top};
        left: 56px;
        
        
    `}


    ${(props) => props.type ==='write' && css`
        width: ${(props) => props.width ? props.width: "auto"};
        height: ${(props) => props.height ? props.height: "auto"};
        top: ${(props) => props.top ? props.top: "auto"};
        left: ${(props) => props.left ? props.left: "auto"};
    
        font-family: Pretendard;
        font-size: 12px;
        font-weight: 800;
        line-height: 14px;
        letter-spacing: 0em;
        text-align: left;
        
        color: rgba(92, 92, 92, 1);

    `}

`;

export default StyledSpan;