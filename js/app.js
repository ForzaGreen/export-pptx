

var example1 = new Vue({
  el: '#myapp',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' },
      { message: 'Sth' },
      { message: 'Odd' }
    ]
  }
});

var el = document.getElementById('items');
var sortable = Sortable.create(el, {
	onSort: function (/**Event*/evt) {
		// same properties as onEnd
		var itemEl = evt.item;  // dragged HTMLElement
		evt.to;    // target list
		evt.from;  // previous list
		evt.oldIndex;  // element's old index within old parent
		evt.newIndex;  // element's new index within new parent
	},
});

