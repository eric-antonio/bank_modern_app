import { clients } from "../constants";
import styles from '../style'; 

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}> 
        {clients.map((client)=>(
          <div className={`${styles.flexCenter} w-1/4 p-4`} key={client.id}>
            <img src={client.logo} alt={client.name} className="sm:w-[192px] w-[100px] object-contain"/>
          </div>
        ))}</div>
    </section>
  )
}

export default Clients