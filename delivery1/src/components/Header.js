import style from "../css/Header.module.css"

function Header(){
    return(
        <>
        <header>
            <nav>
                <div className={style.menuButton}>Add Pokemon</div>
            </nav>
        </header>
        </>
    );
}

export default Header;