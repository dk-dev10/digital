import React, { useEffect, useState } from 'react';

import Input from '../Input';
import Tag from '../Tag';

import cls from '../../assets/cls.svg';

import style from './styl.module.scss';
import ButtonText from '../Button/ButtonText';
import Button from '../Button';
import classNames from 'classnames';
import Checkbox from '../Checkbox';

const Modal = ({ modal, handleModal }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [nalog, setNalog] = useState(value);
  const [nalogView, setNalogView] = useState(false);
  const [payment, setPayment] = useState(false);

  useEffect(() => {
    setNalog(value.replace(/\s/g, ''));
  }, [payment]);

  function empty() {
    if (value.length <= 0) {
      console.log('ss');
      setError(true);
    } else {
      setNalogView(true);
      setError(false);
      setPayment(!payment);
    }
  }

  function addSpace(num) {
    return num
      .split('')
      .reverse()
      .join('')
      .replace(/[^\dA-Z]/g, '')
      .replace(/(.{3})/g, '$1 ')
      .trim()
      .split('')
      .reverse()
      .join('');
  }

  function space(e) {
    const res = addSpace(e.target.value);

    setValue(res);
  }

  return (
    <div className={classNames(style.modal, modal && style.modalActive)}>
      <div className={style.modalInner}>
        <div className={style.modalContent}>
          <h1>Налоговый вычет</h1>
          <p>
            Используйте налоговый вычет чтобы погасить ипотеку досрочно.
            <br /> Размер налогового вычета составляет не более 13% от своего
            официального годового дохода.
          </p>
          <Input
            value={value}
            title='Ваша зарплата в месяц'
            placeholder='Введите данные'
            onChange={space}
            error={error}
          />
          <ButtonText mb onClick={empty}>
            Рассчитать
          </ButtonText>

          {nalogView && (
            <div className={style.total}>
              <h3>Итого можете внести в качестве досрочных:</h3>
              <ul className={style.totalList}>
                <li>
                  <Checkbox check={'nalog1'} />
                  <p>
                    {nalog * 12 * 0.13} рублей <span>в 1-ый год</span>
                  </p>
                </li>
                <li>
                  <Checkbox check={'nalog2'} />
                  <p>
                    {nalog * 12 * 0.13} рублей <span>во 2-ой</span>
                  </p>
                </li>
                <li>
                  <Checkbox check={'nalog3'} />
                  <p>
                    {nalog * 12 * 0.13} рублей <span>в 3-ий</span>
                  </p>
                </li>
                <li>
                  <Checkbox check={'nalog4'} />
                  <p>
                    {(nalog * 12 * 0.13) / 3} рублей <span>в 4-ый</span>
                  </p>
                </li>
              </ul>
            </div>
          )}

          <div className={style.answer}>
            <b>Что уменьшаем?</b>
            <div className={style.tags}>
              <Tag>Платёж</Tag>
              <Tag>Срок</Tag>
            </div>
          </div>
        </div>
        <Button long>Добавить</Button>
        <button className={style.close} onClick={handleModal}>
          <img src={cls} alt='close' />
        </button>
      </div>
    </div>
  );
};

export default Modal;
