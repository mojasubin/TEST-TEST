
document.addEventListener('DOMContentLoaded', () => {
    const lottoNumbersContainer = document.querySelector('.lotto-numbers');
    const generateBtn = document.getElementById('generate-btn');

    const getNumberColorClass = (number) => {
        if (number <= 10) return 'color-1';
        if (number <= 20) return 'color-2';
        if (number <= 30) return 'color-3';
        if (number <= 40) return 'color-4';
        return 'color-5';
    };

    const generateNumbers = () => {
        lottoNumbersContainer.innerHTML = '';
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach((number, index) => {
            setTimeout(() => {
                const ball = document.createElement('div');
                ball.className = `lotto-ball ${getNumberColorClass(number)}`;
                ball.textContent = number;
                lottoNumbersContainer.appendChild(ball);
                // Trigger animation
                setTimeout(() => {
                    ball.style.opacity = '1';
                    ball.style.transform = 'scale(1)';
                }, 10);
            }, index * 200); // Stagger the animation
        });
    };

    generateBtn.addEventListener('click', generateNumbers);

    // Initial generation on load
    generateNumbers();
});
