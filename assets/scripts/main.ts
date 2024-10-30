let outputAllCard = document.querySelector(".category-right") as HTMLDivElement;
const cardAPI = `https://6715fa1733bc2bfe40bbca78.mockapi.io/autoData`;
let acsesuar = document.querySelector("#acses");

let header__links = document.querySelector("#header_links") as HTMLElement;


fetch(cardAPI)
  .then((data) => data.json())
  .then((data) => {
    showCards(data); 
    header__links.addEventListener("click", function (e) {
      e.preventDefault();
      const target = e.target as HTMLElement;
      if (target) {
        outputAllCard.innerHTML = ""; 
        showCards(data, target.id);
      }
    });
  })
  .catch((error) => console.log(error));

function showCards(data: any[], category?: string): void {
  data.forEach((element) => {
    if (!category || element.category === category) {
      outputAllCard.innerHTML += `
        <div class="card-right">
          <img src="${element.img}" alt="" />
          <div class="card-bottom">
            <h4>${element.name}</h4>
            <h5>${element.product_data}</h5>
            <div class="card-btns">
              <button id="price">990р.</button>
              <div class="plus-minus-btn">
                <button id="minus">-</button>
                <h6>1</h6>
                <button id="plus">+</button>
              </div>
              <button><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
          </div>
        </div>
      `;
    }
  });
}
