import styled from "styled-components";

export const colours = {

    primary: "#fff",
    theme: "#BE185D",
    light1: "#F3F4F6",
    light2: "#E5E7EB",
    dark1: "#1f2937",
    dark2: "#9CA3AF",
    red: "#DC2626"
}

export const StyledContainer = styled.div`

    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    // background: rgb(0,47,65);
    // background: radial-gradient(circle, rgba(0,47,65,1) 0%, rgba(10,28,61,1) 46%, rgba(0,7,31,1) 89%);
    background: rgba(26,26,39, 0.4);
`

export const ApplicationContainer = styled.div`

    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: rgb(26,26,39);
`

export const LoginStyledContainer = styled.div`

    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    // background: rgb(0,47,65);
    // background: radial-gradient(circle, rgba(0,47,65,1) 0%, rgba(10,28,61,1) 46%, rgba(0,7,31,1) 89%);
    background: transparent;
    z-index: -2
`
