export interface NewsUpdate {
  id: string;
  message: string;
  time: string;
  type: 'info' | 'alert' | 'update';
}