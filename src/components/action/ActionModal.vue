<template>
  <transition name="modal">
    <div v-if="form && isOpened" class="modal-mask d-flex align-items-center">
      <div class="modal-container">
        <div class="modal-header">
          <div name="header">Edit Todo #{{ form.id }}</div>
        </div>

        <div class="modal-body">
          <div>
            <label for="title">Title</label>
            <div class="mb-2">
              <input v-model="form.title" type="text" id="title" />
            </div>
          </div>

          <div>
            <input v-model="form.completed" type="checkbox" id="completed" />
            <label for="completed">Completed</label>
          </div>
        </div>

        <div class="d-flex align-items-center justify-content-end">
          <ActionButton title="Save" class="mr-2" :on-action="handleSave" />
          <ActionButton title="Cancel" variant="danger" :on-action="onClose" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ActionButton from "@/components/action/ActionButton";

export default {
  name: "ActionModal",
  components: { ActionButton },
  props: {
    isOpened: {
      type: Boolean,
      required: true,
    },
    todo: {
      validator: (prop) => typeof prop === "object" || prop == null,
      required: true,
    },
    onSave: {
      type: Function,
      required: true,
    },
    onClose: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      form: null,
    };
  },
  watch: {
    todo: {
      handler: function (newVal, oldVal) {
        if (newVal !== oldVal) {
          this.form = { ...newVal };
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    handleSave() {
      const { form } = this;

      this.onSave({ form });
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
