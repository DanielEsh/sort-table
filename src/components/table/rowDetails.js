import React from "react";

const RowDetails = ({person}) => {
    return (
        <div>
            <p>Выбран пользователь <b>{person.firstName + ' ' + person.lastName}</b></p>

            {person.description &&
            <div>
                Описание: <p>{person.description}</p>
            </div>
            }


            {person.address &&
            <div>
                <p>Адрес проживания: <b>{person.address.streetAddress}</b></p>
                <p>Город: <b>{person.address.city}</b></p>
                <p>Провинция/штат: <b>{person.address.state}</b></p>
                <p>Индекс: <b>{person.address.zip}</b></p>
            </div>
            }


        </div>
    )
}

export default RowDetails
