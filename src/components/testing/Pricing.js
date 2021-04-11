import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import tiers from '../../private/data/psudo_data/tier';
import ProductCard from '../card/ProductCard';

const useStyles = makeStyles((theme) => ({
	'@global': {
		ul: {
			margin: 0,
			padding: 0,
			listStyle: 'none',
		},
	},
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbar: {
		flexWrap: 'wrap',
	},
	toolbarTitle: {
		flexGrow: 1,
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	heroContent: {
		paddingBottom: theme.spacing(6),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
	},
	cardPricing: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'baseline',
		marginBottom: theme.spacing(2),
	},
	footer: {
		borderTop: `1px solid ${theme.palette.divider}`,
		marginTop: theme.spacing(8),
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		[theme.breakpoints.up('sm')]: {
			paddingTop: theme.spacing(6),
			paddingBottom: theme.spacing(6),
		},
	},
}));


export default function Pricing() {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			
			{/* Hero unit */}
			<Container maxWidth="sm" component="main" className={classes.heroContent}>
				<Typography variant="h5" align="center" color="textSecondary" component="p">
					The Atlas Query Processor is more than "just software". We believe in offering the best options for you situation, 
					as we pride ourselves on being educators.
						</Typography>
			</Container>

			{/* Cards */}
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{tiers.map((tier) => (
						// Enterprise card is full width at sm breakpoint
						<Grid item key={tier.title} xs={12} md={4}>
							<ProductCard {...tier}/>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
}