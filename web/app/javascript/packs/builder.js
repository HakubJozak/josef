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
  var draw = SVG('drawing'); //.size(300, 300)
  var rect = draw.rect(100, 100).attr({ fill: '#f06' })
  console.info('done');
})
