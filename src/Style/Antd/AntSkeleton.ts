import { createGlobalStyle } from 'styled-components';

export const AntSkeleton = createGlobalStyle`
    .ant-skeleton {
        .ant-skeleton-content {
            .ant-skeleton-title {
                height: 35px;
            }
        }
        &.input-label {
            .ant-skeleton-paragraph {
                li {
                    border-radius: 8px;
                }
            }
        }
        &.ant-skeleton-element {
            .ant-skeleton-input {
                height: 54px;
                border-radius: 40px;
            }
            .ant-skeleton-button {
                height: 54px;
                min-width: 156px;
                border-radius: 40px;
            }
        }
        &.title-para {
            .ant-skeleton-title +.ant-skeleton-paragraph {
                margin-top: 4px;
            }   
        }
        &.child-right {
            * {
                text-align: right;
                margin: 0 0 0 auto;
            }
        }
    }
`;
