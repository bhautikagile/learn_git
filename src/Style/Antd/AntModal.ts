import { createGlobalStyle } from 'styled-components';

export const AntModal = createGlobalStyle`
    .ant-modal {
        /* Conform modal css ... */
        .ant-modal-confirm-btns {
            margin-top: 24px;
            .ant-btn {
                height: 38px;
                padding: 8px 24px;
                font-size: 14px;
                min-width: 110px;
            }
        }
        /* ... Conform modal css */
    }
`;
