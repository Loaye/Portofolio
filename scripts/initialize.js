<!-- Initialization of plugin -->
$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['landing-page', 'about', 'projects', 'left-slide', 'main-slide', 'right-slide', 'far-right-slide'],
    sectionsColor: ['black', 'green', 'blue'],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
  });
});
