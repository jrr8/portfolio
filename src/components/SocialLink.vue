<template>
    <a class="social" :class="{ last: last }" :href=link target="_blank">{{ name }}</a>
</template>


<script>
export default {
  name: 'SocialLink',
  props: {
    name: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    last: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      
    }
  }
}
</script>


<style scoped>
#app a {
  color: #016dba;
  cursor: pointer;
}

#app .social {
  padding: 0 0.5rem 0 0.5rem;
  border-right: 1px solid;
  text-decoration: underline;
  font-weight: bold;
}

#app .social.last {
  border-right: none;
}
</style>