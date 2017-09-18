/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Support component names relative to this directory:
var componentRequireContext = require.context("builder", true)
// var ReactRailsUJS = require("react_ujs")
// ReactRailsUJS.useContext(componentRequireContext)

// import hello from 'hello.js';
import SVG from 'svgjs'
import $ from 'jquery'



$(document).ready(function() {
  var draw = SVG('drawing').size('100%', '100%')
  var rect = draw.rect(100, 100).attr({ fill: '#f06', rx: 10, ry: 20 })
  console.info('done');

//  rect.animate(4000).attr({ fill: 'blue' })
//  rect.animate(2000).center(200, 200)
  rect.animate(3000).rotate(45).skew(25, 0)
  rect.animate(3000).move(100, 100)

  console.info('again');
  
})
