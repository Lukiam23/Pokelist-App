import styled from "styled-components";

//Header styling

export const HeaderStyle = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');

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
        right: 5px;
        height: 100%;
        
        text-align: center;
        align-items: center;
    }

    h1{
        position: relative;
        display: flex;
        align-items: center;
        margin: 10px;
        color: white;
        font-family: 'Outfit', sans-serif;
    }

    div{
        cursor: pointer;
    }
`;

export const MenuButton = styled.div`
    font-size: 25px;
    color: white;
    cursor: pointer;
    min-width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    /* border-left: solid 2px black; */

    img{
        width: 30px;
        height: 30px;
        object-fit: cover;
    }

    

    :hover{
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }
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
        
    
        width: 500px;
        height: 600px;
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


// Modal
export const ModalStyle = styled.div`
    background-color: rgba(0, 0, 0, 0.9);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;  

    :empty{
        display: none;
    }

    

    div{
        position: relative;
        background-color: white;
        display: block;
        max-width: 500px;
        padding: 15px;
        border-radius: 5px;
        text-align: center;

        span img{
            position: absolute;
            right: 5px;
            top: 5px;
            width: 30px;
            height: 30px;
        }

        img{
            display: block;
            margin: 0 auto;
        }

        input{
            margin: 10px auto;
            display: block;
        }

        input[type=submit]{
            background: #3498DB;
            color:white;
            border: none;
            border-radius: 2px;
            width: 50px;
            height: 30px;
        }
    }

`;