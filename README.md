<p align="center">
    <img src="/assets/img/logo-80x82.png" alt="Jonathan Lovera"/>
    <br>
    <h1>Jonathan Lovera's Portfolio</h1>
</p>

This is my simple portfolio created with ReactJS compiled with webpack.

It contains some frameworks as Material Design, Jquery, TypedJS and others.

Live demo: https://www.jonlovera.com

# Installation

To run this project local you must have NodeJS installed.

1. Clone the repository
   `git clone https://github.com/jonlovera/jonlovera.github.io.git`

2. Install npm dependecies
   `npm install`

3. Run project
   `npm start`

# Basic Usage

Edit the JSON in with your information in `/src/json/index.js`

Change de images with yours and edit title of the website in `/assets/index.ejs` and `/assets/404.ejs`

Add your PDF resume to `/assets/[name in JSON file] Resume.ejs`

# Production

To prepare for production you need to compile with webpack before upload.

1. Compile with webpack
   `npm run build`

2. Commit to git
   `git add . git commit -am "SOME DESCRIPTION" git push origin master`

Done!

# License

This project is licensed under [MIT](https://github.com/jonlovera/jonlovera.github.io/blob/master/LICENSE).
