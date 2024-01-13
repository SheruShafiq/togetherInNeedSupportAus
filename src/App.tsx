import { Box, Typography } from '@mui/material'



function App() {

  return (
   <Box bgcolor={'#fb654e'} display={'flex'} justifyContent={'center'} minWidth={'100vh'} minHeight={'100vh'} >
    <Box alignSelf={'center'}>
      <Box id='gif' textAlign={'center'} >
    <iframe src="https://giphy.com/embed/f7b9ltJ4FrhnsKjYx2" width="960" height="540" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/tlceurope-f7b9ltJ4FrhnsKjYx2"></a></p>
    </Box>
  
    <Typography color={'white'} fontFamily={'HiddenCocktails'}  textAlign={'center'} variant="h1">Together In Need is under construction at the moment!</Typography>
   
    </Box>
      </Box>
  )
}

export default App
