<?php
/**
 * Plugin Name:       Responsive Image Codebaou
 * Description:       Un bloque para cargar el tamaño de imagen correcto segun user-agent
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       codebaou-wp-responsiveimage
 *
 * @package CodebaouWp
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function codebaou_wp_codebaou_wp_responsiveimage_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'codebaou_wp_codebaou_wp_responsiveimage_block_init' );
