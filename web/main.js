const saveTransaction = document.getElementById('saveTransaction');

saveTransaction.addEventListener('submit', (e) => {
    e.preventDefault();
    const transactionValue = document.getElementById('transactionValue').value;
    const transactionDesc = document.getElementById('transactionDesc').value;
    const transaction = 
    {transactionValue: transactionValue,
    transactionDesc: transactionDesc}
    const transactionJson = JSON.stringify(transaction);
    /* Mandar datos al backend y mostrarlos ahi */
    fetch('http://127.0.0.1:8080/transactions', {
        /* vas a mandar como cuerpo mediante una respuesta lo siguiente: */
        body: transactionJson,
        method: 'post'
    }).then (res => console.log(res))
})