/**
 * Static class for error messages
 */
export class Errors {
  /**
   * Throws an error when the container element was not provided when creating the VinzeEditor instance.
   */
  static containerWasNotSpecified() {
    const errorTitle = 'Container element not specified';
    console.error(errorTitle);
    throw new Error(errorTitle);
  }
}