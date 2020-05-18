const fontFamily = ['font-sans', 'font-serif', 'font-mono'];

const fontSize = [
  'text-xs',
  'text-sm',
  'text-base',
  'text-lg',
  'text-xl',
  'text-2xl',
  'text-3xl',
  'text-4xl',
  'text-5xl',
  'text-6xl',
];

const fontSmoothing = ['antialiased', 'subpixel-antialiased'];

const fontStyle = ['italic', 'non-italic'];

const fontWeight = [
  'font-hairline',
  'font-thin',
  'font-light',
  'font-normal',
  'font-medium',
  'font-semibold',
  'font-bold',
  'font-extrabold',
  'font-black',
];

const letterSpacing = [
  'tracking-tighter',
  'tracking-tight',
  'tracking-normal',
  'tracking-wide',
  'tracking-wider',
  'tricking-widest',
];

const lineHeight = [
  'leading-none',
  'leading-tight',
  'leading-snug',
  'leading-normal',
  'leading-relaxed',
  'leading-loose',
  'leading-3',
  'leading-4',
  'leading-5',
  'leading-6',
  'leading-7',
  'leading-8',
  'leading-9',
  'leading-10',
];

const listStyleType = ['line-none', 'list-disc', 'list-decimal'];

const listStylePosition = ['list-inside', 'list-outside'];

const placeholderColor = [
  'placeholder-transparent',
  'placeholder-black',
  'placeholder-white',
  'placeholder-gray-100',
  'placeholder-gray-200',
  'placeholder-gray-300',
  'placeholder-gray-400',
  'placeholder-gray-500',
  'placeholder-gray-600',
  'placeholder-gray-700',
  'placeholder-gray-800',
  'placeholder-gray-900',
  'placeholder-red-100',
  'placeholder-red-200',
  'placeholder-red-300',
  'placeholder-red-400',
  'placeholder-red-500',
  'placeholder-red-600',
  'placeholder-red-700',
  'placeholder-red-800',
  'placeholder-red-900',
  'placeholder-orange-100',
  'placeholder-orange-200',
  'placeholder-orange-300',
  'placeholder-orange-400',
  'placeholder-orange-500',
  'placeholder-orange-600',
  'placeholder-orange-700',
  'placeholder-orange-800',
  'placeholder-orange-900',
  'placeholder-yellow-100',
  'placeholder-yellow-200',
  'placeholder-yellow-300',
  'placeholder-yellow-400',
  'placeholder-yellow-500',
  'placeholder-yellow-600',
  'placeholder-yellow-700',
  'placeholder-yellow-800',
  'placeholder-yellow-900',
  'placeholder-green-100',
  'placeholder-green-200',
  'placeholder-green-300',
  'placeholder-green-400',
  'placeholder-green-500',
  'placeholder-green-600',
  'placeholder-green-700',
  'placeholder-green-800',
  'placeholder-green-900',
  'placeholder-teal-100',
  'placeholder-teal-200',
  'placeholder-teal-300',
  'placeholder-teal-400',
  'placeholder-teal-500',
  'placeholder-teal-600',
  'placeholder-teal-700',
  'placeholder-teal-800',
  'placeholder-teal-900',
  'placeholder-blue-100',
  'placeholder-blue-200',
  'placeholder-blue-300',
  'placeholder-blue-400',
  'placeholder-blue-500',
  'placeholder-blue-600',
  'placeholder-blue-700',
  'placeholder-blue-800',
  'placeholder-blue-900',
  'placeholder-indigo-100',
  'placeholder-indigo-200',
  'placeholder-indigo-300',
  'placeholder-indigo-400',
  'placeholder-indigo-500',
  'placeholder-indigo-600',
  'placeholder-indigo-700',
  'placeholder-indigo-800',
  'placeholder-indigo-900',
  'placeholder-purple-100',
  'placeholder-purple-200',
  'placeholder-purple-300',
  'placeholder-purple-400',
  'placeholder-purple-500',
  'placeholder-purple-600',
  'placeholder-purple-700',
  'placeholder-purple-800',
  'placeholder-purple-900',
  'placeholder-pink-100',
  'placeholder-pink-200',
  'placeholder-pink-300',
  'placeholder-pink-400',
  'placeholder-pink-500',
  'placeholder-pink-600',
  'placeholder-pink-700',
  'placeholder-pink-800',
  'placeholder-pink-900',
];

