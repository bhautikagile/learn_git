import { createGlobalStyle } from 'styled-components';

export const AntButton = createGlobalStyle`
    .ant-btn {
        &:not(.ant-btn-icon-only, .ant-input-search-button) {
            min-width: 148px;
        }
    }
`;
