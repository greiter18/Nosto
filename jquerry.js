// 'use scrict';

// fetch('https://api.nosto.com/v1/graphql', {
//   method: 'POST',

//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Basic ' + btoa(":" + "F7k5O1PHyzjwbjQF8Z6UvvZGuu90l3M5WR8Lp8gNoP8nwEQ6zpavKNVUajlZrX6x")
//   },

//   body: JSON.stringify({
//     query: 
//     `query {
//       products (limit: 50) {
//         products {
//           name
//           price
//           listPrice
//           brand
//           imageUrl
//           alternateImageUrls
//           url
//           scores {
//             week {
//               views
//               buys
//             }
//           }
//         }
//       }
//     }`
//   })
// })
// .then(res => res.json())
// .then(res => console.log(res.data.products.products))

// $(document).ready(function(){
//   $("#hidden").hover(function(){
//     $(this).css("color", "black");
//   }, 
//   function(){
//     //$(this).hide();
//     $(this).css("color", "white");
//   });

//   $("button").click(function(){
//     alert("I'm alerting you")
//   })
// });



//$(document).ready(function(){ // runs when the document is ready
  //$('h1').hide();
  // $('h1#heading1').hide();
  // $('h1.heading2').hide();
  // $('p span').css('color', 'red');
  // $('ul#list li:first').css('color', 'orange');
  // $('ul#list li:last').css('color', 'green');
  // $('ul#list li:even').css('background-color', 'yellow');
  // $('ul#list li:odd').css('background-color', '#cccccc');
  // $('ul#list li:nth-child(3n)').css('list-style', 'none');

  // // $(':button').hide();
  // // $(':submit').hide();
  // $(':text').hide();

  // $('[href]').css('color', 'red');
  // $('a[href="https://yahoo.com"]').css('color', 'green');

  // $('*').hide(); // will hide everything




//})
/////////////////////////////////////////////
//CLICK EVENTS
// $('#btn1').click(() => {
//     alert('Button clicked')
// })

// $('#btn2').on('click', () => {
//   alert('Button2 Clicked')
// })

// $('#btn1').click(() => {
//     $('.para1').hide();
// })
// $('#btn2').click(() => {
//     $('.para1').show();
// })
// or 
// $('#btn1').click(() => {
//     $('.para1').toggle();
// })

/////////////////////////////////////////////


// $('#btn1').dblclick(() => {
//     $('.para1').toggle();
// })

// $('#btn1').hover(() => {
//     $('.para1').toggle();
// })

//
// $('#btn1').mousemove(() => {
//     $('.para1').toggle();
// })
// $('#btn1').on('mousemove',() => {
//     $('.para1').toggle();
// })
// $('#btn1').on('mousedown',() => {
//     $('.para1').toggle();
// })
// $('#btn1').on('mouseup',() => {
//     $('.para1').toggle();
// })

// $('#btn1').click((e) => {
//     console.log(e);
//     console.log(e.currentTarget);
//     // alert(e.currentTarget.innerHTML);
//     alert(e.currentTarget.className);
// })

// $('#btn1').on('mousemove',(e) => {
//     console.log(`Coors: Y: ` + e.clientY + "x: "+e.clientX);
// })
// $(document).on('mousemove',(e) => {
//     $('#coords').html(`Coors: Y: ` + e.clientY + "x: "+e.clientX);
// })


// FORM
// FOCUS

// $('input').focus(function(){
//   $(this).css('background', 'pink');
// })
// $('input').blur(function(){
//   $(this).css('background', 'white');
// })

// $('input').keyup(function(){
//   console.log('keyup');
// })
// gettig data types

// $('input').keyup(function(e){
//   console.log(e.target.value);
// })

// $('select#gender').change(function(e){
//   alert(e.target.value)
// });

// $('#form').submit(function(e){
//   e.preventDefault();
//   let name = $('input#name').val();
//   console.log('Submitted');
//   console.log(name);
// })

// event changing another element

//$('p.para1').css({color: 'red', background: '#ccc'});

// $('p.para2').addClass('myClass');

// $('p.para2').removeclass('myClass');
// $('#btn1').click(function(){
//   $('p.para2').toggleClass('myClass');
// });

// $('#myDiv').text('Hello World');
// $('#myDiv').html('<h3>Hello World</h3>');
// // alert($('#myDiv').text())

// $('ul').append('<li> Append LIst Item</li>');
// $('ul').prepend('<li> Prepend LIst Item</li>');

// $('.para1').appendTo('.para2');
// $('.para1').prependTo('.para2');

// $('ul').before('<h4>Hello</h4>');
// $('ul').after('<h4>World</h4>');
// $('ul').empty();
// $('ul').detach(); // detach from the DOM

// $('a').attr('target', "_blank")
// // alert($('a').attr('href'));
// $('a').removeAttr('target');

//wrapp specific elements in other elements
// $('p').wrap('<h1>');
// $('p').wrapAll('<h1>');

// $('#newItem').keyup(function(e){
//   let code = e.which;
//   if(code === 13){
//     e.preventDefault();
//     $('ul').append(`<li>${e.target.value} </li>`)
//   }
// })


// ARRAYS

// const myArr = ['Brad', 'Kelly', 'Nate', "Jose"];

// $.each(myArr, function(i, val){
//   $('#users').append(`<li>${val}</li>`)
// })

// const newArr = $('#list li').toArray();
// console.log(newArr);
// $.each(newArr, function(i, val){
//   console.log(val.innerHTML);
// })