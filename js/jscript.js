//تعطيل النقر بالزر الايمن
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

//تعطيل النسخ واللصق
document.addEventListener("keydown", function (event) {
  if (
    event.ctrlKey &&
    (event.key === "c" ||
      event.key === "u" ||
      event.key === "s" ||
      event.key === "p")
  ) {
    event.preventDefault();
  }
});

//تعطيل نسخ الصور
document.addEventListener('dragstart', function(e){
  if(e.target.tagName.toLowerCase() === 'img') { 
    e.preventDefault();
  }
});


//تعطيل وظائف النسخ الاصلية
document.addEventListener('copy', function(e){
  e.defaultPrevented();
});

//تعطيل نسخ النصوص
document.addEventListener('selectstart', function(e){
  e.preventDefault();
});

//

//تعطيل ادوات المطورين
document.addEventListener("keydown", function (event) {
  if (
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey && event.key === "I")
  ) {
    event.preventDefault();
  }
});
