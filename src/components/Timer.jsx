import { useEffect, useState } from "react"

const styles = {backgroundColor: "black", height: "100px", padding: "20px", margin: "20px"}

let intervalId;

function Timer(props) {

  const [ timerValue, setTimerValue ] = useState(10)

  useEffect(() => {
    console.log("Component Did Mount")
    intervalId = setInterval(() => {

      // console.log("intervalo andando")
      setTimerValue((valorActualDelEstado) => {
        return valorActualDelEstado - 1
      })

    }, 1000)

    // return () => {
    //   console.log("Component Will Unmount")
    //   clearInterval(intervalId)
    // }
  }, []) // el array vacio es lo que indica que esto se ejecutara unicamente en componentDidMount

  useEffect(() => {
    return () => {
      console.log("Component Will Unmount")
      clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    console.log("Component Did Update", timerValue)
    if (timerValue <= 0) {
      console.log("es menor a 0")
      // clearInterval(intervalId)
      props.setIsShowing(false)
    }
  }, [timerValue]) // dentro del array agregamos dependencias. Todo lo que React escucha cuando hay cambios, ejecuta lo que hay dentro del useEffect

  return (
    <div style={styles}>
      
        <h1>{timerValue}</h1>

    </div>
  )
}

export default Timer