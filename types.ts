export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  caption: string;
  size: 'small' | 'medium' | 'large';
}

export enum GeminiModel {
  FLASH = 'gemini-2.5-flash',
}
