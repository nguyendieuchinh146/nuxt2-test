<template>
    <section id="flight-booking">
        <div id="flight-booking-container">
            <h1>Flight Booking Service</h1>
            <div id="service-box">
                <font-awesome-icon class="slide-icon" :icon="['fas', 'chevron-left']" @click="slideLeft" />
                <div id="service-slider" ref="slider">

                    <div v-for="data in flightBookingServiceData" :key="data.id" class="service-item" @click="showPopupFormHandle(data.place_from, data.place_to, data.price)">
                        <div class="item-box">
                            <img class="thumbnail" :src="require(`@/assets/img/flight-images/destinations/` + data.img)" :alt="$linkHandle(data.place_from + '-' + data.place_to)">
    
                            <div class="service-content">
                                <div class="title">
                                    <h2>From {{ data.place_from }} to {{ data.place_to }}</h2>
                                </div>
                                <div class="description">
                                    <div class="price">
                                        <p> From ${{ data.price }}</p>
                                        <span>discount {{ data.discount }}%</span>
                                    </div>
                                    <div class="airlines">
                                        <img v-for="(item, index) in data.airlines.split('/')" :key="index" :src="require(`@/assets/img/flight-images/airlines/` + item + '.png')" :alt="item">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <font-awesome-icon class="slide-icon" :icon="['fas', 'chevron-right']" @click="slideRight" />

            </div>
        </div>
    </section>
</template>
  
<script>

export default {
    name: 'FlightBooking',

    props: {
        flightBookingServiceData: {
            require: true,
            type: Array,
            default: () => []
        }
    },

    created(){
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    },

    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
        showPopupFormHandle(placeFrom, placeTo, price) {
            this.$emit('popup-form', 'flight-booking','Flight from ' + placeFrom + ' to ' + placeTo, Number(price))
        },

        slideLeft() {
        this.$refs.slider.scrollLeft -= 800;
        },

        slideRight() {
        this.$refs.slider.scrollLeft += 800;
        },

        handleScroll() {
            const itemList = document.querySelectorAll('#service-slider .service-item');
            const windowHeight = window.innerHeight;
            const threshold = 140;
            
            itemList.forEach(item => {
                const itemRect = item.getBoundingClientRect();
                
                if (itemRect.top + threshold < windowHeight) {
                    item.classList.add('slide-in');
                }

            });
        },

    },
}

</script>