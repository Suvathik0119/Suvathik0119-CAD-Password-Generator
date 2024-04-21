document.addEventListener('DOMContentLoaded', function() {
    const lengthInput = document.getElementById('length');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');
    const generateButton = document.getElementById('generate');
    const passwordOutput = document.getElementById('password');
    const copyButton = document.getElementById('copy');

    generateButton.addEventListener('click', function() {
        const length = lengthInput.value;
        const includeUppercase = uppercaseCheckbox.checked;
        const includeNumbers = numbersCheckbox.checked;
        const includeSymbols = symbolsCheckbox.checked;

        const password = generatePassword(length, includeUppercase, includeNumbers, includeSymbols);
        passwordOutput.value = password;
    });

    copyButton.addEventListener('click', function() {
        passwordOutput.select();
        document.execCommand('copy');
        alert('Password copied to clipboard!');
    });

    function generatePassword(length, uppercase, numbers, symbols) {
        // Define character sets
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

        let validChars = lowercaseChars;
        if (uppercase) validChars += uppercaseChars;
        if (numbers) validChars += numberChars;
        if (symbols) validChars += symbolChars;

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * validChars.length);
            password += validChars.charAt(randomIndex);
        }

        return password;
    }
});