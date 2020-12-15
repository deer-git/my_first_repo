
      const celeste = document.getElementById('celeste')
      const violeta = document.getElementById('violeta')
      const naranja = document.getElementById('naranja')
      const verde = document.getElementById('verde')
      const btnEmpezar = document.getElementById('btnEmpezar')
      const ULTIMO_NIVEL = 10       //podemos ajustar el nivel

      //swal('F T W')

      class Juego {
        constructor() {
          this.inicializar = this.inicializar.bind(this)
          this.inicializar()
          this.generarSecuencia()
          setTimeout(this.siguienteNivel, 500)
        }

        inicializar() {
          this.siguienteNivel = this.siguienteNivel.bind(this)
          this.elegirColor = this.elegirColor.bind(this)
          this.toggleBtnEmpezar()
          this.nivel = 1
          this.colores = {
              celeste,   //js entiende si el nombre es igual celeste:celeste  === celeste
              violeta,
              naranja,
              verde
          }
        }

        toggleBtnEmpezar() {
          if (btnEmpezar.classList.contains('hide')) {
            btnEmpezar.classList.remove('hide')
          } else {
            btnEmpezar.classList.add('hide')
          }
        }

        generarSecuencia() {
            this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
        }

        siguienteNivel() {
            this.subnivel = 0
            this.iluminarSecuencia()
            this.agregarEventosClick()
        }

        transformarNumeroAColor(numero) {
            switch (numero) {
                case 0:
                    return 'celeste'
                case 1:
                    return 'violeta'
                case 2:
                    return 'naranja'
                case 3:
                    return 'verde'
            }
        }

        transformarColorANumero(color) {
            switch (color) {
                case 'celeste':
                    return 0
                case 'violeta':
                    return 1
                case 'naranja':
                    return 2
                case 'verde':
                    return 3
            }
        }

        iluminarSecuencia(){
            for (let i = 0; i < this.nivel; i ++) {

                const color = this.transformarNumeroAColor(this.secuencia[i])
                setTimeout(() => this.iluminarColor(color), 1000 * i)
            }
        }

        iluminarColor(color) {
            this.colores[color].classList.add('light')
            setTimeout(() => this.apagarColor(color), 350)
        }

        apagarColor(color) {
            this.colores[color].classList.remove('light')
        }

        agregarEventosClick() {
          this.colores.celeste.addEventListener('click', this.elegirColor)
          this.colores.verde.addEventListener('click', this.elegirColor)
          this.colores.violeta.addEventListener('click', this.elegirColor)
          this.colores.naranja.addEventListener('click', this.elegirColor)
        }

        eliminarEventosClick() {
          this.colores.celeste.removeEventListener('click', this.elegirColor)
          this.colores.verde.removeEventListener('click', this.elegirColor)
          this.colores.violeta.removeEventListener('click', this.elegirColor)
          this.colores.naranja.removeEventListener('click', this.elegirColor)
        }

        elegirColor(ev) {
            //console.log(this)
          const nombreColor = ev.target.dataset.color   //este atributo sale del gameboard inpector-data
          const numeroColor = this.transformarColorANumero(nombreColor)
          this.iluminarColor(nombreColor)
          if (numeroColor === this.secuencia[this.subnivel]) {
              this.subnivel++
              if (this.subnivel === this.nivel){   //aqui pasa de nivel
                this.nivel++
                this.eliminarEventosClick()
                if (this.nivel === (ULTIMO_NIVEL + 1)) {
                      this.ganoElJuego()
                } else {
                   setTimeout(this.siguienteNivel, 2000)   //aqui no invocamos a la funcion, solo le decimos la rferencia al usar timeout
                }                                         //ahora this hace referencia a window debido a timeout, para solucionar el bug invocamos.bind
              }                                           //pero enves de hacelo aqui lo hacemos al inicializar() la funcion this.siguienteNivel.bind(this)
          } else {
              this.perdioElJuego()
          }
        }

        ganoElJuego() {
          //swal('Ganaste el juego!!!')   swal don devuelve una promesa
          swal('Platzi', 'Felicitaciones, ganaste el juego', 'success')
            .then(this.inicializar)     //esta es una forma prolija de escribir la promesa, para evitar error de this apuntando a window usamos bind
         /* .then(() => {
               this.inicializar()
          }) */
        }

        perdioElJuego() {
          //swal('Ganaste el juego!!!')   swal don devuelve una promesa
          swal('Platzi', 'Lo lamentamos, perdiste :( ', 'error')
          .then(() => {
            this.eliminarEventosClick()
            this.inicializar()
          })
        }
      }


      function empezarJuego() {
        //var juego = new Juego()
        window.juego = new Juego()
      }