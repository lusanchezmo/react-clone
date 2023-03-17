import './App.css';
import Testimonio from './components/testimonio';


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp</h1>
    
        <Testimonio 
          nombre='Anna Sanchez'
          pais='Colombia'
          imagen='anna'
          cargo='Desarrolladora de software'
          empresa='Shoppy'
          testimonio='Pienso que sí tienen mucha relación, ya que en ambas disciplinas uno debe tener la capacidad de tomar los conocimientos adquiridos y resolver los problemas que se presenten con ellos, por ejemplo, en el boxeo actualmente no es tanto la fuerza y la agresividad lo que define a este deporte sino la inteligencia al momento de contraatacar o esquivar los golpes e incluso la capacidad de poder de resolver el combate cuando la situación está un poco apretada, con esto quiero decir que no solo hay que aprender movimiento, golpes o scripts de forma robótica sino que hay que analizar la situación y aplicar los conocimientos en consecuencia.'/>
          <Testimonio 
          nombre='Juana Iglesias'
          pais='Cuba'
          imagen='juana'
          cargo='Designer UI'
          empresa='Spotify'
          testimonio='La verdadera respuesta a esta pregunta es que tuve la suerte de que un promotor de boxeo ya que soy boxeador, luego de que terminara el bachillerato me apoyó con la carrera que quería elegir cómo mi profesión y allí fue cuando entré al bootcamp de 4Geeks Academy, muy excelente dinámica de aprendizaje, por cierto.'/>
          <Testimonio 
          nombre='Stephen Howking'
          pais='Inglaterra'
          imagen='stephen'
          cargo='Cientifico'
          empresa='MIT'
          testimonio='La verdadera respuesta a esta pregunta es que tuve la suerte de que un promotor de boxeo ya que soy boxeador, luego de que terminara el bachillerato me apoyó con la carrera que quería elegir cómo mi profesión y allí fue cuando entré al bootcamp de 4Geeks Academy, muy excelente dinámica de aprendizaje, por cierto.'/>
      </div>
    </div>
  );
}

export default App;
