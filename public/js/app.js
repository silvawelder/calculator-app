/**
 * Frontend JavaScript
 * Handles UI interactions and API calls
 */

let selectedOperation = 'add';

// Initialize operation buttons
document.querySelectorAll('.op-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.op-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        selectedOperation = this.dataset.op;
    });
});

/**
 * Perform calculation
 */
async function calculate() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const resultDiv = document.getElementById('calc-result');
    const errorDiv = document.getElementById('error');

    // Clear previous messages
    resultDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');

    if (!num1 || !num2) {
        showError('Please enter both numbers');
        return;
    }

    try {
        const response = await fetch('/api/calculator/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                operation: selectedOperation,
                num1: parseFloat(num1),
                num2: parseFloat(num2)
            })
        });

        const data = await response.json();

        if (data.success) {
            const symbols = { add: '+', subtract: '-', multiply: '×', divide: '÷' };
            resultDiv.innerHTML = `${num1} ${symbols[selectedOperation]} ${num2} = <strong>${data.result}</strong>`;
            resultDiv.className = 'result success';
            resultDiv.classList.remove('hidden');
        } else {
            showError(data.error);
        }
    } catch (error) {
        showError('Failed to connect to server');
    }
}

/**
 * Check if number is even
 */
async function checkEven() {
    const num = document.getElementById('even-num').value;
    const resultDiv = document.getElementById('even-result');
    const errorDiv = document.getElementById('error');

    // Clear previous messages
    resultDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');

    if (!num) {
        showError('Please enter a number');
        return;
    }

    try {
        const response = await fetch('/api/calculator/check-even', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                num: parseFloat(num)
            })
        });

        const data = await response.json();

        if (data.success) {
            resultDiv.innerHTML = `${num} is <strong>${data.type.toUpperCase()}</strong>`;
            resultDiv.className = 'result info';
            resultDiv.classList.remove('hidden');
        } else {
            showError(data.error);
        }
    } catch (error) {
        showError('Failed to connect to server');
    }
}

/**
 * Show error message
 */
function showError(message) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = '⚠️ ' + message;
    errorDiv.classList.remove('hidden');
}

// Allow Enter key to trigger calculation
document.getElementById('num1').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calculate();
});
document.getElementById('num2').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calculate();
});
document.getElementById('even-num').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkEven();
});