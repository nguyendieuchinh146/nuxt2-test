<template>
  <section id="spotlight-section">
    <div id="spotlight-container">

      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

        <div class="carousel-indicators" style="z-index: 1;">
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item spotlight-item active" data-bs-interval="6000">
            <img src="@/assets/img/destinations/sa-pa/terrace.jpg" class="d-block w-100 h-100" alt="sa-pa">
            <h2 class="floating-text">Terraced rice fields – Sapa landscapes of marvel, stunning and poetic beauty</h2>
          </div>
          <div class="carousel-item spotlight-item" data-bs-interval="6000">
            <img src="@/assets/img/destinations/quang-binh/hang-en-pic3.jpeg" class="d-block w-100 h-100" alt="quang-binh">
            <h2 class="floating-text">The majesty of the third biggest cave in the world with separate ecosystem and climate, along with a beautiful river</h2>
          </div>
          <div class="carousel-item spotlight-item" data-bs-interval="6000">
            <img src="@/assets/img/destinations/hanoi/long-bien-bridge.jpg" class="d-block w-100 h-100" alt="hanoi">
            <h2 class="floating-text">The Capital of a thousand years of civilization, the center of culture and politics</h2>
          </div>
          <div class="carousel-item spotlight-item" data-bs-interval="6000">
            <img src="@/assets/img/destinations/phu-quoc/phu-quoc-pic3.jpeg" class="d-block w-100 h-100" alt="phu-quoc">
            <h2 class="floating-text">The wonderful pearl island in Viet Nam – tourist paradise of tropical region</h2>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>

    </div>
  </section>
</template>
  
<script>
    export default {
        name: 'SpotlightDestination',

        data() {
          return {
            destinationList: [
              {id: 1, title: 'sa-pa', description: 'Terraced rice fields – Sapa landscapes of marvel, stunning and poetic beauty', img: '@/assets/img/destinations/sa-pa/terrace.jpg'},
              {id: 2, title: 'hanoi', description: 'The Capital of a thousand years of civilization, the center of culture and politics', img: '@/assets/img/destinations/hanoi/long-bien-bridge.jpg'},
              {id: 3, title: 'phu-quoc', description: 'The wonderful pearl island in Viet Nam – tourist paradise of tropical region', img: '@/assets/img/destinations/phu-quoc/phu-quoc-pic3.jpeg'},
            ]
          }
        },
        
        computed: {

        },
        
        watch: {
            
        },

        mounted() {
          const text = document.getElementsByClassName('floating-text');
          for (let i=0; i<text.length;i++) {
            const characters = text[i].textContent.split('');
            text[i].innerHTML = '';
            characters.forEach((char, index) => {
              const span = document.createElement('span');
              span.textContent = char;
              span.style.animationDelay = `${index * 0.04}s`;
              text[i].appendChild(span);
            });
          }

          this.carouselCustom()

        },

        methods: {
          carouselCustom() {
            // $('.carousel').carousel({
            //   pause: false
            // });
          }
        },

    }
    
</script>