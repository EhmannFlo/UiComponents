import Button from '../../components/atom/FButton.vue';

export default {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: { type: 'select' }, 
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] 
    },
    size: { 
      control: { type: 'select' }, 
      options: ['default', 'sm', 'lg', 'icon'] 
    },
  },
};

export const Default = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Button</Button>',
  }),
  args: {
    variant: 'default',
  },
};

export const Destructive = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Delete</Button>',
  }),
  args: {
    variant: 'destructive',
  },
};

export const Outline = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Outline</Button>',
  }),
  args: {
    variant: 'outline',
  },
};

export const Secondary = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Secondary</Button>',
  }),
  args: {
    variant: 'secondary',
  },
};

export const Ghost = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Ghost</Button>',
  }),
  args: {
    variant: 'ghost',
  },
};

export const Link = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Link</Button>',
  }),
  args: {
    variant: 'link',
  },
};

export const Large = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Large Button</Button>',
  }),
  args: {
    size: 'lg',
  },
};

export const Small = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Small Button</Button>',
  }),
  args: {
    size: 'sm',
  },
};

export const Icon = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">🔥</Button>',
  }),
  args: {
    size: 'icon',
  },
};
