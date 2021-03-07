import { useMainContext, useDispatchMainContext } from '../components/Context';
import { useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';
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
			  <Box>
			  	<Typography variant="h4">Olha só</Typography>
			  	<Typography variant="h4">{data}</Typography>
			  </Box>
		  </>
  )
}
