'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('Marionette');
var bandit = require('bandit');

module.exports = Marionette.ItemView.extend({
  template: function() {
    return;
  },
  modelEvents: {
    change: 'render',
  },
  onDomRefresh: function() {
    this.$el.html('<p data-qa-id="business-description"></p>');
    var text = this.model.get('text');
    this.$('p').text(text);
    if (!this.options.noTruncate) {
      var ops = {
        lines: this.options.lines,
        button: $('<span data-qa-id="more-button" class="btn-text moreBtn"> More</span>'),
      };
      if (window.app.channel.reqres.request('language') !== 'EN') {
        ops.splitOnChars = true;
      }

      this.$('p').truncate(ops);
    }

    var model = new Backbone.Model({
      text: text,
      title: this.model.get('title'),
    });
    var modal = this.modal = new bandit.view.ParagraphModal({
      model: model,
    });
    this.$('.moreBtn').click(function() {
      modal.show();
    });
    return this;
  },
});
