console.log('hello world');

const dreams = [
  'Find and count some sheep',
  'Climb a really tall mountain',
  'Wash the dishes'
];

const dreamsList = document.getElementById('dreams');
const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements['dream'];

const appendNewDream = function(dream) {
  const newListItem = document.createElement('li');
  newListItem.inerHTML = dream;
  dreamsList.appendChild(newListItem);
}

dreams.forEach( function(dream) {
  appendNewDream(dream);
});

dreamsForm.onsubmit = function(event) {
  event.preventDefault();

  dreams.push(dreamInput.value);
  appendNewDream(dreamInput.value);

  dreamInput.value = '';
  dreamInput.focus();
};
