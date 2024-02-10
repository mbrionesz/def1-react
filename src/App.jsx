import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import MyCard from './components/MyCard'
import './App.css';
import Footer from './components/Footer';


function App() {
  return <>
  <div className='titlefirst'>
  <Header title="Adopta un perrito" />
  </div>
  <br />
  <div className='conjunt'>
  <MyCard 
    name="Bartolo"
    image="https://placedog.net/120/120?id=210"
    description="Lleno de enrgia y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
    colorTag="success"
    textTag="Husky"
  />
  <MyCard 
    name="Messi"
    image="https://placedog.net/120/120?id=215"
    description="Es juguetón, amigable y se lleva bien con los niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
    colorTag="primary"
    textTag="Bobtail"
  />
  <MyCard 
    name="Gohan"
    image="https://placedog.net/120/120?id=212"
    description="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional!"
    colorTag="danger"
    textTag="Shar Pei"
  />
  <MyCard 
    name="Messi"
    image="https://placedog.net/120/120?id=213"
    description="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!"
    colorTag="warning"
    textTag="Princesa"
  />
  </div>
  <br />
  <div className='footer'>
    <Footer titlefooter="Explora nuestra galeria de adopcion de perros para encontrar a tu compañero perfecto."/>
  </div>
  </>

}

export default App
