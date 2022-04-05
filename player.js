var music;
var songChoice;
chooseSong(0);

function chooseSong(p) {
  var lastSong = songChoice;
  var playlist = [
  "Down In Kokomo",
  "Send Me An Angel",
  "Gotta Get Up"
  ];

  var randomItem = playlist[Math.floor(Math.random()*playlist.length)];
  
  var setmusic = music;
  if (setmusic !== undefined) {
  	setmusic.pause();
  }
  
  if (lastSong === randomItem) {
  	chooseSong(1);
    return;
  } else {
    songChoice = (randomItem);
    document.getElementById("songChoice").innerHTML = songChoice;
    music = document.getElementById(randomItem);
    music.onended = function() {
      chooseSong(1);
    };

    if (p === 1) {
      music.play();
      music.currentTime = 0;
      var checkBox = document.getElementById("musicMute");
      if (checkBox.checked == true) {
        music.muted = false;
      } else {
        music.muted = true;
      }
    }
  }
}

function musicVolume(vol) {
  var checkBox = document.getElementById("musicMute");
  var setmusic = music;
  if (vol === undefined) {
  	if (checkBox.checked == true) {
      setmusic.muted = false;
    } else {
      setmusic.muted = true;
    }
  } else {
    setmusic.muted = false;
    setmusic.volume = vol;
  }
}

function musicPlayer() {
  var checkBox = document.getElementById("musicToggle");
  var setmusic = music;
  if (checkBox.checked == true) {
    setmusic.play();
  } else {
    setmusic.pause();
  }
}
