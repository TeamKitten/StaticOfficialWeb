<template>
  <main>
    <welcome-section />
    <about-us-section />
    <members-section />
    <events-section />
    <projects-section />
  </main>
</template>

<script>
import WelcomeSection from '~/components/sections/Welcome'
import AboutUsSection from '~/components/sections/AboutUs'
import MembersSection from '~/components/sections/Members'
import EventsSection from '~/components/sections/Events'
import ProjectsSection from '~/components/sections/Projects'

export default {
  components: {
    WelcomeSection,
    AboutUsSection,
    MembersSection,
    EventsSection,
    ProjectsSection
  }
}
</script>
