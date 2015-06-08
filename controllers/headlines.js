Bustle.HeadlinesController = Ember.Controller.extend({
  isHovering: false,
  actions: {
    toggleSocialIcons: function(){
      this.set('isHovering', true);
    },
  }
});
