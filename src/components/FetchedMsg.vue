<template>
  <div>{{ message }}
      <div v-if="author"><br>{{ "- " + author }}</div>
      <div v-if="author" class="disclaimer mt-3">(Disclaimer: these are fetched from <a href="http://quotesondesign.com">quotesondesign.com</a>)</div>
  </div>
</template>


<script>
export default {
  name: 'FetchedMsg',
  data: function() {
    return {
      message: "",
      author: ""
    }
  },
  created () {
    const vm = this;
    let req = new XMLHttpRequest();

    req.open('GET',
        `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&per_page=1&page=${this.getRandomPage()}`,
        true);

    req.onload = function() {
      const resp = JSON.parse(req.responseText);
      if (resp) {
        const data = resp[0];
        const tempDiv = document.createElement('DIV');
        tempDiv.innerHTML = data.content.rendered;
        vm.message = tempDiv.innerText;
        vm.author = data.title.rendered;
      }
    };

    req.send()
  },

  methods: {
    getRandomPage () {
      const numArticles = 1000  // It's approximate, but we know it's at least 1000 (as of 10/16/21)
      return Math.floor(Math.random() * numArticles)
    },
  },
}
</script>

<style scoped>
.disclaimer {
    font-size: 9.5pt
}
</style>

