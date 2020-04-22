<?php

/**
 * Additional code for the child theme goes in here.
 */

add_action( 'wp_enqueue_scripts', 'enqueue_child_styles', 99);

function enqueue_child_styles() {
	$css_creation = filectime(get_stylesheet_directory() . '/style.css');

	wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', [], $css_creation );
}

/**
 * Instantiate the GPNL child theme.
 */
require_once __DIR__ . '/classes/class-p4jp-loader.php';
P4JP_Theme_Loader::get_instance();
