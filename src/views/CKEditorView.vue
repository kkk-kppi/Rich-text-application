<template>
  <div class="home">
    <CKEditor v-model="content" />
  </div>
</template>

<script>
import CKEditor from "@/components/CKEditor/index.vue";

export default {
  name: "CKEditor-View",
  components: {
    CKEditor,
  },
  data() {
    return {
      content: "",
    };
  },
  methods: {
    getDeaultValue() {},
  },
};
</script>
