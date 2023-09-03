import React, { useState } from 'react';
import { Input, Button, Pagination } from '@mantine/core';
// import { IconSearch } from '@tabler/icons-react';
import style from './jobPage.module.scss';
import { Link } from 'react-router-dom';
import card from '../../storage/storage.json'


const JobPage = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const size = 10;
    const lastIndex = currentPage * size;
    const firstIndex = lastIndex - size;
    const currentCard = card.slice(firstIndex, lastIndex);

    return (
        <div className={style.wrapper}>
            <Input rightSection={<Button>Поиск</Button>}
                // icon={<IconSearch />}
                placeholder="Введите название вакансии"
            />

            <div className={style.list}>{currentCard.map((el, index) =>
                <Link to={`/vacancy/${el.id}`} key={index}>
                    <div className={style.item}>
                        <h2>{el.header}</h2>
                        <div className={style.flex}><p className={style.salary}>{el.salary}</p><p>{el.time}</p></div>
                        <div className={style.flex}><div className={style.img}></div><p>{el.city}</p></div>
                    </div>
                </Link>)}
            </div>

            <Pagination
                total={Math.ceil(card.length / size)}
                position="center"
                style={{ marginTop: "40px" }}
                onChange={(card) => setCurrentPage(card)}
            />

        </div>
    );
}

export default JobPage;
