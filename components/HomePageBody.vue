<template>
    <section id="homepage-body">
        <SpotlightDestination/>
        <DestinationSection ref="destinations" :destinationsData="data.destinationsData"/>
        <FlightBooking ref="flight-booking" @popup-form="popupFormHandle" :flightBookingServiceData="data.flightBookingServiceData"/>
        <HotelReservation ref="hotel-reservation" @popup-form="popupFormHandle" :hotelReservationData="data.hotelReservationData"/>
        <TravelNews ref="travel-news" :travelNewsData="data.travelNewsData"/>
    </section>
</template>
  
<script>
import SpotlightDestination from './HomePageBody/SpotlightDestination.vue';
import DestinationSection from './HomePageBody/DestinationSection.vue';
import FlightBooking from './HomePageBody/FlightBooking.vue';
import HotelReservation from './HomePageBody/HotelReservation.vue';
import TravelNews from './HomePageBody/TravelNews.vue';

    export default {
    name: "HomePageBody",
    components: { SpotlightDestination, DestinationSection, FlightBooking, HotelReservation, TravelNews },

    props: {
        scrollToSectionId: {
            required: true
        },
        data: {
            required: true
        },
    },
    
    data() {
        return {
            isPopupForm: null,
            popupTitle: '',
            popupPrice: 0,
        }
    },

    emits: ['popup-form'],

    watch: {
      scrollToSectionId: {
        immediate: true,
        handler(sectionId) {
            this.scrollToSectionIdHandle(sectionId);
        }
      }
    },

    created() {
        if(this.$store && this.$store.state && this.$store.state.navigateToHome !== null) {
            setTimeout(() => {
                this.scrollToSectionIdHandle(this.$store.state.navigateToHome)
            }, 1);
        }
    },

    mounted() {
    },

    methods: {
        scrollToSectionIdHandle(sectionId) {
            const componentRef = this.$refs[sectionId];
            if (componentRef) {
                window.scrollTo({ top: componentRef.$el.offsetTop, behavior: 'smooth' });
            }
        },

        popupFormHandle(isValue, title, price) {
            this.isPopupForm = isValue;
            this.popupTitle = title;
            this.popupPrice = price;
        },

        closePopupHandle(isValue) {
            this.isPopupForm = isValue
        },
    }
}
</script>