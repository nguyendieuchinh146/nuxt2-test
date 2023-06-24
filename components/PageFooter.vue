<template>
   <section id="page-footer">
        <div id="footer-container">
            <div id="content">
                <p>Immerse yourself in Vietnam's natural beauty and fascinating cultural tapestry. From bustling megacities to charming hill-tribe villages, our captivating country offers an exotic and compelling experience for every traveler.</p>
            </div>
            <div id="contact-area">
                <div id="contact">
                    <div id="social-media">
                        <a v-for="item in socialMedia" :key="item.id" :href="item.href" target="_blank"><font-awesome-icon :icon="[item.iconStyle, item.iconName]" /></a>
                    </div>
                    <div id="contact-us">
                        <NuxtLink to="/about-us">About us</NuxtLink>
                        <NuxtLink to="/contact-us">Contact Us</NuxtLink>
                    </div>
                </div>
                <div id="copyright">
                    <NuxtLink to="/"><img src="@/assets/img/additional/asia-logo.png" alt="asia-prime-travel-logo"></NuxtLink>
                    <div>
                        <span>Copyright © 2023 Asia Prime Travel. All rights reserved. No.341 Street 72, Duong Noi Ward, Ha Dong District, Hanoi, Vietnam. Phone: <a href="tel:+84 (0) 243 678 77 88">+84 (0) 243 678 77 88</a>. Hotline: <a href="tel:+84 (0) 903 453 499">+84 (0) 903 453 499</a>. Email: <a href="mailto:travel@travelprime.asia">Travel@travelprime.asia</a></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
    export default {

    name: 'PageFooter',

    data() {
      return {
        socialMedia : [
            {id: 1, href: '', iconStyle: 'fab', iconName: 'square-facebook'},
            {id: 2, href: '', iconStyle: 'fab', iconName: 'facebook-messenger'},
            {id: 3, href: '', iconStyle: 'fab', iconName: 'square-instagram'},
            {id: 4, href: '', iconStyle: 'fab', iconName: 'linkedin'},
            {id: 5, href: '', iconStyle: 'fab', iconName: 'square-twitter'},
            {id: 6, href: '', iconStyle: 'fab', iconName: 'square-whatsapp'},
            {id: 7, href: '', iconStyle: 'fab', iconName: 'tiktok'},
            {id: 8, href: '', iconStyle: 'fab', iconName: 'square-snapchat'},
            {id: 9, href: '', iconStyle: 'fab', iconName: 'square-pinterest'},
            {id: 10, href: '', iconStyle: 'fab', iconName: 'square-reddit'},
            {id: 11, href: '', iconStyle: 'fab', iconName: 'skype'},
        ]
      }
    },
    }
</script>