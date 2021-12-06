import {PreguntaEnum} from "./preguntaEnum";

export interface Pregunta {
  nivel: number;
  imagen?: string;
  formula?: string;
  pregunta?: string;
  imagenes?: string[];
  tipo: PreguntaEnum;
  opciones?: string[];
  correctas?: number[];
  respuesta?: boolean;
  valor?: string;
}
