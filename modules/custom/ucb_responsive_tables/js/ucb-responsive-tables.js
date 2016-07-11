(function ($, Drupal, window, document, undefined) {
  $(document).ready(function(){
    $('div.responsive-table table').each(function(){
      $(this).addClass('tablesaw tablesaw-stack');
      if ($('thead', this).length==0) {
        // Add thead element to table if it doesn't exist already
        $('th', this).first().parent().wrap('<thead></thead>');
        var thead = $('thead', this);
        $('thead', this).remove();
        $(this).prepend(thead);
      }
      $(this).attr('data-tablesaw-mode', 'stack');
      $('thead th', this).attr('scope', 'col');
      $('thead th', this).attr('data-tablesaw-sortable-col', 1);
    });

  });
})(jQuery, Drupal, this, this.document);
