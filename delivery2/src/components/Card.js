import style from "../css/Card.module.css";
function Card({name,path}){
    return(
        <div className={style.card}>
            <img src={path} alt={path} />
            <p>{name}</p>
        </div>
    );

}

export default Card;