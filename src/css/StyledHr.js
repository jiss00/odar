
import styled , {css} from 'styled-components';
import {useState} from 'react';
import { useEffect } from 'react';
import StyledSection from '../components/StyledSection';


const StyledHr = styled.hr`
    position: absolute;
    margin : 0px;

    width: ${(props) => props.width ? props.width: "283px"};
    height: ${(props) => props.height ? props.height: "auto"};
    top: ${(props) => props.top ? props.top: "60px"};
    left: ${(props) => props.left ? props.left: " 24px"};

    color: rgba(217, 217, 217, 1);
    border: 1px solid rgba(217, 217, 217, 1);
`

export default StyledHr;