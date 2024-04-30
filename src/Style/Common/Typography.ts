import { createGlobalStyle } from 'styled-components';

import { responsive } from './Mixin';
import { theme } from '../Theme';

export const Typography = createGlobalStyle`
/* Fonts Size */

    h1 {
        font-size: 48px;
    }

    h2 {
        font-size: 34px;
    }

    h3 {
        font-size: 26px;
    }

    h4 {
        font-size: 22px;
    }

    h5 {
        font-size: 18px;
    }
    
    h6 {
        font-size: 16px;
    }

    p {
        font-size: 14px;
        color: ${theme?.font?.family?.inter};
    }

    ${responsive('sm')`
        h1 {
            font-size: 38px;
        }

        h2 {
            font-size: 28px;
        }

        h3 {
            font-size: 24px;
        }

        h4 {
            font-size: 20px;
        }

        h5 {
            font-size: 16px;
        }

        p {
            font-size: 16px;
        }
    `}

`;
