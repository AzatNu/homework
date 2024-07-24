import styles from "./App.module.css";
import { useState } from "react";


function App() {
const [value,setValue]= useState(``)
const [list,setList]=useState([])
const [error,setError]=useState(``)
const [isValueVaild, setIsValueValid] = useState(true)
 const onInputButtonClick=()=>{
const promtValue = prompt()
if (promtValue.length < 3){
    setIsValueValid(false)
    setError(`error`)

}else{
    setIsValueValid(true)
    setValue(promtValue)
    setError(``)
}
 }
const  onAddButtonClick=()=>{
    if(isValueVaild){
        setValue(``)
        setError(``)
        setList([...list, { id: Date.now(), value: value}])
    }
 }

    return (
        <div className={styles["app"]}>
            <h1 className={styles["page-heading"]} onClick={onAddButtonClick}>Ввод значения</h1>
            <p className={styles["no-margin-text"]}>
                Текущее значение: `{value}`
                <output className={styles["current-value"]}></output>
            </p>
            {error !== `` && <div className={styles["error"]}>
                Введенное значение должно содержать минимум 3 символа
            </div>}

            <div className={styles["buttons-container"]}>
                <button className={styles["button"]} onClick={onInputButtonClick}>Ввести новое</button>
                <button className={styles["button"]} disabled={!isValueVaild} onClick={onAddButtonClick}>
                    Добавить в список
                </button>
            </div>
            <div className={styles["list-container"]}>
                <h2 className={styles["list-heading"]}>Список:</h2>
                <p className={styles["no-margin-text"]}>

                </p>
                <ul className={styles["list"]}>
                    {list.map((item)=>{
                        return <li key={item.id}>{item.value} дата создания: {new Date().toLocaleString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })}</li>
                    })}

                </ul>
            </div>
        </div>
    );
}

export default App
