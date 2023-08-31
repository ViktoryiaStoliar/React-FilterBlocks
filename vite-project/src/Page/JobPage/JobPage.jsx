import { Input, Button } from '@mantine/core';
// import { IconSearch } from '@tabler/icons-react';
import style from './jobPage.module.scss';
import { Link } from 'react-router-dom';
import card from '../../storage/storage.json'

const JobPage = () => {

    // const array = [{ header: 'Менеджер-дизайнер', salary: 'з/п от 70000 rub', city: 'Новый Уренгой', time: 'Полный рабочий день' }, { header: 'Ведущий графический дизайнер НЕ УДАЛЕННО', salary: 'з/п от 80000 rub', city: 'Москва', time: 'Полный рабочий день' }, { header: 'Работник декорации, дизайнер (ТЦ Амбар)', salary: 'з/п от 80000 rub', city: 'Самара', time: 'Сменный график работы' }, { header: 'Сменный график работы', salary: 'з/п 55000 - 95000 rub', city: 'Тюмень', time: 'Полный рабочий день' }];

    return (
        <div className={style.wrapper}>
            <Input rightSection={<Button>Поиск</Button>}
                // icon={<IconSearch />}
                placeholder="Your email"
            />

            <div className={style.list}>{card.map((el, index) =>
                <Link to={`/vacancy/${el.id}`} key={index}>
                    <div className={style.item}>
                        <h2>{el.header}</h2>
                        <div className={style.flex}><p className={style.salary}>{el.salary}</p><p>{el.time}</p></div>
                        <div className={style.flex}><div className={style.img}></div><p>{el.city}</p></div>
                    </div>
                </Link>)}
            </div>

        </div>
    );
}

export default JobPage;
