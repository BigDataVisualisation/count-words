//code based on https://github.com/shiffman/A2Z-F17/tree/master/week5-analysis/01_concordance

var someText = "A rainbow is an optical and meteorological phenomenon that is caused by both reflection and refraction of light in water droplets resulting in a spectrum of light appearing in the sky. It takes the form of a multicoloured arc. Rainbows caused by sunlight always appear in the section of sky directly opposite the sun. Rainbows can be full circles, however, the average observer sees only an arc, formed by illuminated droplets above the ground,[1] and centred on a line from the sun to the observer's eye. In a primary rainbow, the arc shows red on the outer part and violet on the inner side. This rainbow is caused by light being refracted (bent) when entering a droplet of water, then reflected inside on the back of the droplet and refracted again when leaving it. In a double rainbow, a second arc is seen outside the primary arc, and has the order of its colours reversed, red facing toward the other one, in both rainbows. This second rainbow is caused by light reflecting twice inside water droplets.";

var keys = [];
var wordFreq = {};

function setup() {
  createCanvas(800, 1500);
  noLoop();

  wordFreq = wordFreqency(someText);
  //var words = wordsSorted(wordDict);
  console.log(wordFreq);


}

function draw() {

  background(255);

  text(someText, 20, 30, width - 20);

  var keys = Object.keys(wordFreq);
  var lineHeight = 15;
  var startY = 150;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var y = startY + i * lineHeight;
    text(key + ': ' + wordFreq[key], 20, y);
  }

}

function wordFreqency(string) {
  var words = string.replace(/[.]/g, '').split(/\s/);
  var freqMap = {};
  words.forEach(function (w) {
    if ((/\w{2,}/.test(w))) {
      if (!freqMap[w]) {
        freqMap[w] = 0;
      }
      freqMap[w] += 1;
    }
  });

  return freqMap;
}
