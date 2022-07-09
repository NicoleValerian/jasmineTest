it('should calculate the monthly rate correctly', function () {
  //...
  const values = {amount: 100000, years: 30, rate: 3.00};
  expect(calculateMonthlyPayment(values)).toEqual("421.60");
});



it("should return a result with 2 decimal places", function() {
  //...
  const values = {amount: 123456, years: 27, rate: 4.99};
  expect(calculateMonthlyPayment(values)).toEqual("694.37");
});

/// etc
