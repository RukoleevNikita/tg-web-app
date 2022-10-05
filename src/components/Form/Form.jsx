import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css';

export const Form = () => {
    const [country, setCountry] = React.useState('');
    const [street, setStreet] = React.useState('');
    const [subject, setSubject] = React.useState('physical');
    const {tg} = useTelegram();

    const onSendData = React.useCallback(() => {
        const data = {
            country,
            street,
            subject
        };

        tg.sendData(JSON.stringify(data));
    }, [country, street, subject]);

    React.useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        }
    }, []);

    React.useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, []);


    React.useEffect(() => {
        if (!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street]);

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }


    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Страна'}
                value={country}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Улица'}
                value={street}
                onChange={onChangeStreet}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    )
}

export default Form;
