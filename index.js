document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let currentCardIndex = 0;

    // Xử lý nhấp để lật từng thẻ theo thứ tự
    const handleClick = () => {
        if (currentCardIndex < cards.length) {
            const currentCard = cards[currentCardIndex];

            // Nếu thẻ chưa được lật, lật thẻ
            if (!currentCard.classList.contains('flipped')) {
                currentCard.classList.add('flipped');
            } else {
                // Nếu thẻ đã lật, ẩn nó và chuyển sang thẻ tiếp theo
                currentCard.classList.add('hidden');
                currentCardIndex++;

                // Hiển thị nút Messenger nếu là thẻ cuối cùng
                if (currentCardIndex === cards.length) {
                    document.getElementById('messengerBtn').hidden = false;
                }
            }
        }
    };

    // Lắng nghe sự kiện click để lật hoặc ẩn thẻ
    document.body.addEventListener('click', handleClick);
});



