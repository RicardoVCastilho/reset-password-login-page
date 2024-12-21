const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');

if (!token) {
    document.getElementById('response-message').innerText = "Token não encontrado.";
} else {
    document.getElementById('reset-password-form').addEventListener('submit', async function (event) {
        event.preventDefault();

        const newPassword = document.getElementById('password').value;

        if (!newPassword) {
            alert('Por favor, insira a nova senha.');
            return;
        }

        const data = {
            token: token,
            newPassword: newPassword
        };

        try {
            const response = await fetch('https://api-login-z19r.onrender.com/auth/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            document.getElementById('response-message').innerText = result.msg || 'Erro ao resetar a senha.';
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao tentar resetar a senha.');
        }
    });
}
