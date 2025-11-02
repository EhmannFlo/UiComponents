<template>
  <div class="flex" :class="wrapperClasses">
    <label v-if="props.label" :for="inputId" :class="labelClasses">
      {{ props.label }}
      <span v-if="props.required" class="text-red-500 ml-1">*</span>
    </label>

    <InputText
      :id="inputId"
      :type="props.type"
      :model-value="props.modelValue"
      @update:model-value="$emit('update:modelValue', $event)"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :invalid="props.invalid"
      :aria-invalid="props.invalid"
      :pt="{
        root: {
          class: inputClasses,
          'data-slot': 'input',
        },
      }"
      :unstyled="true"
      v-bind="$attrs"
    />

    <small v-if="props.helperText && !props.invalid" :class="helperClasses">
      {{ props.helperText }}
    </small>

    <small v-if="props.invalid && props.errorMessage" :class="errorClasses">
      {{ props.errorMessage }}
    </small>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { cn } from "../../utils";
import InputText from "primevue/inputtext";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  helperText: {
    type: String,
    default: "",
  },
  errorMessage: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  invalid: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "text",
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["update:modelValue"]);

const wrapperClasses = computed(() => ({
  "w-full": props.fullWidth,
  "inline-flex": !props.fullWidth,
  "flex-col": true,
  "gap-2": true,
}));

const labelClasses = computed(() => ({
  "text-sm": true,
  "font-medium": true,
  "text-slate-700": !props.disabled,
  "text-slate-500": props.disabled,
  "cursor-pointer": !props.disabled,
}));

const inputClasses = computed(() =>
  cn(
    // Base styles
    "flex h-9 min-w-0 rounded-md border px-3 py-1 text-base transition-[color,box-shadow] outline-none md:text-sm",
    // Background & Border
    "bg-white border-slate-300 dark:bg-slate-900/30",
    // Placeholder
    "placeholder:text-slate-400",
    // Selection
    "selection:bg-slate-900 selection:text-white",
    // File input styles
    "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-slate-900",
    // Focus
    "focus-visible:border-slate-400 focus-visible:ring-slate-400/50 focus-visible:ring-[3px]",
    // Invalid state
    props.invalid &&
      "aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500",
    // Disabled state
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
  )
);

const helperClasses = computed(() => ({
  "text-xs": true,
  "text-slate-600": true,
  "mt-1": true,
}));

const errorClasses = computed(() => ({
  "text-xs": true,
  "text-red-600": true,
  "mt-1": true,
}));
</script>
