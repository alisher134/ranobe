export const THEMES = ['light', 'dark', 'system'] as const;

export type AppTheme = (typeof THEMES)[number];
