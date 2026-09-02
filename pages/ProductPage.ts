import { Page, Locator } from "@playwright/test";

export class ProductPage {
  readonly page: Page;

  //product page
  readonly allProductsText: Locator;
  readonly searchInput: Locator;
  readonly searchBox: Locator;

  //categories
  readonly women: Locator;
  readonly men: Locator;
  readonly kids: Locator;
  readonly dress:Locator

  //brands
  readonly polo: Locator;
  readonly hm: Locator;
  readonly madame: Locator;

  //product
  readonly productName: Locator;
  readonly price: Locator;
  readonly Image: Locator;
  readonly addToCart: Locator;

  constructor(page: Page) {
    this.page = page;

    this.allProductsText = page.getByRole("heading", { name: "All Products" });

    this.searchInput = page.locator("#search_product");
    this.searchBox = page.locator("#submit_search");

    this.women = page.locator('a[href="#Women"]')
    this.men = page.locator('a[href="#Men"]');
    this.kids = page.locator('a[href="#Kids"]');
    this.dress = page.getByText("Dress",{exact:true })

    this.polo = page.getByRole("link",{name:"Polo"});
    this.hm = page.getByRole("link",{name:"H&M"});
    this.madame = page.getByRole("link",{name:"Madame"});

    this.productName = page.locator(".productinfo p");
    this.price = page.locator(".productinfo h2");
    this.Image = page.locator(".productinfo img");
    this.addToCart = page.locator(".add-to-cart");
  }

  async searchProduct(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchBox.click();
  }

  async clickWomen() {
    await this.women.click();
  }

  async clickMen() {
    await this.men.click();
  }

  async clickPolo() {
    await this.polo.click();
  }

  async clickHM() {
    await this.hm.click();
  }

  async clickMadame() {
    await this.madame.click();
  }

  async clickDress(){
    await this.dress.click();
  }

  // it works like if/else condition
  async addProductToCart(productName?: string) {
    const productCard = productName
      ? this.page
          .locator(".product-image-wrapper")
          .filter({ hasText: productName })
      : this.page.locator(".product-image-wrapper").first();

    // to  hover on product to see add to cart option
    await productCard.hover();
    await productCard.locator(".add-to-cart").first().click();
  }
}
