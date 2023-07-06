var musicToggle = document.getElementById("music-toggle");
var bgMusic = document.getElementById("bg-music");

musicToggle.addEventListener("click", function() {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.classList.remove("paused");
  } else {
    bgMusic.pause();
    musicToggle.classList.add("paused");
  }
});
function switchPreview(treeIndex) {
  updatePreview(treeIndex);
  changeMusic(treeIndex);
   
}


function changeMusic(musicIndex) {
  // 更改背景音乐的源
  bgMusic.src = "music/music" + musicIndex + ".mp3";
}

// 摆动动画
var rotationAngle = 0;
var rotationDirection = 1;
var rotationSpeed = 0.1;

function animateRotation() {
  rotationAngle += rotationDirection * rotationSpeed;
  musicToggle.style.transform = "rotate(" + rotationAngle + "deg)";

  requestAnimationFrame(animateRotation);
}

animateRotation();

function switchPreview(treeIndex) {
  updatePreview(treeIndex);
}

function updatePreview(treeIndex) {
  var previewImage = document.getElementById("preview-image");
  var previewText = document.getElementById("preview-text");

  previewImage.src = "img/tree" + treeIndex + ".png";
  previewText.innerHTML = getTreeName(treeIndex) + "";
}
var selectedTree = ""; // 全局变量用于存储所选的树种名称

function passSelectedTree() {
  // 获取所选的树种名称
  var treeIndex = getSelectedTreeIndex();
  selectedTree = getSelectedTreeName(treeIndex);

  // 跳转到植树页面，并把树种名称作为查询字符串传递过去
  window.location.href = "plant-tree.html?tree=" + selectedTree;
}
function getTreeName(treeIndex) {
  switch (treeIndex) {
    case 1:
      return "银杏树";
    case 2:
      return "苹果树";
    case 3:
      return "竹子";
    case 4:
      return "橡树";
    case 5:
      return "圣诞树";
    case 6:
      return "樱花树";
    case 7:
      return "梅花树";
    case 8:
      return "冰树";
    case 9:
      return "松树";
    default:
      return "";
  }
}
