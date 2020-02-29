require('dotenv').config()
const express = require('express')
const multer = require('multer')

const app = express()

const upload = multer({ dest: 'uploads/' })
const uploadValidationImg = multer({
  dest: 'uploads/',
  fileFilter(req, file, next) {
    const isPhoto = file.mimetype.startsWith('image/')
    if (isPhoto) {
      next(null, true)
    } else {
      next({ message: 'El tipo de archivo no es válido' }, false)
    }
  }
})

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/validation', (req, res) => {
  res.render('validation')
})

app.post('/file-upload', upload.single('avatar'), (req, res) => {
  // req.file es el archivo 'avatar', el nombre original se puede obtener
  // con req.file.originalname
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('Listening on port ' + port + '...'))
