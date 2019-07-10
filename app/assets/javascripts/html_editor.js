(function() {
  "use strict";
  App.HTMLEditor = {
    initialize: function() {
      $("textarea.html-area").each(function() {
        if ($(this).hasClass("admin")) {
          CKEDITOR.replace(this.name, { language: $("html").attr("lang"), toolbar: "admin" });
        } else {
          CKEDITOR.replace(this.name, { language: $("html").attr("lang") });
        }
      });
    }
  };
}).call(this);
