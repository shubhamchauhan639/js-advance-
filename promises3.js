function placeOrder(foodItem) {
  return new Promise((resolve, reject) => {
    console.log(`Placing order for ${foodItem}...`);

    setTimeout(() => {
      let isAvailable = true; 

      if (isAvailable) {
        resolve(`${foodItem} is ready!`);
      } else {
        reject(`${foodItem} is not available right now.`);
      }
    }, 2000);
  });
}


placeOrder("Pizza")
  .then((message) => {
    console.log("✅ Success:", message);
  })
  .catch((error) => {
    console.log("❌ Error:", error);
  })
  .finally(() => {
    console.log("🍽️ Thank you for visiting!");
  });
