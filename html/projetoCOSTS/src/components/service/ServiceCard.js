import Styles from '../Project/ProjectCard.module.css'

import { BsFillTrashFill } from 'react-icons/bs'

function ServiceCard({id,name,cost,description,handleRemove}){
  
    const remove = (e) =>{
    e.preventDefault(
        handleRemove(id, cost)
    )
    }

    
   
    return(
        <div className={Styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Custo total:</span> R${cost}
            </p>
            <p>{description}</p>
            <div className={Styles.project_card_actions}>
               <button onClick={remove}>
              < BsFillTrashFill/>
              Excluir
               </button>
            </div>
        </div>
    )
}
export default ServiceCard