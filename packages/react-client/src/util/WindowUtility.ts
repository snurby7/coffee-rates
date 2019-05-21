export const WindowUtility = {
  /**
    @todo Create a Modal Service
    @body Whenever a save or anything is successful or an error needs to be shown it should
      come through to this Utility for handling
  */
  /**
   * @description Wrapper around the window.alert method, will eventually be a modal
   * @param message The message to display
   */
  showAlert(message: string) {
    alert(message);
  },
};
