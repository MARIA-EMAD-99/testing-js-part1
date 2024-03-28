const User = require("../lab2");


describe('test user obj', () => {
  let user;

  beforeEach(() => {
    user = new User('maria', 'asdasdasd');
  })
  it(" Adds a product to the cart array.", () => {
    const products = { name: 'jacket', price: 500 };
    user.addToCart(products);
    expect(user.cart).toContain(products);
  });

  it("testing calculateTotalCartPrice logic", () => {
    const products = [
      { name: "dress", price: 200 },
      { name: "bag", price: 240 },
    ];
    products.forEach((pr) => user.addToCart(pr));
    const totoal = products.reduce((acc, prd) => acc + prd.price, 0);
    expect(user.calculateTotalCartPrice()).toBe(totoal);
  });
  it('These are test cases for checkout function', () => {
    const paymentModel = {
      goToVerifyPage: jasmine.createSpy(),
      returnBack: jasmine.createSpy(),
      isVerify: jasmine.createSpy().and.returnValue(true),
    };
    expect(user.checkout(paymentModel)).toBe(true);
    expect(paymentModel.goToVerifyPage()).toHaveBeenCalled;
    expect(paymentModel.returnBack()).toHaveBeenCalled;
    expect(paymentModel.isVerify()).toHaveBeenCalled;
  })
})