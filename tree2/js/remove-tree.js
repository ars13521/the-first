// 获取 URL 中传递的树种名称
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const selectedTree = urlParams.get('tree');

// 更新页面上的树种名称
var treeNameElement = document.getElementById("tree-name");
treeNameElement.textContent = selectedTree;

// 根据进度条的宽度来显示不同的图片
var progressElement = document.getElementById("progress");
var youngTreeImage = document.getElementById("young-tree");
var thumbnailElement = document.getElementById("thumbnail");
var previewImage = document.getElementById("preview-image");
var treeNameElement = document.getElementById("tree-name");
treeNameElement.textContent = selectedTree;
function updateProgress(progress) {
  progressElement.style.width = progress + "%";

  if (progress < 50) {
    youngTreeImage.style.display = "block";
    thumbnailElement.style.display = "none";
    previewImage.style.display = "none";
  } else if (progress >= 50 && progress < 100) {
    youngTreeImage.style.display = "none";
    thumbnailElement.style.display = "block";
    previewImage.style.display = "none";
  } else {
    youngTreeImage.style.display = "none";
    thumbnailElement.style.display = "none";
    previewImage.style.display = "block";
  }
}

// 示例进度值为 10%
updateProgress(10);
