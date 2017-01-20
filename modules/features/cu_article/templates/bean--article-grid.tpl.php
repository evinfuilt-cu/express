<div class="article-grid clearfix article-grid-<?php print $content['field_article_grid_summary'][0]['#markup']; ?>">
  <div class="row article-grid-wrapper">
    <?php print render($content['articles']); ?>
  </div>
</div>
<?php print render($content['field_article_grid_more_link']); ?>
