function validarFormulario() {

    // Pegando os valores dos inputs
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verificando se os campos estão vazios
    if (nome === "" || email === "" || mensagem === "") {

        alert("Todos os campos devem ser preenchidos!");

        return false;
    }

    // Validação simples de email
    if (!email.includes("@") || !email.includes(".")) {

        alert("Digite um email válido!");

        return false;
    }

    // Se tudo estiver correto
    alert("Mensagem enviada com sucesso!");

    return true;
}