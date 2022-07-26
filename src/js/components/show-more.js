
const showMore = document.querySelector('.podcasts__btn-basic');
const productsLength = document.querySelectorAll('.podcasts__article').length;
let items = 8;

showMore.addEventListener('click', () => {
	items += 4;
	const array = Array.from(document.querySelector('.podcasts__grid').children);
	const visItems = array.slice(0, items);

	visItems.forEach(el => el.classList.add('is-visible'));

	if (visItems.length === productsLength) {
		showMore.style.display = 'none';
	}
});
