'use scrict';

let items;
let mostViewed;

const findHighestViews = (items)  => {
  let max = 0;
  for(let item of items){
    if(item.scores.week.views > max){
      max = item.scores.week.views;
    }
  }
  mostViewed = max;
}

async function getData() {
  const response = await fetch('https://api.nosto.com/v1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(":" + "F7k5O1PHyzjwbjQF8Z6UvvZGuu90l3M5WR8Lp8gNoP8nwEQ6zpavKNVUajlZrX6x")
    },
    body: JSON.stringify({
      query: 
      `query {
        products (limit: 50) {
          products {
            name
            price
            listPrice
            brand
            imageUrl
            alternateImageUrls
            url
            scores {
              week {
                views
                buys
              }
            }
          }
        }
      }`
    })
  })
  const data = await response.json();
  items = data.data.products.products
  console.log('items',items);
  ///////////////////////////////////////////////////////////
  //find the best selle of the week

  let sorted = items.sort((a,b) => b.scores.week.buys - a.scores.week.buys );
  bestSelleroftheWeak = sorted.shift();
  findHighestViews(sorted);

  $('#seller_of_the_week').append(
    `<a href=${bestSelleroftheWeak.url} target='_blank'>
      <img id="seller_of_week_img" src=${bestSelleroftheWeak.imageUrl}>
    </a>`);
/////////////////////////////////////////////////////////////

  //  let highestValue = Math.max.apply(Math, $.map(items, function(object) {
  //   return object.scores.week.views;
  //    }));

 $.each(items, function(i, item){
    let item_list_item = $(`<div class=item_list_item ; id=${i}>`)
    if(item.scores.week.views === mostViewed){
      $(item_list_item).prepend($('<p id=most_viewed>Most Viewed!</p>'));
    }

    let image = $(`<img id=item_image>`).attr('src', item.imageUrl );
    let link = $(`<a>`).attr('href', item.url);
    link.append(image);
    item_list_item.append(link);
    item_list_item.hover(
      function(){
        image.attr('src', item.alternateImageUrls[0])
      },
      function(){
        image.attr('src', item.imageUrl)
      }
    )

    let item_text = $(`<div class=item_text>`)
    item_text.append($(`<p class=item_name ><strong>${item.name}</strong></p>`));//.text(item.name);
    item_text.append($(`<p>${item.brand}</p>`));//.text(item.brand);
    item_text.append($(`<p><s>$${item.price.toFixed(2)}</s></p>`));
    item_text.append($(`<p style="color:red">$${item.listPrice.toFixed(2)}</p>`));

    item_list_item.append(item_text)
    $('.slick-carousel').append(item_list_item);

  //console.log(`${item.brand} - ${item.name}  - :   ${item.scores.week.buys}`);
//   $(document).ready(function() {
//   var mySwiper = new Swiper('.swiper-container', {
//     // Optional parameters
//     loop: true,
//     autoplay: {
//       delay: 2000,
//     },
//   });
// });



 })


  // $('.slick-carousel').slick(
  //   {
  //   dots: true,
  //   // arrows: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //    responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]

  // }
  
  // );

  // $('.slick-carousel').slick({
  //   dots: true,
  //   arrows: true,
  //   prevArrow: '<button type="button" class="slick-prev">Previous</button>',
  //   nextArrow: '<button type="button" class="slick-next">Next</button>',
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });

    //  $(".owl-carousel").owlCarousel();
// $(document).ready(function() {
//    $('.main-carousel').slick()
// });
  $('#carousel .slick-carousel').slick({
      centerMode: false,       
      arrows: true,      
      slidesToShow: 3,     
      slidesToScroll: 1,  
      dots: true,
      infinite: false,
  });
}

getData();
 





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
// .then(res => res.json())
// // .then(res => console.log(res.data.products.products))
// .then(res => transfer(res.data.products.products))

// console.log(items);










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
// // .then(res => console.log(res.data.products.products))
// .then(res => transfer(res.data.products.products))
// // .then(res => items = res.data.products.products)
// //.then(res => console.log(res.data.products.products))
// // .then(console.log(items));

// console.log(items);
