import { useMainContext, useDispatchMainContext } from '../components/Context';
import { useEffect } from 'react';
import PersistentDrawer from '../components/PersistentDrawer';



export default function Home() {

	// Getting context
	const context = useMainContext();
	const dispatch = useDispatchMainContext();

	// Window change handler
	const resizeHandler = () => {
		const display = { width: window.innerWidth, height: window.innerHeight }
		dispatch({
			type: 'PROVIDE-WINDOW',
			payload: display
		});
	}

	// Dispatches window dimensions for global responsiveness
	useEffect(() => {
		resizeHandler()
		window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
  	}, []);

  	return (
		  <>
	  		{ context ? <PersistentDrawer width={context.deviceWindow.width} /> : '' }
			  <h1>Olha sóp</h1>
		  </>
  )
}
