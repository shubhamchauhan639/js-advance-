function downloadFile() {
  return new Promise((resolve, reject) => {
    console.log("📥 Download started...");
    setTimeout(() => {
      const network = true;
      if (network) {
        resolve("✅ File downloaded successfully!");
      } else {
        reject("❌ Network error, download failed!");
      }
    }, 2000);
  });
}

downloadFile()
  .then(msg => console.log(msg))
  .catch(err => console.log(err));
