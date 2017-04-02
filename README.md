# React Form - update

## History

Based on Kasper Wargula's original [post](https://x-team.com/blog/tutorial-forms-in-react-and-redux/) - I have updated the code to reflect some changes in the ever changing sphere.

## Changes to Kasper's awesome code

Firstly, the method of creating [Material](http://www.material-ui.com/#/) has changed so the code is now updated to reflect this (mainly to do with MuiThemeProvider).

Secondly, I have changed the instances of *React.createClass* with *Components* to more accurately reflect how I work in React. I usually use *.jsx* extensions but have kept Kasper's original *.js* for consistency.

## Trying it out

First clone this repo, then change directory into the *repoName* if you have to.

Run the following command:

    npm install; npm run build; npm run watch;

If you wish to run any tests I have included the brilliant [enzyme](https://github.com/airbnb/enzyme) test suite from (airbnb)[https://github.com/airbnb], and you can run it as follows:

    npm test

If you wish to contact me, please feel free to do so via [ScotCode](http://scotcode.co.uk)
