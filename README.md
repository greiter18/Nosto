<!-- FED 2022 - TECH CHALLENGE
Hello dear candidate and welcome to the tech challenge for the position of Frontend Developer at
Nosto. We are happy to know you want to be part of our team and we want to thank you already for the
time and effort you’ll put into this challenge.
We look forward reading through your code!

The task is designed to test your knowledge of the tech stack we use every day at Nosto: HTML & CSS,
JavaScript, and API querying.
To successfully complete the challenge, you need to write a GraphQL query and fetch products data from
the Nosto back-end, which are returned as a JSON object.
Once the data are returned, you’ll need to create a carousel of products following the design provided in
the ZIP file you have received.

Here’s what you need to start off:

query {
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
}
/* QUERY */

/* REQUEST HEADER */
'Content-Type': 'application/graphql',
'Authorization': 'Basic ' + btoa(":" + "F7k5O1PHyzjwbjQF8Z6UvvZGuu90l3M5WR8Lp8gNoP8nwEQ6zpavKNVUajlZrX6x")
/* ENDPOINT */
"https://api.nosto.com/v1/graphql"
TASK OBJECTIVE

Getting started

You will need to provide a HTML file containing all the code you have produced: if we click on the
.html file you have delivered, the browser should open, showing your work. N.B. do not use
frameworks or server boilerplates (e.g. create-react-app) cause the generated file won’t be able to
be opened in the browser as a file, and the outcome of your task won’t be valid;
The products are organised in a carousel. To create one, we usually use plugins such as slick, or
owlCarousel, or Flickity. You can pick one of these, or choose the carousel script you prefer;
If a product contains an alternate image, on desktop this must be shown when hovering the product’s
card. If the product has more than one alternate image, use the first one of the array.
The products’ names should not break into two lines. If a name is too long, then it should be
truncated;
If the product price has some trailing decimal zeros (.00), they will have to be removed. Any other
decimals will have to be shown;
When clicking on the product image, you will re-direct the user to the product page;
Two of the products displayed have labels: BEST SELLER THIS WEEK and MOST VIEWED. These
information are stored, respectively, in products.products.scores.week.buys and
products.products.scores.week.views:
The MOST VIEWED label will be assigned to the product that has the highest
products.products.scores.week.views value: this product is included in the carousel;
The BEST SELLER THIS WEEK label will be assigned to the product that has the highest
products.products.scores.week.buys value: this product is a stand-alone product -which means
that it is excluded from the carousel.

The products that you received in the JSON object and the products in the design file may be
different, just use whatever you find in the JSON;
The design we have provided is just a direction: font-family, widths, colors, margins, padding -
everything is up to you! For us what matters is the code behind it;
The price of products in the JSON and the price of the same product following the URL may be
different, don‘t worry about this;
We are expecting you to use client-side JavaScript, jQuery, HTML, CSS, SASS, Less;
You can’t use JavaScript frameworks (React, Angular, etc.), Axios.

Please let us know if there's any other information we can share to help you succeed in your tech
challenge. Good luck! -->