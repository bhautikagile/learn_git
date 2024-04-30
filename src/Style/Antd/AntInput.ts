import { createGlobalStyle } from 'styled-components';
import { theme } from '../Theme';

export const AntInput = createGlobalStyle`
    /* Form style ... */
    .ant-form {
        display: flex;
        flex-flow: row wrap;
    }
    /* ... Form style */

    .ant-form-item {
        .ant-input-prefix {
            margin-inline-end: 10px;
            .anticon {
                color: ${theme?.color?.inputPrefixIconClr}
            }
        }
    }
`;
