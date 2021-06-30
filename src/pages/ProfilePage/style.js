import { Button } from "@material-ui/core";
import styled from "styled-components";

export const ContainerAdress = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #eeeeee ;
    height: 4.75rem;
    padding: 0 1rem;
`

export const ContainerDetail = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`

export const ContainerButton = styled(Button)`
    padding: 0;
    background-color: blue;
`

export const ContainerOrderHistory = styled.div`
    padding: 1rem 1rem 5rem 1rem;
`

export const ContainerTitleOrder = styled.div`
    border-bottom: 1px solid black;
    padding: 5px;
    margin-bottom: 1rem;
`