let a = document.getElementById('ebtn');
        function showHide(){
            let f = document.getElementById('form_content');
            
            if(f.style.display === 'none'){
                f.style.display = 'flex';

            }else{
                f.style.display = 'none';
            }
        }

        a.addEventListener('click', showHide)

        let animado = document.querySelectorAll('.animado');

        function MostrarScrooll(){
            let ScrollTop = document.documentElement.scrollTop;
            for(var i=0; i < animado.length; i++){
                let alturaAnimado = animado[i].offsetTop;
                if(alturaAnimado - 600 < ScrollTop){
                    animado[i].style.opacity = 1;
                    animado[i].classList.add('mostrarArriba')
                }
            }
        }

        window.addEventListener('scroll', MostrarScrooll);

        let burger = document.querySelector('.abrir-menu');
        let nav = document.querySelector('#nav');
        let cerrar = document.querySelector('#cerrar');
        let header = document.querySelector('.header');

        burger.addEventListener('click', () => {
            nav.classList.add('visible');
        });

        cerrar.addEventListener('click', () => {
            nav.classList.remove('visible');
        });