<template>
  <main>
    <welcome-section />
    <about-us-section />
    <members-section />
    <events-section />
    <projects-section />
    <app-footer />
  </main>
</template>

<script>
import WelcomeSection from '~/components/sections/Welcome'
import AboutUsSection from '~/components/sections/AboutUs'
import MembersSection from '~/components/sections/Members'
import EventsSection from '~/components/sections/Events'
import ProjectsSection from '~/components/sections/Projects'
import AppFooter from '~/components/Footer'

export default {
  components: {
    WelcomeSection,
    AboutUsSection,
    MembersSection,
    EventsSection,
    ProjectsSection,
    AppFooter
  }
}
</script>
