<template>
  <div class="f-textarea-wrapper" :class="wrapperClasses">
    <label v-if="label" :for="textareaId" :class="labelClasses">
      {{ label }}
      <span v-if="required" class="text-red-500 ml-1">*</span>
    </label>
    
    <Textarea
      :id="textareaId"
      :model-value="modelValue"
      @update:model-value="$emit('update:modelValue', $event)"
      :placeholder="placeholder"
      :disabled="disabled"
      :invalid="invalid"
      :aria-invalid="invalid"
      :rows="rows"
      :pt="{
        root: {
          class: textareaClasses,
          'data-slot': 'textarea'
        }
      }"
      :unstyled="true"
      v-bind="$attrs"
    />
    
    <small v-if="helperText && !invalid" :class="helperClasses">
      {{ helperText }}
    </small>
    
    <small v-if="invalid && errorMessage" :class="errorClasses">
      {{ errorMessage }}
    </small>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { cn } from '../../utils'
import Textarea from 'primevue/textarea'

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  helperText: {
    type: String,
    default: ''
  },
  errorMessage: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  invalid: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  rows: {
    type: Number,
    default: 4
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})

defineEmits(['update:modelValue'])

// Generiere eine eindeutige ID für das Textarea-Element
const textareaId = computed(() => {
  return `f-textarea-${Math.random().toString(36).substr(2, 9)}`
})

const wrapperClasses = computed(() => ({
  'w-full': props.fullWidth,
  'inline-flex': !props.fullWidth,
  'flex-col': true,
  'gap-2': true,
}))

const labelClasses = computed(() => ({
  'text-sm': true,
  'font-medium': true,
  'text-slate-700': !props.disabled,
  'text-slate-500': props.disabled,
  'cursor-pointer': !props.disabled
}))

const textareaClasses = computed(() => 
  cn(
    // Base styles
    'flex min-h-16 w-full rounded-md border px-3 py-2 text-base transition-[color,box-shadow] outline-none md:text-sm',
    // Resize
    'resize-none',
    // Field sizing
    'field-sizing-content',
    // Background & Border
    'bg-white border-slate-300 dark:bg-slate-900/30',
    // Placeholder
    'placeholder:text-slate-400',
    // Focus
    'focus-visible:border-slate-400 focus-visible:ring-slate-400/50 focus-visible:ring-[3px]',
    // Invalid state
    props.invalid && 'aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500',
    // Disabled state
    'disabled:cursor-not-allowed disabled:opacity-50',
  )
)

const helperClasses = computed(() => ({
  'text-xs': true,
  'text-slate-600': true,
  'mt-1': true
}))

const errorClasses = computed(() => ({
  'text-xs': true,
  'text-red-600': true,
  'mt-1': true
}))
</script>

<style scoped>
.f-textarea-wrapper {
  display: flex;
}
</style>

