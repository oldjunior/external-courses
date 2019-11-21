const hints = [
  'Oliver',
  'Jack',
  'Harry',
  'Jacob',
  'Abbie',
  'Daisy',
  'Gabriella'
]
function displayHints() {
  const
    searchFieldValue = document.querySelector('.search-field__input').value,
    hintContainer = document.querySelector('.search-field__hint-container');
  let hintList, hintsRes;

  hintsRes = hints.filter(hint => searchFieldValue && hint.toLowerCase().startsWith(searchFieldValue.toLowerCase()));

  hintContainer.innerHTML = '';
  hintList = document.createElement('ul');
  hintList.className = 'search-field__hint-list';
  hintContainer.append(hintList);

  hintsRes.forEach(hintRes => {
    let hint, hintBtn;
    hint = document.createElement('li');
    hint.className = 'search-field__hint-list-item';
    hintList.append(hint);

    hintBtn = document.createElement('button');
    hintBtn.className = 'search-field__hint-btn';
    hint.append(hintBtn);
    hintBtn.insertAdjacentText('afterbegin', hintRes);
  });
}
function debounce() {
  let isTimeout = false;
  if (isTimeout) return;
  displayHints();
  isTimeout = true;
  setTimeout(function() { isTimeout = false }, 500);
}
document.querySelector('.search-field__input').addEventListener('input', debounce);