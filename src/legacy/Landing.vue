<template>
  <div class="container">
    <div>
      <h1>I'm a Vue component</h1>
    </div>
    <div>
      <bootstrap-example />
      <message-example :message="message" @reset="reset" />
    </div>
  </div>
</template>

<script>
// A legacy vue
import BootstrapExample from "../legacy/BootstrapAlerts.vue";

// A React component
import { MessageExample } from "../new/MessageExample";

export default {
  data() {
    return {
      message: "Hello from a React component!! Click to call the reset method",
    };
  },
  methods: {
    reset() {
      this.message = "";
    },
  },
  components: {
    BootstrapExample,
    "message-example": MessageExample,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
</style>
