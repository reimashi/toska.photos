<template>
  <div class="page image-container" v-bind:class="{ fullscreen: isFullScreen }">
    <div class="page image-gallery" v-bind:style="{ backgroundImage: 'url(' + currentImage.url + ')' }">
      <div class="controls form-row px-3">
        <div class="col">
          <button title="Fotografía anterior" class="btn btn-outline-primary" v-on:click="redoImage"> <font-awesome-icon :icon="arrowLeft" /> </button>
        </div>
        <div class="col">
          <button title="Fotografía siguiente" class="btn btn-outline-primary" v-on:click="nextImage"> <font-awesome-icon :icon="arrowRight" /> </button>
        </div>
        <!--<div class="dropdown col">
          <button class="btn btn-outline-primary dropdown-toggle" type="button" id="downloadOptions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <font-awesome-icon :icon="cloudDownload" />
          </button>
          <div class="dropdown-menu" aria-labelledby="downloadOptions">
            <a class="dropdown-item" v-bind:href="currentImage.url" download>Comprimida (.jpg)</a>
            <a class="dropdown-item" v-if="currentImage.raw" v-bind:href="currentImage.raw" download>Original</a>
          </div>
        </div>
        <div class="col">
          <button title="Pantalla completa" class="btn btn-outline-primary" v-on:click="fullScreen"> <font-awesome-icon :icon="fullScreenIcon" /> </button>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faArrowRight, faArrowLeft, faCloudDownloadAlt } from '@fortawesome/fontawesome-free-solid';
import { faSquare } from '@fortawesome/fontawesome-free-regular';
import { EventBus } from '../event-bus';
import { FullScreen } from "../fullscreen";

let images = [
  { "name": "", "url": require('../assets/001.png'), "raw": ""},
  { "name": "", "url": require('../assets/002.png'), "raw": ""},
  { "name": "", "url": require('../assets/003.png'), "raw": ""},
  { "name": "", "url": require('../assets/004.png'), "raw": ""},
  { "name": "", "url": require('../assets/005.png'), "raw": ""},
  { "name": "", "url": require('../assets/006.png'), "raw": ""},
  { "name": "", "url": require('../assets/007.png'), "raw": ""},
  { "name": "", "url": require('../assets/008.png'), "raw": ""},
  { "name": "", "url": require('../assets/009.png'), "raw": ""},
  { "name": "", "url": require('../assets/010.png'), "raw": ""},
  { "name": "", "url": require('../assets/011.png'), "raw": ""},
  { "name": "", "url": require('../assets/012.png'), "raw": ""},
  { "name": "", "url": require('../assets/013.png'), "raw": ""},
  { "name": "", "url": require('../assets/014.png'), "raw": ""},
  { "name": "", "url": require('../assets/015.png'), "raw": ""},
  { "name": "", "url": require('../assets/016.png'), "raw": ""},
  { "name": "", "url": require('../assets/017.png'), "raw": ""},
  { "name": "", "url": require('../assets/018.png'), "raw": ""},
  { "name": "", "url": require('../assets/019.png'), "raw": ""},
  { "name": "", "url": require('../assets/020.png'), "raw": ""},
  { "name": "", "url": require('../assets/021.png'), "raw": ""},
  { "name": "", "url": require('../assets/022.png'), "raw": ""},
  { "name": "", "url": require('../assets/023.png'), "raw": ""},
  { "name": "", "url": require('../assets/024.png'), "raw": ""},
  { "name": "", "url": require('../assets/025.png'), "raw": ""},
  { "name": "", "url": require('../assets/026.png'), "raw": ""},
  { "name": "", "url": require('../assets/027.png'), "raw": ""},
];
let currentIndex = 0;

export default {
  name: 'Home',
  data () {
    return {
      toska: 'Welcome to Your Vue.js App',
      currentImage: images[currentIndex],
      arrowLeft: faArrowLeft,
      arrowRight: faArrowRight,
      fullScreenIcon: faSquare,
      cloudDownload: faCloudDownloadAlt,
      isFullScreen: false,
      imageSize: "inherit"
    }
  },

  methods: {
    nextImage: function(event) {
      currentIndex++;
      if (currentIndex >= images.length) currentIndex = 0;
      this.currentImage = images[currentIndex];
    },
    redoImage: function(event) {
      currentIndex--;
      if (currentIndex < 0) currentIndex = images.length - 1;
      this.currentImage = images[currentIndex];
    },
    fullScreen: function(event) {
      this.isFullScreen = !this.isFullScreen;
      if (this.isFullScreen) FullScreen.open(); else FullScreen.close();
      this.imageSize = "100%";
      EventBus.$emit('go-fullscreen', this.isFullScreen);
    }
  },

  components: {
    FontAwesomeIcon
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../common';

  .image-container {
    position: relative;
    height: 85%;

    &.fullscreen {
      height: 100%;
    }

    .image-gallery {
      position:absolute;
      height: 100%;
      /* Center and scale the image nicely */
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      left:0px;
      right:0px;
      bottom:0px;
      z-index: 0;

      .controls {
        color: map-get($theme-colors, "primary");
        position: fixed;
        bottom: 16px;
        z-index: 1000;

        .btn-outline-primary:hover {
          background-color: transparentize(map-get($theme-colors, "primary"), 0.8);
        }
      }
    }
  }
</style>
