import img2 from "./logofooter.svg"
function FooterMenu(){
    return(
        <div className="footerMenu">
            <ul>
                <li><img src={img2} alt="rer" /></li>
                <li><a href="#">Партнерам</a></li>
                <li><a href="#">Разработчикам</a></li>
                <li><a href="#">Вакансии</a></li>
            </ul>
        </div>
    )
};
export default FooterMenu
