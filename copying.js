// IN SOURCE APP
let myStyles = appquery.styles()
let jsonList = [];
myStyles.forEach(style => {
  let rawStyle = style.raw(); // This calls the .raw() method on each style object.
  jsonList.push(rawStyle); // Pushes the returned style object into the array.
});
console.log(`${jsonList.length} styles in list`)
// Convert the list to JSON format.
let jsonString = JSON.stringify(jsonList);

// Save to local storage
localStorage.setItem('myStyles', jsonString);


// IN RECEIVING APP

let retrievedStylesJSON = localStorage.getItem('myStyles');

let stylesList = JSON.parse(retrievedStylesJSON);

stylesList.length

stylesList.forEach(styleObj => {
  // Destructure the style object to extract the needed properties.
  const { display, type, properties, states, transitions, id, source_appname } = styleObj;
  
  // Call the create_new_style function with the extracted values.
  appquery.create_new_style(display, type, properties, states, transitions, id, source_appname);
});