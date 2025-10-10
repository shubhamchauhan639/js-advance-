function orderPizza() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let available = true;
      if (available) {
        resolve("🍕 Pizza is ready!");
      } else {
        reject("❌ Sorry, pizza not available!");
      }
    }, 1500);
  });
}

async function placeOrder() {
  try {
    console.log("Ordering pizza...");
    const result = await orderPizza();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

placeOrder();
