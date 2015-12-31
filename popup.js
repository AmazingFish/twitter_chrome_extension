function click(e) {
  // get the target button class
  switch (e.target.id) {
    case 'fav':
      target = '.js-actionFavorite';
      break;
    case 'follow':
      target = '.js-follow-btn';
      break;
    case 'deny':
      target = '.js-actionDeny';
      break;
    case 'fb_like':
      target = '.UFILikeLink';
  }

  chrome.tabs.executeScript(null,
      {code: "targetElem = document.querySelectorAll('"+target+"');for(var i = 0;i < targetElem.length; i++){targetElem[i].click();};"}
  );
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
