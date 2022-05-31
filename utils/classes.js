const classes = {
  section: {
    marginTop: 1,
    marginBottom: 1,
  },
  smallText: {
    fontSize: '15px',
  },
  main: {
    marginTop: 2,
    minHeight: '80vh',
  },
  footer: {
    marginTop: 5,
    textAlign: 'center',
    backgroundColor: '#f47e31',
    color: 'white',
    padding: 2,
    fontSize: '25px',
  },
  appbar: {
    backgroundColor: '#f47e31',
    marginBottom: 5,
    fontSize: '1.5rem',
    '& a': {
      color: '#ffffff',
      marginLeft: 5,
    },
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
    fontSize: '1.5rem'
  },
  fullWidth: {
    width: '100%',
  },
  sort: {
    marginRight: 1,
  },
  visible: {
    display: 'initial',
  },
  hidden: {
    display: 'none',
  },
  // search

  searchForm: {
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    borderRadius: 1,
  },
  searchInput: {
    paddingLeft: 1,
    color: '#000000',
    '& ::placeholder': {
      color: '#606060',
    },
  },
  searchButton: {
    backgroundColor: '#f47e31',
    color: 'white',
    padding: 1,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#000000',
    },
    '&:hover' : {
      backgroundColor: '#FF8b3d',
    },
  },

  productdesc: {
    fontSize: '20px',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  productprice: {
    color: '#f8b344',
    fontWeight: 'bold',
    textAlign: 'center',
    whiteSpace: 'pre-line'
  },
  addtocartbutton: {
    color: 'white',
    backgroundColor: 'black',
    padding: 1.5,
    paddingLeft: 2,
    paddingRight: 2,
    fontSize: '15px'
  },

  addtocartbutton:  {
    color: 'white',
    backgroundColor: 'black',
    padding: 1.5,
    paddingLeft: 2,
    paddingRight: 2,
    fontSize: '15px',
    '&:hover' : {
      backgroundColor: 'black',
      color: '#f47e31'
    },
  },

  registerbutton: {
    color: 'white',
    backgroundColor: '#f47e31',
    padding: 1.5,
    paddingLeft: 2,
    paddingRight: 2,
    fontSize: '15px',
    '&:hover' : {
      backgroundColor: '#FF8b3d',
      color: 'white'
    },
  },

  loginlink: {
    color: '#f47e31',
    fontWeight: 'bold'
  },
 
  inputcolor: {
    borderColor: "black !important"
  },

  removebutton: {
    color: 'white',
    backgroundColor: 'black',
    '&:hover' : {
      backgroundColor: '#ff1e1e',
      color: 'white'
    },
  },

  
};


export default classes;
