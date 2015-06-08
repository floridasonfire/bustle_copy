Bustle.ApplicationController = Ember.Controller.extend({
  isHovering: false,
  actions: {
    toggleSocialIcons: function(){
      this.set('isHovering', true);
    },
    toggleBack: function(){
      this.set('isHovering', false);
      
    },
  }
});
