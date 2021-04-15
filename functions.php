<?php

/**
 * Additional code for the child theme goes in here.
 */

$is_debug = defined('WP_DEBUG') && WP_DEBUG;

function enqueue_child_styles() {
	$css_creation = filectime(get_stylesheet_directory() . '/style.css');

	wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', ['parent-style'], $css_creation);
}

add_action('wp_enqueue_scripts', 'enqueue_child_styles', 10);

function enqueue_child_scripts(){
	wp_register_script('livereload', 'http://localhost:35729/livereload.js', [], null);

	wp_enqueue_script('livereload');
}

if($is_debug){

	add_action('wp_enqueue_scripts', 'enqueue_child_scripts');

}

/**
 * Instantiate the GPNL child theme.
 */
require_once __DIR__ . '/classes/class-p4jp-loader.php';
P4JP_Theme_Loader::get_instance();
