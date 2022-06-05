function gen() {
  var arg = document.getElementById("type").value;
  switch(arg) {
    case "32b":
      var ids = prodtype_32b;
      break;
    case "64b":
      var ids = prodtype_64b;
      break;
    case "128b":
      var ids = prodtype_128b;
      break;
    case "256b":
      var ids = prodtype_256b;
      break;
    case "512b":
      var ids = prodtype_512b;
      break;
    case "1k":
      var ids = prodtype_1k;
      break;
    case "4k":
      var ids = prodtype_4k;
      break;
    case "8k":
      var ids = prodtype_8k;
      break;
    case "16k":
      var ids = prodtype_16k;
      break;
    case "32k":
      var ids = prodtype_32k;
      break;
    case "40k":
      var ids = prodtype_40k;
      break;
    case "64k":
      var ids = prodtype_64k;
      break;
    case "80k":
      var ids = prodtype_80k;
      break;
    case "96k":
      var ids = prodtype_96k;
      break;
    case "100k":
      var ids = prodtype_100k;
      break;
    case "128k":
      var ids = prodtype_128k;
      break;
    case "256k":
      var ids = prodtype_256k;
      break;
    case "artpack":
      var ids = prodtype_artpack;
      break;
    case "bbstro":
      var ids = prodtype_bbstro;
      break;
    case "cracktro":
      var ids = prodtype_cracktro;
      break;
    case "demo":
      var ids = prodtype_demo;
      break;
    case "demopack":
      var ids = prodtype_demopack;
      break;
    case "demotool":
      var ids = prodtype_demotool;
      break;
    case "dentro":
      var ids = prodtype_dentro;
      break;
    case "diskmag":
      var ids = prodtype_diskmag;
      break;
    case "fastdemo":
      var ids = prodtype_fastdemo;
      break;
    case "game":
      var ids = prodtype_game;
      break;
    case "intro":
      var ids = prodtype_intro;
      break;
    case "invitation":
      var ids = prodtype_invitation;
      break;
    case "liveact":
      var ids = prodtype_liveact;
      break;
    case "musicdisk":
      var ids = prodtype_musicdisk;
      break;
    case "procedural_graphics":
      var ids = prodtype_procedural_graphics;
      break;
    case "report":
      var ids = prodtype_report;
      break;
    case "slideshow":
      var ids = prodtype_slideshow;
      break;
    case "votedisk":
      var ids = prodtype_votedisk;
      break;
    case "wild":
      var ids = prodtype_wild;
      break;
    default:
      var ids = prodtype_all;
      break;
  }
  var pl = ids[Math.floor(Math.random()*ids.length)];
  for(var i=0; i < 49; i++){
    pl += "," + ids[Math.floor(Math.random()*ids.length)];
  }
  pla = "https://www.youtube.com/watch_videos?video_ids=" + pl
  document.getElementById("ytl").href = pla;
}
