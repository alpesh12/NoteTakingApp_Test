export default class Loader {
  static loader: {showLoader: (arg0: any) => void};

  static setLoader = (loader: any) => {
    this.loader = loader;
  };

  static isLoading = (check: any) => {
    this.loader?.showLoader(check);
  };
}
