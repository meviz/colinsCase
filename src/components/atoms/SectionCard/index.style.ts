import { Divider } from "antd";
import styled from "styled-components";

export const ContainerWrapper = styled.div`
    border: 1px solid ${(props) => props.theme.token.colorPrimary};
    padding: 12px;
    border-radius: 4px;

    .ant-space {
        width: 100%;
    }
`;

export const DividerWrapper = styled(Divider)`
    margin: 12px 0px 24px 0px;
`;
