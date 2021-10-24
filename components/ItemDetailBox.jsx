
import styles from '../styles/ItemDetailsBox.module.css'
import Image from 'next/image'
import classnames from 'classnames';

export default function ItemDetailBox({ 
  title, 
  subtitle, 
  icon,
  color 
}) {



  var colorStyle = 'default';
  if ( color == undefined ) {
    colorStyle = 'default';
  } else {
    colorStyle = 'white';
  }

  const detailBoxClassnames = classnames( 
    styles['itemdetailbox2'], 
    styles['itemdetailbox'],
    styles[colorStyle]
    
  );


  return (

    

    <>
    <div className={ detailBoxClassnames }>
      {icon && <>
        <div className={styles['itemdetail-icon-image']}>
          <Image src={icon} width={32} height={32}/>
        </div>
      </>}
      <h4 className={ styles['main-title'] }>{title}</h4>
      <p className={ styles['sub-title'] }>{subtitle}</p>
    </div>
    </>
    
  )
}