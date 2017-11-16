module.exports = function(options) {
let totalQuantity = 100;
  this.add("role:transaction,order:buy", (msg, reply) => {
    console.log("Buy order at: " + options.ts.now());
    console.log(totalQuantity);
    totalQuantity -= msg.quantity;
    console.log(totalQuantity);
    reply({
      order: "buy",
      symbol: msg.symbol,
      price: msg.price,
      quantity_bought: msg.quantity,
      total_quantity: totalQuantity
    });
  });
  this.add("role:transaction,order:sell", (msg, reply) => {
    console.log("Sell order at: " + options.ts.now());
    totalQuantity += msg.quantity;
    reply({
      order: "sell",
      symbol: msg.symbol,
      price: msg.price,
      quantity_sold: msg.quantity,
      total_quantity: totalQuantity
    });

  });
  totalQuantity = totalQuantity;
};
