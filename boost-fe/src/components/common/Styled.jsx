import {styled} from "styled-components";

export const HeadContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center; 
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    padding-bottom: 10px;
`
export const ButtonContainer = styled.div`
    width : 100%;
    display : flex;
    justify-content: center;
    background-color : #ffffff;
    positionL relative;
    margin-top: 5px;
`

export const logo = styled.img`
    width: 137px;
    height: 48px;
    top: 26px;
    Left:910px;
    transform: translateX(-50%);
`
export const Button = styled.button`
    width: 200px;
    height: 45px;
    font-size : 16px;
    text-align: center;
    background-color: #282828;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute; 
    right: 20px;
`

export const ToggleButton = styled.button`
    width: auto;
    display: inline-block;
    height: 45px;
    font-size: 14px;
    background-color: ${(props) => (props.active ? "#1f1f1f" : "#e0e0e0")};
    color: ${(props) => (props.active ? "white" : "black")};
    border: none;
    border-radius: 20px;
    margin-right: 10px;
    cursor: pointer;

    &:hover {
        background-color: #3a3a3a;
        color: white;
  }
`

export const Dropdown = styled.select`
    height: 45px;
    width : 160px;
    font-size: 14px;
    color:black;
    padding: 5px 10px;
    background-color: #FAFAFA;
    border: 1px solid #282828;
    border-radius: 6px;
    margin-left: 10px;
    cursor: pointer;
`