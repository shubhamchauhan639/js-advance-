function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve("✅ Login successful!");
      } else {
        reject("❌ Invalid username or password!");
      }
    }, 1500);
  });
}

async function checkLogin() {
  try {
    console.log("🔐 Checking login...");
    const result = await loginUser("admin", "1234");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

checkLogin();
