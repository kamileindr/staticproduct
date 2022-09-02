const urlParams = new URLSearchParams(window.location.search);
const brandname = urlParams.get("brandname");
console.log(brandname);

const url =
  `https://kea-alt-del.dk/t7/api/products?limit=100&brandname=${brandname}`;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //console.log(data);
  console.log("start");
  data.forEach(showProduct);
  console.log("end");
}

function showProduct(product) {
  //grab the template
  const template = document.querySelector("#smallProductTemplate").content;
  //clone it
  const copy = template.cloneNode(true);
  //change content
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(
    ".subtle"
  ).textContent = `${product.articletype} | ${product.brandname}`;
  copy.querySelector("h3").textContent = product.productdisplayname;

  copy.querySelector("a").href = `product.html?id=${product.id}`;
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
    /*
    <div class="discounted">
            <p>Now DKK 1560,-</p>
            <p>-34%</p>
          </div>
    */
    copy.querySelector(".discounted p").textContent =
      product.price / product.discount;
  }
  //grab parent
  const parent = document.querySelector("main");
  //append
  parent.appendChild(copy);
}