fetch("https://kea-alt-del.dk/t7/api/brands")
  .then((res) => res.json())
  .then(goThroughEach);

function goThroughEach(data) {
  //console.log(data);
  data.forEach(showBrand);
}

function showBrand(oneBrand) {

  const firstLetter = oneBrand.brandname.charAt(0).toLowerCase();
  console.log(`I'm ${oneBrand.brandname} and my letter ${firstLetter} and my selector #letter_${firstLetter}`);



  const template = document.querySelector("template").content;

  const myCopy = template.cloneNode(true);

  myCopy.querySelector("a").textContent = oneBrand.brandname;
  myCopy.querySelector("a").href = `productlist.html?brandname=${oneBrand.brandname}`;


 //console.log(oneBrand);

  

  const parent = document.querySelector(`#letter_${firstLetter}`);
  if (parent) {
    parent.appendChild(myCopy);
  }
}
