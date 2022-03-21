import style from "../css/Card.module.css";
function Card({name}){
    const path = `images\\${name}` 
    name = name.replace(/.png/g,"")
    return(
        <div className={style.card}>
            <img src={path} alt={path} />
            <p>{name}</p>
        </div>
    );

}

export default Card;