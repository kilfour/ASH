
export function Initialize() {
  const filter = document.getElementById('open-filter');
  filter.addEventListener('change', onFilterChange);
}

function onFilterChange() {
  const items = document.getElementsByClassName('story-list-row');
  const selectedStatus = this.value;
    [...items].forEach(item => {
      const itemStatus = item.getAttribute('data-status');
      if (selectedStatus === 'all' || itemStatus === selectedStatus) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  };
