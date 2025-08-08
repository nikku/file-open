declare type File = {
  name: string,
  path: string | undefined,
  contents: string
};

/**
 * Prompt the user to open a file or multiple files. Resolve the
 * promise with the opened files.
 *
 * @param opts
 *
 * @return promise resolving with opened files
 */
declare function fileOpen(opts: { multiple?: boolean, accept?: string }) : Promise<File[]>;

export default fileOpen;