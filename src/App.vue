<template>
  <div id="app">
    <header class="blog-header py-3 px-5" v-if="!hiddenBar">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-xs-8 text-center">
          <h1>Toska</h1>
        </div>
        <div class="col-4 d-flex justify-content-end align-items-center">
          <button class="btn btn-sm btn-outline-info" data-toggle="modal" data-target="#moreInfo">Información</button>
        </div>
      </div>
    </header>

    <div id="moreInfo" class="modal" tabindex="-1" role="dialog" aria-labelledby="moreInfo">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Toska</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Toska nació como proyecto integrado del CFGS de Fotografía de la EASD Antonio Faílde a manos de la fotógrafa Alba González Fernández, estudiante de dicho centro.</p>
            <p>Su finalidad es dar una representación a las sensaciones y sentimientos vividos por pacientes con depresión diagnosticada, que de forma desinteresada y anónima, dieron su propio testimonio respecto a esta enfermedad. Así, la fotógrafa mediante su cámara y su propio cuerpo como canal entre el paciente y el espectador dió forma a dichos testimonios, creando con ello un proyecto de carácter personal y psicológico, que acabó dando forma a la publicación digital que estamos viendo.</p>
            <p>Toska habla de emociones, de sentimientos, pero también de una enfermedad mental que cada vez afecta a más gente, y cada vez desde edades más tempranas.</p>
            <p>El nombre viene dado de la intraducible palabra rusa <b>Тоска</b>, que en palabras del escritor Nabokov es “En su sentido más profundo y doloroso, una sensación de gran angustia espiritual, a menudo sin una causa específica. En el aspecto menos mórbido es un dolor sordo del alma, un anhelo sin nada que anhelar, una añoranza enferma, una vaga inquietud, agonía mental, ansias.”</p>
          </div>
          <div class="modal-footer">
            <a type="button" class="btn btn-warning" href="https://www.instagram.com/augustgfotografia/" target="_blank">
              <font-awesome-icon :icon="instagram" />&nbsp;&nbsp;Instagram
            </a>
          </div>
        </div>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faInstagram } from '@fortawesome/fontawesome-free-brands'
import { EventBus } from './event-bus';

export default {
  name: 'Toska',

  data() {
    return {
      hiddenBar: false
    }
  },

  created() {
    EventBus.$on('go-fullscreen', full => { this.hideBar(full); });
  },

  computed: {
    instagram () { return faInstagram }
  },

  methods: {
    hideBar: function(fullScreen) {
      this.hiddenBar = Boolean(fullScreen);
    }
  },

  components: {
    FontAwesomeIcon
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=PT+Serif');
  @import './common.scss';
  @import '../node_modules/bootstrap/scss/bootstrap.scss';

  html, body, #app {
    font-family: 'PT Serif', serif;
    height: 100%;
    background-color: #000;
  }

  body {
    overflow: hidden;
  }

  .blog-header {
    .btn-outline-info {
      color: #fff;
      border-color: #fff;

      &:hover {
        background-color: transparentize(map-get($theme-colors, "primary"), 0.8);
      }
    }

    h1 {
      font-family: 'PT Serif', serif;
      font-weight: 600;
      font-size: 4rem;
      color: #777;
    }
  }

  .modal-content {
    background-color: #222;
    border-color: #444;
    color: #ddd;

    .close {
      color: #fff;
    }
  }
</style>
