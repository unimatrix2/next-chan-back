import { useMainContext, useDispatchMainContext } from '../components/Context';
import { useEffect } from 'react';
import PersistentDrawer from '../components/PersistentDrawer';

// This page will be rendered at each request
// But this is an example of getting data through query from express/
// To render the page at build time getStaticProps would be used
export const getServerSideProps = (context) => {
	return {
		props: {
			data: context.query.number
		}
	}
}

export default function Home({data}) {

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
			  <h1>Olha só</h1>
			  <h1>{data}</h1>
		  </>
  )
}
