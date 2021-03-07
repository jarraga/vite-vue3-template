<template>
  <div
    tabindex="0"
    @keypress.enter="$emit('click', $event)"
    @click="$emit('click', $event)"
    :class="`flex justify-center items-center text-center cursor-pointer ${
      bgColors[color]
    } ${textColors[color]} rounded ${small ? 'px-3 py-1' : 'px-4 py-2'} ${
      full ? 'w-full' : 'w-max-min'
    } ${hoverColors[color]} transition border-2 border-transparent ${
      borderColors[color]
    } outline-none uppercase font-semibold text-sm`"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // this properties are written literal to avoid tailwind purge
      bgColors: {
        gray: "bg-gray-200",
        red: "bg-red-200",
        yellow: "bg-yellow-200",
        green: "bg-green-200",
        blue: "bg-blue-200",
        indigo: "bg-indigo-200",
        purple: "bg-purple-200",
        pink: "bg-pink-200",
      },
      hoverColors: {
        gray: "hover:bg-gray-300",
        red: "hover:bg-red-300",
        yellow: "hover:bg-yellow-300",
        green: "hover:bg-green-300",
        blue: "hover:bg-blue-300",
        indigo: "hover:bg-indigo-300",
        purple: "hover:bg-purple-300",
        pink: "hover:bg-pink-300",
      },
      borderColors: {
        gray: "focus:border-gray-500",
        red: "focus:border-red-500",
        yellow: "focus:border-yellow-500",
        green: "focus:border-green-500",
        blue: "focus:border-blue-500",
        indigo: "focus:border-indigo-500",
        purple: "focus:border-purple-500",
        pink: "focus:border-pink-500",
      },
      textColors: {
        gray: "text-gray-700",
        red: "text-red-700",
        yellow: "text-yellow-700",
        green: "text-green-700",
        blue: "text-blue-700",
        indigo: "text-indigo-700",
        purple: "text-purple-700",
        pink: "text-pink-700",
      },
    };
  },
  props: {
    color: {
      type: String,
      default: "blue",
    },
    full: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
};
</script>