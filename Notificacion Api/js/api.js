const notificarBtn = document.querySelector('#notificar')
notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(resultado => {
            console.log("El resultado es ", resultado)
        })
})

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted') {
        const notifiacion = new Notification('Esta es la notificación', {
            icon: '',
            body: 'Código con Cristian, repositorio de Cristian villada'
        });
        
        notifiacion.onclick = function(){
            window.open('https://github.com/cristianmilo07')
        }
    }
});