const style = 
{
	container:
	{
		position: "relative",
		zIndex: 9
	},
	containerInner:
	{
		backgroundColor: "100%",
		padding: "20px 125px 20px 125px"
	},
	categoryBtn:
	{
		marginLeft: 30
	},
	categoryArrowIcon:
	{
		marginLeft: 10, 
		width: 10
	},
	searchBtn:
	{ 
		position: "relative",
		marginRight: 10
	},
	searchField:
	{
		width: 200,
		height: 35,
		borderRadius: 20
	},
	userMenu:
	{
		position: "absolute",
		backgroundColor: "white",
		zIndex: 10,
		width: 200,
		top: 80,
		right: 125,
		borderRadius: 6
	},
	userMenuBtn:
	{
		padding: 15,
		cursor: "pointer"
	},
	userBtn:
	{
		width: 90,
		height: 35
	},
	loginLabel:
	{
		fontSize: 14, 
		marginLeft: 5
	},
	categoryListBox:
	{
		position: "absolute",
		backgroundColor: "white",
		width: "100%",
		left: 0,
		top: 100,
		zIndex: 10
	},
	categoryList:
	{
		paddingLeft: 240,
		paddingBottom: 80
	},
	categoryItem:
	{
		paddingBottom: 10
	},
	title:
	{
		position: "absolute",
		top: 0,
		left: "25%",
		width: "50%",
		height: 120,
		fontSize: 35,
		padding: "30px 0px",
		margin: "auto"
	},
	searchOverlay:
	{
		container:
		{
			backgroundColor: "white",
			padding: "35px 125px",
			zIndex: 20,
			position: "absolute",
			width: "100%",
			top: 0
		},
		input:
		{
			padding: "10px 0px",
			width: "100%",
			fontSize: 46,
			border: "none",
			outline: "none",
			borderBottom: "2px solid black",
			marginBottom: 30
		},
		suggestions:
		{
			fontSize: 30
		},
		closeBtn:
		{
			width: 40,
			height: 40,
			borderRadius: 20,
			float: "right",
			cursor: "pointer"
		}
	}
}

export default style;