const placeholderOpacity = [
  'placeholder-opacity-0',
  'placeholder-opacity-25',
  'placeholder-opacity-50',
  'placeholder-opacity-75',
  'placeholder-opacity-100',
]

const textAlign = ['text-left', 'text-center', 'text-right', 'text-justify'];

const textColor = [
  'text-transparent',
  'text-black',
  'text-white',
  'text-gray-100',
  'text-gray-200',
  'text-gray-300',
  'text-gray-400',
  'text-gray-500',
  'text-gray-600',
  'text-gray-700',
  'text-gray-800',
  'text-gray-900',
  'text-red-100',
  'text-red-200',
  'text-red-300',
  'text-red-400',
  'text-red-500',
  'text-red-600',
  'text-red-700',
  'text-red-800',
  'text-red-900',
  'text-orange-100',
  'text-orange-200',
  'text-orange-300',
  'text-orange-400',
  'text-orange-500',
  'text-orange-600',
  'text-orange-700',
  'text-orange-800',
  'text-orange-900',
  'text-yellow-100',
  'text-yellow-200',
  'text-yellow-300',
  'text-yellow-400',
  'text-yellow-500',
  'text-yellow-600',
  'text-yellow-700',
  'text-yellow-800',
  'text-yellow-900',
  'text-green-100',
  'text-green-200',
  'text-green-300',
  'text-green-400',
  'text-green-500',
  'text-green-600',
  'text-green-700',
  'text-green-800',
  'text-green-900',
  'text-teal-100',
  'text-teal-200',
  'text-teal-300',
  'text-teal-400',
  'text-teal-500',
  'text-teal-600',
  'text-teal-700',
  'text-teal-800',
  'text-teal-900',
  'text-blue-100',
  'text-blue-200',
  'text-blue-300',
  'text-blue-400',
  'text-blue-500',
  'text-blue-600',
  'text-blue-700',
  'text-blue-800',
  'text-blue-900',
  'text-indigo-100',
  'text-indigo-200',
  'text-indigo-300',
  'text-indigo-400',
  'text-indigo-500',
  'text-indigo-600',
  'text-indigo-700',
  'text-indigo-800',
  'text-indigo-900',
  'text-purple-100',
  'text-purple-200',
  'text-purple-300',
  'text-purple-400',
  'text-purple-500',
  'text-purple-600',
  'text-purple-700',
  'text-purple-800',
  'text-purple-900',
  'text-pink-100',
  'text-pink-200',
  'text-pink-300',
  'text-pink-400',
  'text-pink-500',
  'text-pink-600',
  'text-pink-700',
  'text-pink-800',
  'text-pink-900',
];

const textDecoration = ['underline', 'line-through', 'no-underline'];

const textTransform = ['uppercase', 'lowercase', 'capitalize', 'normal-case'];

const verticalAlign = [
  'align-baseline',
  'align-top',
  'align-middle',
  'align-bottom',
  'align-text-top',
  'align-text-bottom',
];

const whitespace = [
  'whitespace-normal',
  'whitespace-no-wrap',
  'whitespace-pre',
  'whitespace-pre-line',
  'whitespace-pre-wrap',
];

const wordBreak = ['break-normal', 'break-words', 'break-all', 'truncate'];

export const Typography = {
  fontFamily,
  fontSize,
  fontSmoothing,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  listStyleType,
  listStylePosition,
  placeholderColor,
  placeholderOpacity,
  textAlign,
  textColor,
  textDecoration,
  textTransform,
  verticalAlign,
  whitespace,
  wordBreak,
};
