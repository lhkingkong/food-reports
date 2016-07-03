# food-reports

This project was generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1. 

I add the directives with a more modularized way, so, the **Gruntfile.js** was modified to reach the css inside a directives.

## Build & development
1.- On the root folder of the project run `npm install` and when finishes `bower install`.

2.- Run `grunt build` to create a **dist** folder.

3.- Open the **index.html** with your browser to start the application.

Run `grunt serve` for preview.

## For testing

You'll be welcome into the main page which will have a search input. 

1.- To search for a food please type the name o search e.g. "butter", "carrot", etc.

2.- Click on the search button, or type *Enter* on your keyboard.

3.- The search will start, and it will put the results below. (This will be using the API key needed using the apiService).

4.- Click on one of the results, this will sent you to Report of the selected food. (This uses the resolve on the route so you can get the data before enter to new view, also uses groupBy in a list).

Extra functionality

5.- Go back, at the left side you'll have a button with a **star** icon, that will open your favorite foods.

6.- Search for a food again.

7.- In the list you will have the star icon that if you click it will become a Favorite. (This uses the localStorageService).

8.- Toggle the icon and check the way it works adding it into your Favorite foods.

## Unit tests (in construction)

Running `grunt test` will run the unit tests with karma.
