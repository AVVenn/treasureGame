const map = document.getElementById(`map`);
const hint = document.getElementById(`hint`);

const treasure = {
    x:Math.floor(Math.random() * (map.clientWidth - 100)) + 50,
    y:Math.floor(Math.random() * (map.clientHeight - 100)) + 50
};

let counterClick = 0;


let smth =  (event) => {
    let result = Math.sqrt((treasure.x - event.offsetX)**2 + (treasure.y - event.offsetY)**2);

    counterClick++;

    if (result < 30) {
        hint.textContent = `Клад найден! за ${counterClick} кликов`;
        alert(`Клад найден! за ${counterClick} кликов`);
        map.removeEventListener(`click`, smth);
    }  else if (result < 100) {
        hint.textContent = ``;
        setTimeout(() => hint.textContent = `Ухххх, ГОРЯЧО!` , 200);
    } else if (result < 200) {
        hint.textContent = ``;
        setTimeout(() => hint.textContent = `ТЕПЛО!`, 200);
    } else {
        hint.textContent = ``;
        setTimeout(() => hint.textContent = `ХОЛОДНОООООО`, 200);
    }
}

map.addEventListener(`click`, smth);



// 1. Вешаем событие на карту +
// 2. По теореме Пифагора вычисляем длину между кликом и кладом +
// 3. Сравнивать длину линии +
// 4. Меняем hint.textContent = ???? в завимости от длины линии +
// 5. Каждый клик считаем +
// 6. На победу выводи алерт (количество кликов), ремувим обработчик карты +




// todo НАРАБОТКИ
// 1.
// let currentPoint =  {
//     x: 0, 
//     y: 0,
//     counter: 0,
// };

// 2.
    // currentPoint.x =  event.offsetX;
    // currentPoint.y =  event.offsetY;
    // currentPoint.counter++;

// 3.     // let result = Math.sqrt((treasure.x - currentPoint.x)**2+(treasure.y - currentPoint.y)**2);

// 4.
// map.addEventListener(`click`, () => {
//     let result = Math.sqrt((treasure.x - currentPoint.x)**2+(treasure.y - currentPoint.y)**2);
//     result < 50 ? (alert(`Клад найден! за ${currentPoint.counter} кликов`),
//                    hint.textContent = `Клад найден! за ${currentPoint.counter} кликов`)
//                 : result < 100 ? hint.textContent = `Ухххх, ГОРЯЧО!`
//                 : result < 200 ? hint.textContent = `ТЕПЛО!`
//                 : hint.textContent = `ХОЛОДНОООООО`;
// })