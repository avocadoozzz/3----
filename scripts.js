document.addEventListener("DOMContentLoaded", function() {
    // Кнопка "Find room"
    const findRoomBtn = document.querySelector(".hero-form .btn");
    if (findRoomBtn) {  // Проверяем, существует ли кнопка
        findRoomBtn.addEventListener("click", function(event) {
            event.preventDefault();
            const checkIn = document.querySelector('input[type="date"]').value;
            const checkOut = document.querySelector('input[type="date"]:nth-of-type(2)').value; // Исправлено с :nth-child(2) на :nth-of-type(2)
            const person = document.querySelector('.hero-form input[type="text"]').value;

            if (checkIn && checkOut && person) {
                alert(`Room search initiated for: \nCheck-in: ${checkIn} \nCheck-out: ${checkOut} \nPerson: ${person}`);
            } else {
                alert("Please fill in all fields.");
            }
        });
    }
    // Кнопки "Book now" в галерее
    const bookNowButtons = document.querySelectorAll(".gallery-item .btn, .room-card .btn");
    bookNowButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const roomName = button.closest('.gallery-item, .room-card').querySelector('h3').textContent;
            alert("Room booking initiated for: " + roomName);
        });
    });
    // Функциональность для формы подписки
    const subscribeBtn = document.querySelector(".footer .subscribe .btn");
    if (subscribeBtn) {  // Проверяем, существует ли кнопка
        subscribeBtn.addEventListener("click", function(event) {
            event.preventDefault();
            const emailInput = document.querySelector(".footer .subscribe input[type='email']").value;
            if (emailInput && validateEmail(emailInput)) {
                alert("Thank you for subscribing!");
            } else {
                alert("Please enter a valid email address.");
            }
        });
    }

    // Функция проверки правильности email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // "View All" button for testimonials
    const viewAllBtn = document.querySelector(".view-all-btn");
    if (viewAllBtn) {  // Проверяем, существует ли кнопка
        viewAllBtn.addEventListener("click", function() {
            alert("All testimonials loaded.");
            // Реализуйте логику показа дополнительных отзывов, если это нужно
        });
    }
});
