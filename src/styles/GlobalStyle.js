import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    * {
        box-sizing : border-box;
        &::-webkit-scrollbar {
            display: none;
          }
        
          -ms-overflow-style: none; /* 인터넷 익스플로러 */
          scrollbar-width: none; /* 파이어폭스 */
    }
    body {
        overflow : ${({ theme }) => theme.overflow};
    }
`;

export default GlobalStyle;
