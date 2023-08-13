import { useState } from "react";
function ItemListContainer(props){
    const estado = useState(0)
    let contador = estado[0]
    const setContador = estado[1]

    let sumar = () => {
      setContador(contador + 1)
    }

    let restar = () => {
      setContador(contador-1)
    }
  

    return(
<>
<h6>{props.greeting}</h6>
{contador
  ? <h6>Tiene {contador} productos</h6>
  : <h6>No tiene productos</h6>
}
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card" style={{width:'22rem'}}>
      <img src="./intel.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Intel</h5>
        <p className="card-text">Procesador Intel Core i7-10700</p>
        {contador
          ? <button type="button" className="btn btn-danger" onClick={restar}>Borrar</button>
          : <button type="button" className="btn btn-success" onClick={sumar}>Agregar</button>
        }
        
        
      </div>
    </div>
  </div>
</div>
</>




    )
}
export default ItemListContainer;