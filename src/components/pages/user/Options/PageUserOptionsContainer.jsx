import React, {useEffect, useMemo, useState} from "react";
import PageUserOptions from "./PageUserOptions";

const PageUserOptionsContainer = (props) => {
 // console.log('render: PageUserOptionsContainer')

 const [colored, setColored] = useState(false)
 const [count, setCount] = useState(1)

 const styles = useMemo(() => {
  console.log('render: PageUserOptionsContainer, правильно отработан! Стиль изменён!')
  return {
   color: colored ? 'red' : 'black'
  }
 }, [colored])

 const clicked = useMemo(() => {
  console.log('render: PageUserOptionsContainer, правильно отработан! Клик выполнен!')
 }, [count])



 return (
  <>

   <h1 style={styles}>Количество кликов: {count} </h1>
   <button onClick={() => setCount(prev => prev + 1)}>Добавить клик</button>
   <button style={{marginLeft: '5px'}} onClick={() => setColored(prev => !prev)}>Изменить цвет</button>

   <div><b>PageUserOptionsContainer</b></div>
   {/*<PageUserOptions/>*/}

  </>
 )
}

export default PageUserOptionsContainer;