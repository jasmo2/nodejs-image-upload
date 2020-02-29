const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()

router.get('/', (req, res) => {
  res.render('index')
})

app.post('/file-upload', upload.single('avatar'), (req, res) => {
  // req.file es el archivo 'avatar', el nombre original se puede obtener
  // con req.file.originalname
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('Listening on port ' + port + '...'))
