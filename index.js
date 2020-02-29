require('dotenv').config()
const express = require('express')
const multer = require('multer')

const app = express()
app.set('view engine', 'ejs')

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

app.get('/validation', uploadValidationImg.single('my-file'), (req, res) => {
  res.render('validation')
})

app.post('/file-upload', upload.single('my-file'), (req, res) => {
  /* req.file es el archivo 'my-file',
   * el nombre original se puede obtener
   * con req.file.originalname
   */
  console.log('req.file.originalname', req.file.originalname)
  res.render('success-upload')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('Listening on port ' + port + '...'))
