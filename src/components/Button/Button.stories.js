import Button from './Button.vue'

export default {
  title: 'Components/Button',
  component: { Button },
  argTypes: {
    label: {
      type: 'string'
    },
    type: {
      options: ['primary', 'secondary', 'tertiary', 'subtle', 'destructive'],
      control: {
        type: 'select'
      }
    },
    size: {
      options: ['sm', 'lg'],
      control: {
        type: 'select'
      }
    },
  }
}

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: `
    <Button v-bind="args" />
  `
})

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  size: 'md',
  label: 'Button Stories'
}