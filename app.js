let tg = window.Telegram.WebApp;
tg.expand();

// Настройка кнопки подтверждения
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

// Переменная для хранения выбранного товара/категории
let selectedItem = "";

// Получаем кнопки из HTML
let btnSportwear = document.getElementById("btnSportwear");
let btnFootwear = document.getElementById("btnFootwear");
let btnAccessories = document.getElementById("btnAccessories");

// Обработчик для "Спортивная одежда"
btnSportwear.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Посмотреть спортивную одежду");
        selectedItem = "sportwear";
        tg.MainButton.show();
    }
});

// Обработчик для "Обувь"
btnFootwear.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Посмотреть обувь");
        selectedItem = "footwear";
        tg.MainButton.show();
    }
});

// Обработчик для "Аксессуары"
btnAccessories.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Посмотреть аксессуары");
        selectedItem = "accessories";
        tg.MainButton.show();
    }
});

// Отправляем данные в Telegram при нажатии на MainButton
Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(selectedItem);
});
