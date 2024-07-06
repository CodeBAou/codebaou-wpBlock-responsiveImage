<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>


<div <?php echo get_block_wrapper_attributes(); ?> > 
<picture>
    <source
        media="(max-width: 450px)"
        srcset="<?php echo esc_url($attributes['srcthumbnail']); ?>"
    >
    <source
        media="(max-width: 553px)"
        srcset="<?php echo esc_url($attributes['srcmedium']); ?>"
    >
    <source
        media="(max-width: 1024px)"
        srcset="<?php echo esc_url($attributes['srclarge']); ?>"
    >
    <img
        src="<?php echo esc_url($attributes['srcfull']); ?>"
        alt="<?php echo esc_attr($attributes['mediaALT']); ?>"
        style="max-width: 100%; height: auto;"
    >
</picture>

</div>

