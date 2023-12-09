import home from '../../images/home.svg';
import { MainHome } from '../components'

export const HomePage = () => {
	return (
		<>
			<MainHome
				name='Venta y asesoramiento de arte online '
				imgsrc={home}
				isCompName={true}
				compName="Sitio Artista"
				visit='/services'
				btnname="Get Started"
			/>

		</>


	)
}
