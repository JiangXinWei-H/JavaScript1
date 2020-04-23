// JavaScript Document
$(function() {
   $('dl dt:eq(0)').click(function() {$(this).next().toggle('slow');})
   $('dl dt:eq(1)').click(function() {$(this).next().fadeToggle('slow')});
   $('dl dt:eq(2)').click(function() {$(this).next().slideToggle('slow');})
})