import { Text } from '@nextui-org/react'
import styles from '../styles/globals.module.css'
import { poppins } from './Navbarr'

export default function HeroBanner() {
    return(
        <div className={styles.divCenter}>
            <div className={styles.imghero}>
                <Text h3 color='white' className={poppins.className}
                 css={{
                        position:"absolute",
                        bottom:"0",                        

                    }}>New Macbook Pro</Text>
            </div>
        </div>
        
            
    )
}