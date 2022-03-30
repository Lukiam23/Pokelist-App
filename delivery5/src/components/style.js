import styled from "styled-components";

//Header styling

export const HeaderStyle = styled.header`
    position:fixed;
    background: #3498DB;
    width: 100%;
    z-index: 1;
    height: 60px;
    display: flex;
    min-height: 60px;
    

    nav {
        position: absolute;
        display: flex;
        right: 20px;
        height: 100%;
        
        text-align: center;
        align-items: center;
    }
`;

export const MenuButton = styled.div`
    font-size: 25px;
    color: white;
    cursor: pointer;
    margin-right: 10px;
`;

export const ButtonFrame = styled(MenuButton)`
    background: #78c4f7;

    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-weight: bolder;
    display: flex;
    justify-content: center;

`;

//Card styling

export const CardStyle = styled.div`
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    width: 150px;
    height: 200px;
    margin: 10px;
    text-align: center;

    img {
        position: relative;
        border-radius: 5px 5px 0 0;
        display: block;
        width: 100%;
    }

    p {
        font-size: 16px;
        font-family: sans-serif;
        font-weight: bold;
        margin: 10px;
        box-sizing: border-box;
    }

    :hover{
        box-shadow: 0 8px 16px 0 ;
    }
`;

//PokemonList styling

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 80px;
    justify-content: center;
`;

//Detail styling

export const DetailContainer = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 80px;
    padding-bottom: 50px;
    background: rgb(224, 217, 217);

    div {
        display: block;
        margin: 0px auto;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border-radius: 8px;
        
    
        width: 600px;
        height: 800px;
        background: white;
    }

    h1{
        display: block;
        padding-top: 50px;
        text-align: center;
    }

    img{
        display: block;
        margin: 0 auto;
        width: 300px;
        height: 300px;
    }

    p{
        font-size: 20px;
        margin-left: 50px;
        margin-right: 50px;
    }
`;