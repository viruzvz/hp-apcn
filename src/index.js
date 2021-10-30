import './styles/main.scss'
import './styles/main.less'
import 'popper.js'
import 'bootstrap'
import $ from 'jquery'
window.$ = window.jQuery = $

!(function($) {
  "use strict"
  
// contact form 7 + bootstrap

$(document).ready(function () {
  // $('#wpcf7-f122-o1').addClass('container')
  $('.wpcf7-form').addClass('row')
  $('.c7-md-6').parent().parent().parent().addClass('col-md-6')
  $('.c7-md-12').parent().parent().parent().addClass('col-md-12')
  $('.wpcf7-submit').parent().addClass('col-md-12')
})


})(jQuery)