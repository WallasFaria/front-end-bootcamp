const storageService = localStorage ? {
  items() {
    return JSON.parse(localStorage.items || '[]');
  },

  save(items) {
    return !!(localStorage.items = JSON.stringify(items))
  },

  favoriteItem(id) {
    if (!this.isFavorited(id)) {
      const items = this.items();

      items.push(id);
      return this.save(items);
    }

    return false;
  },

  unfavoriteItem(id) {
    if (this.isFavorited(id)) {
      return this.save(this.items().filter(item => item !== id));
    }

    return false;
  },

  isFavorited(id) {
    return !!this.items().find(item => item === id);
  }
} : null;

export default storageService;
