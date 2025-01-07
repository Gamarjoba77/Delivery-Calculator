document.getElementById('calc-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Получаем значения из формы
    const weight = parseFloat(document.getElementById('weight').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const method = document.getElementById('method').value;

    // Проверяем корректность данных
    if (isNaN(weight) || isNaN(distance)) {
        alert('Введите корректные значения для веса и расстояния.');
        return;
    }

    // Устанавливаем базовую стоимость
    let baseCost = 0;

    // Расчёт стоимости в зависимости от веса
    if (weight <= 1) {
        baseCost = 5;
    } else if (weight <= 5) {
        baseCost = 10;
    } else {
        baseCost = 15;
    }

    // Дополнительная стоимость за расстояние
    let distanceCost = distance * 0.2;

    // Коэффициент метода доставки
    let methodMultiplier = 1;
    if (method === 'express') {
        methodMultiplier = 1.5;
    } else if (method === 'overnight') {
        methodMultiplier = 2;
    }

    // Итоговая стоимость
    const totalCost = (baseCost + distanceCost) * methodMultiplier;

    // Отображаем результат
    document.getElementById('total-cost').textContent = `$${totalCost.toFixed(2)}`;
});
