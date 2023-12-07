export interface FileAdapterInterface<T> {
  download(url: string): T;
}
