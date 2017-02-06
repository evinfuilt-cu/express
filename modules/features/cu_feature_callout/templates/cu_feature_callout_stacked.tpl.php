<div class="feature-callout-item feature-callout-column-<?php print $column_count; ?> <?php print $column_classes; ?> clearfix">
  <?php if (isset($image)) { print $image; } ?>
  <div class="feature-callout-text clearfix">
    <?php if (isset($title)) { print $title; } ?>

      <?php if (isset($text)): ?>
        <div class="field-type-text-long feature-callout-item-content">
          <?php print $text;  ?>
        </div>
      <?php endif; ?>
  </div>
</div>
