<template>
  <div id="app">

    <Header></Header>

    <Section color="coral" title="About">
      <div>I'm an aspiring <strong>web developer</strong> with a background in mathematics.</div>
    </Section>

    <Section color="chartreuse" title="Work">
      <ul>
        <li>I made <a href="https://muvve.com" target="_blank">Muvve</a> with one other developer</li>
        <li>I've been working on a <a href="https://github.com/jrr8/24" target="_blank">Challenge 24</a> solver (web interface coming soon)</li>
        <li>I also like gardening, cooking, and live music</li>
      </ul>
    </Section>

    <Section color="blueviolet" title="Today's Wisdom">
      <FetchedMsg></FetchedMsg>
    </Section>

    <Section color="aqua" title="Connect">
      <div>
        <SocialLink link="https://github.com/jrr8" name="GitHub"></SocialLink>
        <SocialLink link="https://www.linkedin.com/in/riley-robertson-0b190197/" name="LinkedIn"></SocialLink>
        <SocialLink link="mailto:jrr8@rice.edu" name="Email"></SocialLink>
        <SocialLink link="./resume.pdf" name="Resume"></SocialLink>
        <SocialLink link="https://www.facebook.com/riley.robertson.54" name="FB" last></SocialLink>
      </div>
    </Section>

    <div class="footer"></div>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Section from './components/Section.vue'
import FetchedMsg from './components/FetchedMsg.vue'
import SocialLink from './components/SocialLink.vue'

export default {
  name: 'app',
  components: {
    Header,
    Section,
    FetchedMsg,
    SocialLink
  }
}
</script>

<style>
/* Make bootstrap globally available */
@import "assets/bootstrap.min.css";

#app {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background: #c9e5ff;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #f2f7ff, #c9e5ff);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #f2f7ff, #c9e5ff);
  font-family: 'Lato', sans-serif;
  user-select: none;
  min-height: 100vh;
}

.footer {
  height: 50px
}
</style>
