import styled from 'styled-components';
import Testimonials02 from '../../images/Testimonials02.png';

export const CreativeSection = styled.div `
    height: 500px;
    background: url(${Testimonials02});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: relative;
    `
    export const Creativeinfo = styled.div `
    padding-top: 100px;
    width: 50%;
    float: right;
    `
    export const CreativeTitle = styled.h2 `
    font-weight: bold;
    font-size: 50px
    `
    export const CreativeSpan = styled.span `
    font-weight: normal
    `

    export const CreativeDir = styled.h4 `
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px
    `
    export const InfoDesc = styled.p `
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8
    `
    export const Anchor = styled.a `
    text-decoration: none
    `
