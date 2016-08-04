(function ($) {
  $(document).ready(function(){
    cu_feedback_ajax_load();
     $("#cu-feedback a.cu-feedback-link-embed").click(function() {
        $("#cu-feedback-content").slideToggle('fast');
        $("#cu-feedback a.cu-feedback-link-embed i.fa").toggleClass("fa-chevron-up");
        $("#cu-feedback a.cu-feedback-link-embed i.fa").toggleClass("fa-times");
        return false;
     });
  });
})(jQuery);
