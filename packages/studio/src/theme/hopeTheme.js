/**
 * ImagineForge by Hope Theory — Design Tokens
 */
export const hopeTheme = {
  colors: {
    bg: { primary: '#0a0a0f', secondary: '#111113', glass: 'rgba(255,255,255,0.04)' },
    accent: { cyan: '#00f0ff', cyanDark: '#00c4d4' },
    text: { primary: '#ffffff', secondary: 'rgba(255,255,255,0.7)', muted: 'rgba(255,255,255,0.4)' }
  },
  radius: { sm: '8px', md: '12px', lg: '20px', xl: '24px', '2xl': '32px' },
  glass: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)' }
};
export const hopeClasses = {
  glass: 'bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl',
  buttonPrimary: 'bg-[#00f0ff] hover:bg-white active:bg-[#00f0ff]/90 text-black font-semibold transition-all',
  buttonGhost: 'border border-white/20 hover:bg-white/5 transition-all',
  heading: 'font-semibold tracking-tighter'
};