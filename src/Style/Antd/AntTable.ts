import { createGlobalStyle } from 'styled-components';

export const AntTable = createGlobalStyle`
    .ant-table-wrapper {
        .ant-table {
            scrollbar-color: inherit;

            th.ant-table-cell {
                padding: 16px 8px;
            }
            .ant-table-cell {
                .ant-btn-icon-only {
                    width: 32px;
                    height: 32px;
                }
                &.action-cell {
                    .anticon {
                        font-size: 16px;
                    }
                }
            }
            .action-cell {
                text-align: center;
            }
        }
    }
`;
