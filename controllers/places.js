const router = require('express').Router()
const React = require('react')
const express = require('express')
 
 
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/french-toast.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/rainbowfood.jpg'
      }]

    res.render('places/index', { places }) 
})
  
module.exports = router
