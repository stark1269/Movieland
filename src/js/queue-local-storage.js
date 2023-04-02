// в локал сторіджі дані по фільмам бібліотеки треба зберігати як масив обєктів з усіма необхідними властивостями,
// а не масив просто айдішників.
import { queue } from './buttons';
import { createMarkupOneCard } from './markup-cards';
import { onClickMovie } from './modal-movie';

const btnQueue = document.querySelector('.js-queue');
const libraryList = document.querySelector('.js-library_gallery');
const imgPlug = document.querySelector('.no-watched');

if (!libraryList) {
  return;
}
libraryList.addEventListener('click', onClickMovie);

if (!btnQueue) {
  return;
}
btnQueue.addEventListener('click', markupQueue);

export function markupQueue() {
  if (!libraryList) {
    return;
  }
  imgPlug.style.display = 'none';

  libraryList.innerHTML = createMarkupOneCard(queue);
}
