'use scrict';

let items;
let mostViewed;
// Function to find the highest views number
const findHighestViews = (items)  => {
  let max = 0;
  for(let item of items){
    if(item.scores.week.views > max){
      max = item.scores.week.views;
    }
  }
  mostViewed = max;
};
//GraphQL function that will fetch our data from the nosto api - 
 /////////////////////////////////////////////////////////////////////////////////////////////
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

  //Converting our data into JSON and then storing it in our items variable
  const data = await response.json();
  items = data.data.products.products;

//Finding the best seller item
/////////////////////////////////////////////////////////////////////////////////////////////
//Sorting our items by buys then removing the first item off of our array - this item has the most buys
  let sorted = items.sort((a,b) => b.scores.week.buys - a.scores.week.buys );
  bestSelleroftheWeak = sorted.shift();
  findHighestViews(sorted);

  $('#seller_of_the_week').append(
    `<a href=${bestSelleroftheWeak.url} target='_blank'>
      <img id="seller_of_week_img" src=${bestSelleroftheWeak.imageUrl}>
    </a>`);

//Creating our Carousel
/////////////////////////////////////////////////////////////////////////////////////////////

//Itterating over out items array
 $.each(items, function(i, item){
    let item_list_item = $(`<div class=item_list_item ; id=${i}>`)

    
   
    //Adding image and item link to our current item
    let image = $(`<img id=item_image>`).attr('src', item.imageUrl || 'noimage.jpeg')
    let link = $(`<a>`).attr('href', item.url);
    
    link.append(image);
    item_list_item.append(link);

    // Adding functionality that when you hover over image it will show alternate image
    item_list_item.hover(
      function(){
        image.attr('src', item.alternateImageUrls[0])
      },
      function(){
        image.attr('src', item.imageUrl)
      }
    );
    //Adding text to our current item which includes item name, brand and prices
    let item_text = $(`<div class=item_text>`)
    // Finding the item with the most views
    //Checking to see if our current item's views equal to the value from our findHighestViews function - if it is then we are adding a p-tag to that specific item
    if(item.scores.week.views === mostViewed){
      $(item_text).append($('<p id=most_viewed>Most Viewed!</p>'));
      console.log(item);
    }
    item_text.append($(`<p class=item_name ><strong>${item.name}</strong></p>`));
    item_text.append($(`<p>${item.brand}</p>`));
    item_text.append($(`<p><s>$${item.price}</s></p>`));
    item_text.append($(`<p style="color:red">$${item.listPrice}</p>`));

    //Adding all elements to parent element
    item_list_item.append(item_text)
    $('.slick-carousel').append(item_list_item);

 });
 /////////////////////////////////////////////////////////////////////////////////////////////
 // Initializing carousel via Slick - with additional settings of arrows,how many images we are dispalying and how many images slide over when we scroll through the carousel 
 // See slick docs https://kenwheeler.github.io/slick/
  $('#carousel .slick-carousel').slick({
    centerMode: false,       
    arrows: true,      
    slidesToShow: 3,     
    slidesToScroll: 1,  
    dots: true,
    infinite: false,
    draggable: false
  });
}
//Invoking our main function
getData();