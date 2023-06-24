export const HomePageBody = () => import('../..\\components\\HomePageBody.vue' /* webpackChunkName: "components/home-page-body" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const PageFooter = () => import('../..\\components\\PageFooter.vue' /* webpackChunkName: "components/page-footer" */).then(c => wrapFunctional(c.default || c))
export const PageHeader = () => import('../..\\components\\PageHeader.vue' /* webpackChunkName: "components/page-header" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../..\\components\\Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const HomePageBodyDestinationSection = () => import('../..\\components\\HomePageBody\\DestinationSection.vue' /* webpackChunkName: "components/home-page-body-destination-section" */).then(c => wrapFunctional(c.default || c))
export const HomePageBodyFlightBooking = () => import('../..\\components\\HomePageBody\\FlightBooking.vue' /* webpackChunkName: "components/home-page-body-flight-booking" */).then(c => wrapFunctional(c.default || c))
export const HomePageBodyHotelReservation = () => import('../..\\components\\HomePageBody\\HotelReservation.vue' /* webpackChunkName: "components/home-page-body-hotel-reservation" */).then(c => wrapFunctional(c.default || c))
export const HomePageBodySpotlightDestination = () => import('../..\\components\\HomePageBody\\SpotlightDestination.vue' /* webpackChunkName: "components/home-page-body-spotlight-destination" */).then(c => wrapFunctional(c.default || c))
export const HomePageBodyTravelNews = () => import('../..\\components\\HomePageBody\\TravelNews.vue' /* webpackChunkName: "components/home-page-body-travel-news" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
