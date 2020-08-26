import React, {useEffect, useMemo, useState} from 'react';
import PageUserBasicContainer from './user/Basic/PageUserBasicContainer';
import PageUserOptionsContainer from './user/Options/PageUserOptionsContainer';

// получить имя Компонеты по тексту роута
function getNamePageFromRouteText(routeText) {
 let str;
 // строку роута разбить в массив ('/settings/basic' к примеру)
 // получить массив, каждый элемент с Заглавной буквы
 str = routeText.split('/').map(el => el.firstLetterCaps());
 // склеить в имя компонеты
 str = 'Page'.concat(...str).concat('Container');
 // console.log('Функция: getNamePageFromRouteText, имя компонента: ', str)
 return str;
}

// получить Компоненту по роуту из массива объектов
export function getComponentPageFromNameAndArrayComponents(ArrayObj, routeText) {
 console.log('render: Pages - ЭТОТ КОНСОЛЬ ЛОГ НЕ ДОЛЖЕН ОТРАБАТЫВАТЬ ПРИ КЛИКЕ, render только один раз при открытии новой Page!!!');
 const NameComponent = getNamePageFromRouteText(routeText); // по роуту получаем имя объекта
 const isExistNameInArray = Object.keys(ArrayObj.components).find(item => item == NameComponent);

 let outJSX;
 if (!isExistNameInArray) {
  throw new Error(`${ArrayObj.errTextRoute} ${NameComponent}`);
  outJSX = <div></div>;
 } else {
  outJSX = ArrayObj.components[NameComponent]();
 }
 return outJSX
}

// combinePages - структура имени от роута переименовынный по правилу[пример]: /settings/basiс => PageSettingsBasiс
const combinePages = {
  components: {
    PageUserBasicContainer: PageUserBasicContainer,
    PageUserOptionsContainer: PageUserOptionsContainer,
  },
  errTextRoute: '[Pages.jsx] \'combinePages\': массив - ошибка! В массив не добавлена компонента: '
};



const Pages = ({routeText, ...props}) => {

  return (
    <>
      <div>
        {/*ПЕРЕДЕЛАТЬ! надо добавить что то типо Memo, что бы рендер был только при смене компонента*/}
        {getComponentPageFromNameAndArrayComponents(combinePages, routeText)}
      </div>
    </>
  )
}



export default Pages;