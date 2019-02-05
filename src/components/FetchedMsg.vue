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
  beforeCreate: function() {
    const vm = this;
    let req = new XMLHttpRequest();
    req.open('GET', "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", true);

    req.onload = function() {
      const resp = JSON.parse(req.responseText);
      if (resp) {
        const data = resp[0];
        const tempDiv = document.createElement('DIV');
        tempDiv.innerHTML = data.content;
        vm.message = tempDiv.innerText;
        vm.author = data.title;
      }
    };

    req.send()
  },
}
</script>

<style scoped>
.disclaimer {
    font-size: 9.5pt
}
</style>

