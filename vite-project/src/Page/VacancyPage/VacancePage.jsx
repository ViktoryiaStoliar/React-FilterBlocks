import { useParams } from "react-router-dom";
import storage from '../../storage/storage.json';
import { useEffect, useState } from "react";
import style from './Vacancy.module.scss'


const VacancePage = () => {

    const { id } = useParams();
    const [cardInfo, setCardInfo] = useState({});

    function filtered() {
        const res = storage.filter((el) => el.id == id)
        setCardInfo(res[0])
    }

    useEffect(() => {
        filtered()
    }, [])

    return (
        <>

            <div className={style.cardWrapper}>
                <h2>{cardInfo.header}</h2>

                <div className={style.description}>
                    <p className={style.salary}>{cardInfo.salary}</p>
                    <p>{cardInfo.time}</p>
                </div>

                <div className={style.location}>
                    <div className={style.img}></div>
                    <p>{cardInfo.city}</p>
                </div>
            </div>

            <div className={style.requirementsWrapper}>

                <div className={style.responsibilities}>
                    <h2>Обязанности:</h2>
                    <ul>
                        {cardInfo.responsibilities ? cardInfo.responsibilities.map((el, index) => <li key={index}>{el}</li>)
                            : null}
                    </ul>
                </div>

                <div className={style.requirements}>
                    <h2>Требования:</h2>
                    <ul>
                        {cardInfo.requirements ? cardInfo.requirements.map((el, index) => <li key={index}>{el}</li>)
                            : null}
                    </ul>
                </div>

                <div className={style.conditions}>
                    <h2>Условия:</h2>
                    <ul>
                        {cardInfo.conditions ? cardInfo.conditions.map((el, index) => <li key={index}>{el}</li>)
                            : null}
                    </ul>
                </div>

            </div>

        </>
    );
}

export default VacancePage;
