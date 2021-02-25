function getUserMusic(){
    let userMusic = prompt('What kind of music do you like?');
    return userMusic;
}
let userMusicPref1 = getUserMusic();
let userMusicPref2 = getUserMusic();
let userMusicPref3 = getUserMusic();
document.write('<h3> I like ' + userMusicPref1 + ', ' + userMusicPref2 + ', ' + userMusicPref3 + '</h3>');

