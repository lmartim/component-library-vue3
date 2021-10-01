<template>
  <button class="btn" :class="classes">
    {{ label }}
  </button>
</template>

<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    label: {
      type: String,
      default: "Button Label",
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator: (prop) =>
        ["primary", "secondary", "tertiary", "subtle", "destructive"].includes(
          prop
        ),
    },
    size: {
      type: String,
      required: false,
      default: "lg",
      validator: (prop) => ["sm", "lg"].includes(prop),
    },
  },
  setup(props) {
    const classes = computed(() => {
      return ["type-" + props.type, "size-" + props.size];
    });

    return {
      classes,
    };
  },
});
</script>

<style lang="scss" scoped>
.btn {
  border: 1px solid transparent;
  border-radius: 8px;
  border-style: solid;
  border-width: 0;
  min-width: 148px;
  padding: 0;

  color: $color-neutral-lightest;
  font-family: "Open sans";
  font-size: $font-size-xs;
  font-weight: $font-weight-medium;
  line-height: 1.25;

  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;
  transition: 300ms ease-in-out;

  &.type {
    &-primary {
      background-color: $color-success-medium;
    }

    &-secondary {
      color: $color-neutral-dark;
    }

    &-tertiary {
      background-color: $color-neutral-lightest;
      border-color: $color-neutral-light;
      border-width: 1px;
      color: $color-neutral-darkest;
    }

    &-subtle {
      background: none;
      color: $color-neutral-dark;
    }

    &-destructive {
      background: $color-danger-medium;
      border-radius: 8px;
    }
  }

  &.size {
    &-sm {
      border-radius: 4px;
      min-width: 128px;
      padding: 4px;
    }

    &-lg {
      font-size: $font-size-sm;
      padding: 8px;
    }
  }
}
</style>