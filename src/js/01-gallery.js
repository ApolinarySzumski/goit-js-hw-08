// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const addtoGallery = galleryItems
  .map(
    galleryItem =>
      `<li class="gallery__link"><a class="gallery__item" href="${galleryItem.original}">
    <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a></li>
    `
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', addtoGallery);

const lightGallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
lightGallery.on('show.simplelightbox', function () {});
