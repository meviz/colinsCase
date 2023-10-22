import { Empty } from "antd";
import styled from "styled-components";

export const ImgWrapper = styled.img`
    object-fit: contain;
`;

export const EmptyWrapper = styled(Empty)`
    padding: 48px;
    margin: 0px !important;
    background: ${({ theme }) => theme.token.colorPrimaryBgHover};
`;
