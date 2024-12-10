// promise - это обьедок представляюший результат асинхронной операции (функции и т.д)
// в js/ts используется для работы с асинхронным кодом например запросы на сервер, запросы в бд
// promise имеет 3 состояния 
// pending (waiting ,loading) - изначальное состояние при котором операция еще не завершилась
// success - успешное состояние при котором операция завершилпсь успешно и данные доступны к работе 
// ERROR - операция не состоялась успешно , сообщение об ошибке (денег нет но вы держитесь )



// const response1 = fetch("httpsisueghwegoweh").then((data) => { data.json().then( (data) => {console.log(data)}) }) // если все холосо
// const response = fetch("httpsisueghwegoweh").then((data) => {}).catch((error) => {})

// async function superFunc() {
//     try{
//         const response = await fetch('dsafdsgdhgjfhg')
//         const jsonData = await response.json()
//         setData(jsonDat)
//     }catch{

//     }
// }