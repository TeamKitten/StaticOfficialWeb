<template>
  <main>
    <welcome-section />
    <about-us-section />
    <members-section />
  </main>
</template>

<script>
import WelcomeSection from '~/components/sections/Welcome'
import AboutUsSection from '~/components/sections/AboutUs'
import MembersSection from '~/components/sections/Members'

export default {
  components: {
    WelcomeSection,
    AboutUsSection,
    MembersSection
  }
}
</script>
