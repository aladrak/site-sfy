document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    // Получаем значения из полей формы
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Проверяем, заполнены ли обязательные поля
    if (!name || !email) {
        alert('Пожалуйста, заполните все обязательные поля.');
        return;
    }

    // Здесь можно добавить логику для отправки данных на сервер
    console.log('Имя:', name);
    console.log('Email:', email);
    console.log('Сообщение:', message);

    // Можно показать сообщение об успешной регистрации
    alert('Вы успешно зарегистрировались!');

    // Очищаем форму после отправки
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});