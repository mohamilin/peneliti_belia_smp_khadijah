const express = require('express');
const moment = require('moment');
const router = express.Router();

const Model = require('../models')
// console.log('model', Model.sequelize.models.kamar_mandi_pa)
const Kamar_Mandi_pa = Model.sequelize.models.pabathrooms
console.log('table', Kamar_Mandi_pa)
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/login', function(req, res, next) {
  res.render('login');
});


router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'Express' });
});

router.get('/dashboard', function(req, res, next) {
  const time = moment().format('LT');
  const date = moment().add(10, 'days').calendar();  
 
  res.render('dashboard', { time: time, date: date });
});


router.get('/kamar_mandi_pa', async function(req, res, next) {
  try {
  const dataKamarMandi = await Kamar_Mandi_pa.findAll()
  const kamarMandiPutra = await Kamar_Mandi_pa.findAll({
    where: {
      createdBy: 1
    }
  })

  const time = moment().format('LT');
  const date = moment().add(10, 'days').calendar();  

  const capacity = 6
  if(dataKamarMandi.length){
    const dataSiswa = dataKamarMandi.map(item => item.siswaIn)
                      .reduce((a, b) => {
                        return a + b
                      })
    res.render('kamar_mandi_pa', { data: dataSiswa ? dataSiswa : 0, max: capacity, kamarMandi: kamarMandiPutra, time: time, date: date });
  } else {
    res.render('kamar_mandi_pa', { data:0, max: capacity, kamarMandi: kamarMandiPutra, time:time, date:date });
  }

  } catch (error) {
    console.log('error', error.message)
  }
});


router.post('/kamar_mandi_pa', async (req, res) => {
  try {
    const { siswa_in, createdBy} = req.body
    await Kamar_Mandi_pa.create({
      siswaIn: 1,
      createdBy: 1
    })
    res.redirect('kamar_mandi_pa');
  } catch (error) {
    console.log('error', error)
  }
})

router.delete('/kamar_mandi_pa/:id',  async (req, res) => {
  try {
    const {id} = req.params
    await Kamar_Mandi_pa.destroy({
      where: {
        id: id
      }
    })
    res.redirect('/kamar_mandi_pa')
  } catch (error) {
    console.log(error)
  }
})

router.get('/kamar_mandi_pi', function(req, res, next) {
  res.render('kamar_mandi_pi', { title: 'Express' });
});

router.get('/perpustakaan', function(req, res, next) {
  res.render('perpus', { title: 'Express' });
});

router.get('/uks', function(req, res, next) {
  res.render('uks', { title: 'Express',  });
});

module.exports = router;
