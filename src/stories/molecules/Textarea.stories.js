import FTextarea from '../../components/molecules/FTextarea.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/Textarea',
  component: FTextarea,
  tags: ['autodocs'],
  argTypes: {
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
    rows: {
      control: { type: 'number' }
    }
  },
};

export const Default = {
  render: (args) => ({
    components: { FTextarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<FTextarea v-bind="args" v-model="value" />',
  }),
  args: {
    placeholder: 'Gib etwas ein...',
  },
};

export const WithLabel = {
  render: (args) => ({
    components: { FTextarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<FTextarea v-bind="args" v-model="value" />',
  }),
  args: {
    label: 'Beschreibung',
    placeholder: 'Gib hier deine Beschreibung ein...',
    helperText: 'Bitte gib eine detaillierte Beschreibung ein',
  },
};

export const Required = {
  render: (args) => ({
    components: { FTextarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<FTextarea v-bind="args" v-model="value" />',
  }),
  args: {
    label: 'Nachricht',
    placeholder: 'Deine Nachricht...',
    required: true,
    helperText: 'Dieses Feld ist erforderlich',
  },
};

export const WithError = {
  render: (args) => ({
    components: { FTextarea },
    setup() {
      const value = ref('Zu kurz');
      return { args, value };
    },
    template: '<FTextarea v-bind="args" v-model="value" />',
  }),
  args: {
    label: 'Nachricht',
    placeholder: 'Deine Nachricht...',
    invalid: true,
    errorMessage: 'Die Nachricht muss mindestens 10 Zeichen lang sein',
  },
};

export const Disabled = {
  render: (args) => ({
    components: { FTextarea },
    setup() {
      const value = ref('Deaktivierte Textarea');
      return { args, value };
    },
    template: '<FTextarea v-bind="args" v-model="value" />',
  }),
  args: {
    label: 'Deaktiviertes Feld',
    disabled: true,
  },
};

export const FullWidth = {
  render: (args) => ({
    components: { FTextarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<div style="width: 100%;"><FTextarea v-bind="args" v-model="value" /></div>',
  }),
  args: {
    label: 'Volle Breite',
    placeholder: 'Diese Textarea nimmt die volle Breite ein',
    fullWidth: true,
  },
};

export const CustomRows = {
  render: (args) => ({
    components: { FTextarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<FTextarea v-bind="args" v-model="value" />',
  }),
  args: {
    label: 'Längere Textarea',
    placeholder: 'Diese Textarea hat 8 Zeilen',
    rows: 8,
  },
};

export const WithContent = {
  render: (args) => ({
    components: { FTextarea },
    setup() {
      const value = ref('Dies ist ein Beispieltext.\nMit mehreren Zeilen.\n\nUnd Absätzen.');
      return { args, value };
    },
    template: '<FTextarea v-bind="args" v-model="value" />',
  }),
  args: {
    label: 'Textbereich mit Inhalt',
  },
};

