import style from "../css/Card.module.css";
function Card({name,path, redirectFunc}){
    return(
        <div className={style.card} onClick={redirectFunc}>
            <img src={path} alt={path} />
            <p>{name}</p>
        </div>
    );

}

export default Card;