export default class Donwload {
  constructor(triggers) {
    this.btns = document.querySelectorAll(triggers);
    this.path = 'assets/img/mainbg.jpg';
  }

  downloadItem(path) {
    const element = document.createElement('a');

    element.setAttribute('href', path);
    element.setAttribute('download', 'nice_picture');

    document.body.append(element);
    element.style.display = 'none';

    element.click();

    document.body.remove(element);
  }

  init() {
    this.btns.forEach(item => {
      item.addEventListener('click', () => {
        this.downloadItem(this.path);
      });
    });
  }
}