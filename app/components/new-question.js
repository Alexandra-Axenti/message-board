import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
 actions: {
   questionFormShow() {
     this.set('addNewQuestion', true);
   },

   saveQuestion() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
        date: this.get('date'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
