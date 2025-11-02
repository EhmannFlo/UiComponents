import FInput from '../../components/molecules/FInput.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/Input',
  component: FInput,
  tags: ['autodocs'],
  argTypes: {
    type: { 
      control: { type: 'select' }, 
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date', 'time', 'file'] 
    },
    disabled: {
      control: { type: 'boolean' }
    },
    invalid: {
      control: { type: 'boolean' }
    },
    required: {
      control: { type: 'boolean' }
    },
    fullWidth: {
      control: { type: 'boolean' }
    },
  },
};

export const Default = {
  render: (args) => ({
    components: { FInput },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<FInput v-bind="args" v-model="value" />',
  }),
  args: {
    placeholder: 'Gib etwas ein...',
  },
};

export const WithLabel = {
  render: (args) => ({
    components: { FInput },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<FInput v-bind="args" v-model="value" />',
  }),
  args: {
    label: 'Benutzername',
    placeholder: 'Max Mustermann',
    helperText: 'Bitte gib deinen vollständigen Namen ein',
  },
};

export const Required = {
  render: (args) => ({
    components: { FInput },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<FInput v-bind="args" v-model="value" />',
  }),
  args: {
    label: 'E-Mail',
    placeholder: 'beispiel@email.de',
    required: true,
    helperText: 'Dieses Feld ist erforderlich',
  },
};

export const WithError = {
  render: (args) => ({
    components: { FInput },
    setup() {
      const value = ref('ungültige-email');
      return { args, value };
    },
    template: '<FInput v-bind="args" v-model="value" />',
  }),
  args: {
    label: 'E-Mail',
    placeholder: 'beispiel@email.de',
    invalid: true,
    errorMessage: 'Bitte gib eine gültige E-Mail-Adresse ein',
  },
};

export const Disabled = {
  render: (args) => ({
    components: { FInput },
    setup() {
      const value = ref('Deaktivierter Input');
      return { args, value };
    },
    template: '<FInput v-bind="args" v-model="value" />',
  }),
  args: {
    label: 'Deaktiviertes Feld',
    disabled: true,
  },
};

export const FullWidth = {
  render: (args) => ({
    components: { FInput },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<div style="width: 100%;"><FInput v-bind="args" v-model="value" /></div>',
  }),
  args: {
    label: 'Volle Breite',
    placeholder: 'Dieses Input nimmt die volle Breite ein',
    fullWidth: true,
  },
};

export const Password = {
  render: (args) => ({
    components: { FInput },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<FInput v-bind="args" v-model="value" />',
  }),
  args: {
    label: 'Passwort',
    placeholder: 'Gib dein Passwort ein',
    type: 'password',
  },
};

export const Email = {
  render: (args) => ({
    components: { FInput },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<FInput v-bind="args" v-model="value" />',
  }),
  args: {
    label: 'E-Mail-Adresse',
    placeholder: 'beispiel@email.de',
    type: 'email',
  },
};

export const Number = {
  render: (args) => ({
    components: { FInput },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<FInput v-bind="args" v-model="value" />',
  }),
  args: {
    label: 'Alter',
    placeholder: '25',
    type: 'number',
  },
};

export const FileUpload = {
  render: (args) => ({
    components: { FInput },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<FInput v-bind="args" v-model="value" />',
  }),
  args: {
    label: 'Datei hochladen',
    type: 'file',
  },
};

