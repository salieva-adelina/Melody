$(document).ready(function () {
	var currentFloor = 2; //переменная, где хранится текущий этаж
	var floorPath = $(".home-image path"); //каждый отдельный этаж в SVG
	var counterUp = $(".counter-up"); //кнопка увеличения этажа
	var counterDown = $(".counter-down"); //кнопка уменьшения этажа
	let modal = $(".modal");
    let modalCloseButton = $(".modal-close-button");
    let viewFlatsButton = $(".view-flats")


	//функция при наведении курсора на этаж
	floorPath.on("mouseover", function () {
		floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
		currentFloor = $(this).attr("data-floor"); //получаем значение текущего этажа
		$(".counternumber").text(currentFloor); //записываем значение этажа в счетчик справа
	});

	floorPath.on("click", toggleModal);

    modalCloseButton.on("click", toggleModal);
    viewFlatsButton.on("click", toggleModal);	

	//функция отслеживания клика по кнопке вверх
	counterUp.on("click", function () {
		//проверяем значение этажа, не больше 18
		if (currentFloor < 18) {
			currentFloor++; //прибавляем один этаж
		usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false }); //форматирование из 1 в 01
		$(".counternumber").text(usCurrentFloor); //записываем значение этажа в счетчик справа
		floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
		$(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //подсвечиваем текущий этаж
		}
	});

	counterDown.on("click", function () {
		//проверяем значение этажа, не меньше 02
		if (currentFloor > 2) {
			currentFloor--; //вычитаем один этаж
		usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false }); //форматирование из 1 в 01
		$(".counternumber").text(usCurrentFloor); //записываем значение этажа в счетчик справа
		floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
		$(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //подсвечиваем текущий этаж
		}
	})
	function toggleModal() {
        modal.toggleClass("is-open")
    }
});