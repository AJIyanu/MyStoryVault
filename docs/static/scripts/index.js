const editor = document.getElementById('editor');




WebFont.load({
  google: {
    families: ['Droid Sans', 'Droid Serif']
  },
  active: function() {
    var Font = Quill.import('formats/font');
    Font.whitelist = ['Droid Sans', 'Droid Serif'];
    Quill.register(Font, true);
  }
});




var quill = new Quill('#editor', {
    modules: {
        toolbar: [
          [{ 'font': ['Droid Sans', 'Droid Serif'] }],
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['image', 'code-block', 'link', 'blockquote'],
        ]
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'  // or 'bubble'
});
