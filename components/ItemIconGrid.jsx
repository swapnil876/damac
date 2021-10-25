
import styles from '../styles/ItemIconGrid.module.css'
import Image from 'next/image'
import classnames from 'classnames'

export default function ItemIconGrid({ 
  items
}) {

  return (

    

    <div class={styles['item-grid']}>
        <div className='container'>
          
          <div className={styles['item-grid-icons']}>
            { items.map( (item, idx) => 
              <div key={idx}>
                {item.icon && <>
                  <div className={styles['itemdetail-icon-image']}>
                    <Image src={item.icon} width={50} height={50}/>
                  </div>
                </>}
                <h4 className={styles['title']}>{item.title}</h4>
                <p className={styles['subtitle']}>{item.subtitle}</p>
              </div>
             ) }

            
          </div>

        </div>
    </div>
    
  )
}