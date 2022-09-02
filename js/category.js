fetch("https://kea-alt-del.dk/t7/api/brands")
  .then((res) => res.json())
  .then(goThroughEach);

function goThroughEach(data) {
  //console.log(data);
  data.forEach(showBrand);
}

function showBrand(oneBrand) {


  
 /* console.log(oneBrand);

  const template = document.querySelector("template").content;

  const myCopy = template.cloneNode(true);

  myCopy.querySelector("a").textContent = oneBrand.brandname;
  myCopy.querySelector("a").href = `productlist.html?brandname=${oneBrand.brandname}`;

const parent = document.querySelector("#letter_b ol");

parent.appendChild(myCopy);*/
}
