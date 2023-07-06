
import styled , {css} from 'styled-components';
import {useState} from 'react';
import { useEffect } from 'react';

const StyledSection = styled.section`
    border: 3px solid rgba(162, 192, 138, 1);
    position:fixed;
    box-sizing: border-box;
    border-radius: 15px;
    width: ${(props) => props.width ? props.width: "auto"};
    height: ${(props) => props.height ? props.height: "auto"};
    top: ${(props) => props.top ? props.top: "auto"};
    left: ${(props) => props.left ? props.left: "auto"};
    
    ${(props) => props.type === 'defalut' && css`
        border-radius: 0px;
        border : 0px;
        
    `}

    ${(props) =>
        props.type ==='1' && 
        css`
        background: linear-gradient(0deg, #EDF1D5, #EDF1D5),
        linear-gradient(0deg, #A2C08A, #A2C08A);
        width: ${(props) => props.width ? props.width: "330px"};
        height: ${(props) => props.height ? props.height: "166px"};
        top: ${(props) => props.top ? props.top: "148px"};
        left: ${(props) => props.left ? props.left: "32px"};

        `}
    
    ${(props) =>
        props.type ==='2' &&
        css`
        width: ${(props) => props.width ? props.width: "330px"};
        height: ${(props) => props.height ? props.height: "425px"};
        top: ${(props) => props.top ? props.top: "324px"};
        left: ${(props) => props.left ? props.left: "32px"};
        padding: 24px 6px 301px 24px;
        background: white;
        `}
    
    ${(props) =>
        props.type ==='3' &&
        css`
        width: ;
        height: ;
        top: ;
        left: ;
        width: ${(props) => props.width ? props.width: "119px"};
        height: ${(props) => props.height ? props.height: "50px"};
        top: ${(props) => props.top ? props.top: "759px"};
        left: ${(props) => props.left ? props.left: "32px"};
        padding: 12px 0px 13px 0px;
        
        background: linear-gradient(0deg, #EDF1D5, #EDF1D5),
        linear-gradient(0deg, #A2C08A, #A2C08A);


        `}
`;

export default StyledSection;