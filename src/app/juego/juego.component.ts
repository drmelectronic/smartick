import { Component, OnInit } from '@angular/core';
import {Pregunta} from "../models/pregunta.model";
import {PreguntaEnum} from "../models/preguntaEnum";
import {
  faPaperPlane, faArrowRight, faCheck, faTimes,
  faEquals, faNotEqual, faThumbsUp, faThumbsDown
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  pregunta?: Pregunta;
  contador = 0;

  preguntas: Pregunta[] = [
    // {
    //   nivel: 30,
    //   imagen: '/assets/preguntas/pregunta33.png',
    //   tipo: PreguntaEnum.Imagen,
    //   pregunta: 'Ordena las instrucciones',
    //   valor: '345216'
    // },


    // {
    //   nivel: 200,
    //   tipo: PreguntaEnum.SiNo,
    //   imagen: '/assets/style/365-smartick.png',
    //   pregunta: '¿Están listos para comenzar?',
    //   respuesta: true
    // },
    // {
    //   nivel: 10,
    //   tipo: PreguntaEnum.Texto,
    //   pregunta: 'Todas mis amigas son rubias. Gema es morena.' +
    //     '¿Gema pertenece a mi grupo de amigas?',
    //   opciones: [
    //     'No, porque entonces sería morena',
    //     'Sí porque es morena',
    //     'No, porque entonces sería rubia'
    //   ],
    //   correctas: [2]
    // },
    // {
    //   nivel: 10,
    //   tipo: PreguntaEnum.Imagen,
    //   pregunta: 'En una tienda hemos cogido una caja con manteles de lunares. ' +
    //     'Algunos tienen todos los lunares morados, otros tienen todos naranjas y otros tienen ' +
    //     'de ambos colores. Hemos visto que 4 de los manteles tienen lunares morados pero solo ' +
    //     '2 de ellos tienen lunares de ese color únicamente. Si además 4 tienen lunares de color ' +
    //     'naranja, ¿cuántos manteles tienen lunares de ambos colores?',
    //   imagen: '/assets/preguntas/pregunta30.png',
    //   valor: '2'
    // },
    {
      nivel: 10,
      tipo: PreguntaEnum.Imagen,
      pregunta: '¿Quién es Diego?',
      imagen: '/assets/preguntas/pregunta29.png',
      imagenes: [
        '/assets/opciones/opciones29-1.png',
        '/assets/opciones/opciones29-2.png',
        '/assets/opciones/opciones29-3.png',
      ],
      correctas: [0]
    },
    {
      nivel: 10,
      tipo: PreguntaEnum.Texto,
      pregunta: '¿Qué palabra quitarías de la lista?',
      opciones: [
        'iguana',
        'pingüino',
        'cocodrilo',
        'camaleón',
        'serpiente',
        'lagarto'
      ],
      correctas: [1]
    },
    {
      nivel: 10,
      tipo: PreguntaEnum.Texto,
      pregunta: '¿Cuál es el sinónimo de MESA?',
      opciones: [
        'silla',
        'escritorio',
        'ordenador',
        'enchufe'
      ],
      correctas: [1]
    },
    {
      nivel: 10,
      tipo: PreguntaEnum.Texto,
      pregunta: 'Estoy buscando un número de dos cifras que al multiplicarlas me dé 6, ' +
        'siendo el número que busco menor que 20 y mayor que 10. ¿Cuál es el número?',
      valor: "16"
    },
    {
      nivel: 10,
      imagen: '/assets/preguntas/pregunta28.png',
      tipo: PreguntaEnum.Imagen,
      pregunta: '¿Qué ve Javi?',
      imagenes: [
        '/assets/opciones/opciones28-1.png',
        '/assets/opciones/opciones28-2.png',
        '/assets/opciones/opciones28-3.png',
        '/assets/opciones/opciones28-4.png'
      ],
      correctas: [3]
    },
    {
      nivel: 10,
      imagen: '/assets/preguntas/pregunta27.png',
      tipo: PreguntaEnum.Imagen,
      pregunta: 'Encuentra la imagen que es igual al modelo, aunque haya cambiado de posición',
      imagenes: [
        '/assets/opciones/opciones27-1.png',
        '/assets/opciones/opciones27-2.png',
        '/assets/opciones/opciones27-3.png',
        '/assets/opciones/opciones27-4.png',
        '/assets/opciones/opciones27-5.png'
      ],
      correctas: [1]
    },
    {
      nivel: 10,
      imagen: '/assets/preguntas/pregunta26.png',
      tipo: PreguntaEnum.Imagen,
      pregunta: '¿Qué figura es la única que ha podido formarse a partir del siguiente modelo?',
      imagenes: [
        '/assets/opciones/opciones26-1.png',
        '/assets/opciones/opciones26-2.png',
        '/assets/opciones/opciones26-3.png',
        '/assets/opciones/opciones26-4.png',
        '/assets/opciones/opciones26-5.png'
      ],
      correctas: [4]
    },
    {
      nivel: 10,
      imagen: '/assets/preguntas/pregunta25.png',
      tipo: PreguntaEnum.Imagen,
      pregunta: 'Elige la imagen que se necessitaría para montar la siguiente figura',
      imagenes: [
        '/assets/opciones/opciones25-1.png',
        '/assets/opciones/opciones25-2.png',
        '/assets/opciones/opciones25-4.png'
      ],
      correctas: [0]
    },
    {
      nivel: 10,
      imagen: '/assets/preguntas/pregunta24.png',
      tipo: PreguntaEnum.Imagen,
      pregunta: '¿Qué imagen es igual a esta?',
      imagenes: [
        '/assets/opciones/opciones24-1.png',
        '/assets/opciones/opciones24-2.png',
        '/assets/opciones/opciones24-3.png',
        '/assets/opciones/opciones24-4.png',
        '/assets/opciones/opciones24-5.png'
      ],
      correctas: [1]
    },
    {
      nivel: 60,
      tipo: PreguntaEnum.Imagen,
      imagen: '/assets/preguntas/pregunta23.png',
      pregunta: '¿Cuál es el valor de la suma? Fijate bien en la cantidad de fruta',
      valor: "14"
    },
    {
      nivel: 200,
      tipo: PreguntaEnum.Imagen,
      imagen: '/assets/preguntas/pregunta22.png',
      pregunta: '¿Cuál es el valor de E?',
      valor: "0"
    },
    {
      nivel: 120,
      tipo: PreguntaEnum.Imagen,
      imagen: '/assets/preguntas/pregunta21.png',
      pregunta: 'Escribe el número de cuatro cifras que cumpla con estas condiciones',
      valor: "7153"
    },
    {
      nivel: 10,
      tipo: PreguntaEnum.Texto,
      pregunta: 'Escribe un número de dos cifras iguales que al sumarlas me dé 6.',
      valor: "33"
    },
    {
      nivel: 45,
      tipo: PreguntaEnum.Imagen,
      pregunta: 'En una fiesta de fin de curso se ha puesto una bandeja con pistachos  con cacahuetes. ' +
        'Todos han probado alguno de ellos y, al terminar, hemos preguntado y sabemos ' +
        'que 7 amigos han probado los pistachos, 5 han probado los cacahuetes y 2 ' +
        'de ellos es lo único que han probado. ¿Cuántos amigos han probado ' +
        'ambas cosas?',
      imagen: '/assets/preguntas/pregunta20.png',
      valor: "3"
    },
    {
      nivel: 45,
      tipo: PreguntaEnum.Imagen,
      pregunta: 'El perro de Alba ladra más que el de Marta. ' +
        'Mi perro solo hace ruido cuando duerme, porque ronca. ' +
        'El perro de Marta solo ladra cuando el mío está despierto. ' +
        '¿Qué perros pueden coincidir haciendo ruido?',
      opciones: [
        'El perro de Alba y el ḿío',
        'Ninguno de los tres',
        'El perro de Marta y el mío',
        'Los tres a la vez'
      ],
      correctas: [0]
    },
    {
      nivel: 10,
      tipo: PreguntaEnum.Imagen,
      pregunta: 'Mario es hermano de José y José es hermano de David. ' +
        '¿Son Mario y David hermanos?',
      opciones: [
        'No, solo Mario y José los son',
        'Sí, los tres son hermanos',
        'No lo creo'
      ],
      correctas: [1]
    },
    {
      nivel: 60,
      tipo: PreguntaEnum.Imagen,
      pregunta: 'Yo soy Patricia y no soy morena. ' +
        'Yo soy Gema y tengo un vestido morado igual que Sandra. ' +
        'Yo soy Elena y estoy a la derecha de Gema. ' +
        '¿Quién es Gema?',
      imagenes: [
        '/assets/opciones/opciones19-1.png',
        '/assets/opciones/opciones19-2.png',
        '/assets/opciones/opciones19-3.png',
        '/assets/opciones/opciones19-4.png'
      ],
      correctas: [1]
    },
    {
      nivel: 45,
      imagen: '/assets/preguntas/pregunta17.png',
      tipo: PreguntaEnum.Imagen,
      pregunta: '¿Qué día vendría después de la secuencia?',
      opciones: [
        'Lunes',
        'Viernes',
        'Jueves',
        'Sábado'
      ],
      correctas: [1]
    },
    {
      nivel: 15,
      imagen: '/assets/preguntas/pregunta16.png',
      tipo: PreguntaEnum.Imagen,
      pregunta: '¿Qué día vendría después de la secuencia?',
      opciones: [
        'Viernes',
        'Jueves',
        'Martes',
        'Miércoles'
      ],
      correctas: [3]
    },
    {
      nivel: 30,
      imagen: '/assets/preguntas/pregunta15.png',
      tipo: PreguntaEnum.Imagen,
      pregunta: 'Elige la imagen igual al modelo, aunque haya cambiado de posición.',
      imagenes: [
        '/assets/opciones/opciones15-1.png',
        '/assets/opciones/opciones15-2.png',
        '/assets/opciones/opciones15-3.png',
        '/assets/opciones/opciones15-4.png',
        '/assets/opciones/opciones15-5.png'
      ],
      correctas: [4]
    },
    {
      nivel: 15,
      imagen: '/assets/preguntas/pregunta14.png',
      tipo: PreguntaEnum.Imagen,
      pregunta: 'Elige la imagen igual al modelo, aunque haya cambiado de posición.',
      imagenes: [
        '/assets/opciones/opciones14-1.png',
        '/assets/opciones/opciones14-2.png',
        '/assets/opciones/opciones14-3.png',
        '/assets/opciones/opciones14-4.png'
      ],
      correctas: [1]
    },
    {
      nivel: 30,
      imagen: '/assets/preguntas/pregunta13.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Es posible que los dos piñones giren en el sentido indicado por las flechas?',
      respuesta: true
    },
    {
      nivel: 20,
      imagen: '/assets/preguntas/pregunta12.png',
      tipo: PreguntaEnum.Imagen,
      pregunta: '¿Cómo giran los dos engranajes de la figura?',
      opciones: [
        'Giran en el mismo sentido',
        'Giran en sentido contrario'
      ],
      correctas: [1]
    },
    {
      nivel: 45,
      imagen: '/assets/preguntas/pregunta11.png',
      tipo: PreguntaEnum.Imagen,
      pregunta: 'Elige la imagen que represente a la siguiente figura vista desde arriba',
      imagenes: [
        '/assets/opciones/opciones11-1.png',
        '/assets/opciones/opciones11-2.png',
        '/assets/opciones/opciones11-3.png',
        '/assets/opciones/opciones11-4.png',
        '/assets/opciones/opciones11-5.png',
      ],
      correctas: [4]
    },
    {
      nivel: 45,
      imagen: '/assets/preguntas/pregunta10.png',
      tipo: PreguntaEnum.Imagen,
      pregunta: 'La siguiente imagen corresponde a una figura vista de frente. Elige la imagen que represente a esta misma figura vista desde arriba',
      imagenes: [
        '/assets/opciones/opciones10-1.png',
        '/assets/opciones/opciones10-2.png',
        '/assets/opciones/opciones10-3.png',
        '/assets/opciones/opciones10-4.png',
        '/assets/opciones/opciones10-5.png',
      ],
      correctas: [2]
    },
    {
      nivel: 45,
      pregunta: 'De cuatro corredores de atletismo se sabe que Pepe ha llegado inmediatamente detrás de Darío y Rubén ha llegado en medio de Pepe y Juan. ¿Podrías decirme quién fue el ganador?',
      tipo: PreguntaEnum.Texto,
      opciones: [
        'Darío',
        'Juan',
        'Pepe',
        'Rubén'
      ],
      correctas: [0]
    },
    {
      nivel: 15,
      pregunta: 'Si en la fila para entrar al cine José está detrás de Daniel, ¿quién entrará antes al cine?',
      tipo: PreguntaEnum.Texto,
      opciones: [
        'Los dos a la vez',
        'Daniel',
        'José',
      ],
      correctas: [2]
    },
    {
      nivel: 15,
      imagen: '/assets/preguntas/pregunta9.png',
      tipo: PreguntaEnum.Imagen,
      imagenes: [
        '/assets/opciones/opciones9-1.png',
        '/assets/opciones/opciones9-2.png',
        '/assets/opciones/opciones9-3.png',
      ],
      correctas: [1]
    },
    {
      nivel: 45,
      pregunta: '¿Qué imagen es igual que esta?',
      imagen: '/assets/preguntas/pregunta8.png',
      tipo: PreguntaEnum.Imagen,
      imagenes: [
        '/assets/opciones/opciones8-1.png',
        '/assets/opciones/opciones8-2.png',
        '/assets/opciones/opciones8-3.png',
        '/assets/opciones/opciones8-4.png',
        '/assets/opciones/opciones8-5.png',
      ],
      correctas: [0]
    },
    {
      nivel: 30,
      pregunta: '¿Qué operación debemos realizar para hacer esta conversión?',
      imagen: '/assets/preguntas/pregunta7.png',
      tipo: PreguntaEnum.Imagen,
      opciones: [
        'x 10',
        'x 100 000',
        '÷ 1000',
        'x 1 000 000'
      ],
      correctas: [1]
    },
    {
      nivel: 15,
      pregunta: '¿Cuántos centímetros son 187 decímetros?',
      imagen: '/assets/preguntas/pregunta6.png',
      tipo: PreguntaEnum.Imagen,
      valor: '1870'
    },
    {
      nivel: 15,
      imagen: '/assets/preguntas/pregunta1.png',
      pregunta: '¿Es relevante la respuesta?',
      tipo: PreguntaEnum.SiNo,
      respuesta: false,
    },
    {
      nivel: 20,
      imagen: '/assets/preguntas/pregunta2.png',
      tipo: PreguntaEnum.Imagen,
      opciones: [
        'El tractor persigue al auto que tiene un bandera.',
        'El auto que persigue al tractor tiene una bandera.',
        'El tractor que persigue al auto tiene una bandera.'
      ],
      correctas: [2]
    },
    {
      nivel: 20,
      formula: '\\frac{1}{4}\\times\\frac{8}{4}=\\square',
      pregunta: '¿Cuál es el resultado?',
      tipo: PreguntaEnum.Formula,
      opciones: [
        "2",
        "4",
        "1/2",
        "1/4"
      ],
      correctas: [2]
    },
    {
      nivel: 15,
      imagen: '/assets/preguntas/pregunta3.png',
      tipo: PreguntaEnum.Imagen,
      opciones: [
        'Son magnitudes no proporcionales.',
        'Son magnitudes inversamente proporcionales.',
        'Son magnitudes directamente propodcionales.'
      ],
      correctas: [2]
    },
    {
      nivel: 15,
      imagen: '/assets/preguntas/pregunta4.png',
      tipo: PreguntaEnum.Imagen,
      opciones: [
        'Si pongo más mantequilla, tendré que poner menos huevos. Es inversamente proporcional.',
        'Si pongo más mantequilla, tendré que poner más huevos. Es directamnte proporcional.',
        'Ponga la mantequilla que ponga, siempre hay que poner 2 huevos, no es proporcional.'
      ],
      correctas: [1]
    },
    {
      nivel: 30,
      imagen: '/assets/preguntas/pregunta5.png',
      tipo: PreguntaEnum.Imagen,
      opciones: [
        'El barco más pequeño es más nuevo.',
        'El barco más grande es más nuevo.',
        'Los barcos tienen el mismo tamaño.',
        'El barco más grande es más antiguo.'
      ],
      correctas: [1]
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta60.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: false
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta59.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: false
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta58.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: true
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta56.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: true
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta55.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: true
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta54.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: true
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta53.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: false
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta52.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: true
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta51.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: false
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta50.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: false
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta49.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: false
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta48.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: false
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta47.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: true
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta46.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: false
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta45.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: true
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta44.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: false
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta43.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: false
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta42.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: true
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta41.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: false
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta40.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: true
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta39.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: false
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta38.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: true
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta37.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: false
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta36.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: true
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta35.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: false
    },
    {
      nivel: 5,
      imagen: '/assets/preguntas/pregunta34.png',
      tipo: PreguntaEnum.SiNo,
      pregunta: '¿Corresponde esta palabra con la imagen?',
      respuesta: false
    },
    {
      nivel: 10,
      tipo: PreguntaEnum.Texto,
      pregunta: 'Sabemos que el caballo, la hiena y el hipopótamo están en una mesa sentados. ' +
        'Además sabemos que el caballo tiene a su derecha un animal que está tomando mosto, ' +
        'a la izquierda del que toma batido de vainilla está la hiena y el caballo está ' +
        'tomando batido de fresa. ' +
        '¿Quién está a la izquierda del caballo y qué está tomando?',
      opciones: [
        'La hiena tomando vainilla',
        'La hiena tomando mosto',
        'El hipopótamo tomando vainilla',
        'El hipopótamo tomando mosto',
      ],
      correctas: [2]
    },
    {
      nivel: 200,
      tipo: PreguntaEnum.Pasar,
      imagen: '/assets/preguntas/pregunta31.png',
      respuesta: true
    },
    {
      nivel: 200,
      tipo: PreguntaEnum.Pasar,
      imagen: '/assets/preguntas/pregunta32.png',
      respuesta: true
    },
    {
      nivel: 10,
      tipo: PreguntaEnum.Texto,
      pregunta: '¿Por qué se burló Rosa de Ramón según lo que cuenta en la carta?',
      opciones: [
        'Por ser demasiado escurridizo',
        'Por su gran agilidad',
        'Por lo fea que era su casa',
        'Por su lentitud'
      ],
      correctas: [3]
    },
    {
      nivel: 10,
      tipo: PreguntaEnum.Texto,
      pregunta: '¿Qué tiempo hace mientras Ramón escribe su carta?',
      opciones: [
        'Caen algunas gotas',
        'Cae una lluvia intensa',
        'Es un día primaveral',
        'Está empezando el frío'
      ],
      correctas: [1]
    },
    {
      nivel: 200,
      tipo: PreguntaEnum.Texto,
      pregunta: '¿Por qué le ha dado Ramón la cáscara al gato Donato?',
      opciones: [
        'Porque Rosa no atiende el teléfono',
        'Porque así se comerá a Rosa la babosa',
        'Porque él es demasiado lento para ir hasta la casa de Rosa',
        'Porque la cáscara es muy pesada para él'
      ],
      correctas: [2]
    },
    {
      nivel: 200,
      tipo: PreguntaEnum.Texto,
      pregunta: '¿Por qué piensa Ramón que la cáscara de nuez será un buen regalo?',
      opciones: [
        'Porque es apetitosa y los pájaros se fijarán en ella',
        'Porque es una casita ligera y resistente a la lluvia',
        'Porque al ser marrón resulta poco atractivo para los pájaros',
        'Porque es un refugio duro y con él será fácil camuflarse'
      ],
      correctas: [3]
    },
    {
      nivel: 200,
      tipo: PreguntaEnum.Texto,
      pregunta: '¿Qué quiere decir la expresión "no te robo más tiempo"?',
      opciones: [
        'Que termina su carta y así Rosa puede dedicarse a otra cosa',
        'Que se disculpa por haberle robado tiempo a Rosa en el pasado',
        'Que no le queda tiempo para seguir escribiendo',
        'Que se disculpa por haber escrito la carta'
      ],
      correctas: [3]
    },
  ]
  respuesta?: number;
  resultado?: boolean;
  correctas = 0;
  totales = 0;
  faPaperPlane = faPaperPlane;
  faArrowRight = faArrowRight;
  faCheck = faCheck;
  faTimes = faTimes;
  faEquals = faEquals;
  faNotEqual = faNotEqual;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  respuestaText = '';
  solucion?: string;
  opcionCorrecta?: number;

  constructor() { }

  ngOnInit(): void {
    this.cambiarPregunta();
  }

  private cambiarPregunta() {
    this.pregunta = this.preguntas[this.contador];
  }

  setRespuesta(index: number) {
    if (this.resultado === undefined) {
      this.respuesta = index;
      console.log('setRespuesta', index);
    }
  }

  enviarRespuesta() {
    console.log('respuesta', this.respuestaText);

    if (this.respuesta === undefined && this.respuestaText === '') {
      alert('Selecciona una respuesta');
    } else if (this.pregunta?.correctas) {
      this.opcionCorrecta = this.pregunta.correctas[0];
      this.resultado = this.pregunta.correctas.some(r => r === this.respuesta);
      this.sumarResultado();
    } else if (this.pregunta?.valor) {
      console.log('respuesta', this.respuestaText);
      console.log('valor', this.pregunta.valor);
      this.solucion = this.pregunta.valor;
      this.resultado = this.respuestaText === this.pregunta.valor;
    }
  }

  sumarResultado() {
    if (this.resultado) {
      this.correctas += 1;
    }
    this.totales += 1;
  }

  siguiente() {
    this.contador += 1;
    this.cambiarPregunta();
    this.resultado = undefined;
    this.respuesta = undefined;
    this.respuestaText = '';
  }

  sendSi() {
    this.resultado = this.pregunta?.respuesta;
    this.sumarResultado();
  }

  sendNo() {
    this.resultado = !this.pregunta?.respuesta;
    this.sumarResultado();
  }

  onKeyInput(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.enviarRespuesta();
    }
  }
}
