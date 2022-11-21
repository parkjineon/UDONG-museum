import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {

-webkit-box-sizing: border-box; 
/* 크롬 border-box로 변경 */

}
    html, body, #root {
        height:100%;
        background-color:${(props) => props.theme.colors.main} ;
        
    }
    body {
        /* margin:0px 120px; */
        margin:0px;
        font-family: 'Noto Sans KR', sans-serif;
    }
`;

export default GlobalStyle;
