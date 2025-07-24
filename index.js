function startMusic() {
  const audio = document.getElementById("mymusic");
  audio.play().then(() => {
    document.getElementById("overlay").style.display = "none";
    showToast(); // ✅ Show the toast after music starts
  }).catch(err => {
    console.error("Playback failed:", err);
    alert("Please click to allow music.");
  });
}
  function showToast() {
    const toast = document.getElementById("toast");
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000); // 3 seconds
  }