function fetchUserData() {
  return new Promise((resolve, reject) => {
    console.log("📡 Fetching user data...");
    setTimeout(() => {
      const dataAvailable = true;

      if (dataAvailable) {
        resolve({ name: "Shubham", age: 22, city: "Delhi" });
      } else {
        reject("❌ Failed to fetch user data!");
      }
    }, 2000);
  });
}

async function showUserData() {
  try {
    const user = await fetchUserData();
    console.log("✅ User data received:");
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

showUserData();
