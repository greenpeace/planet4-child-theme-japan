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

add_action('wp_enqueue_scripts', 'deregister_parent_styles', 11);

function deregister_parent_styles(){
	if(is_page_template('page-templates/custom.php')) {
		wp_dequeue_style('parent_style');
		wp_deregister_style('parent_style');
		// wp_dequeue_style('bootstrap');
		// wp_deregister_style('bootstrap');
	}
}

add_action( 'cmb2_admin_init', 'cmb2_custom_page_settings_metaboxes' );
/**
 * Define the metabox and field configurations.
 */
function cmb2_custom_page_settings_metaboxes() {

    /**
     * Initiate the metabox
     */
    $cmb = new_cmb2_box( array(
        'id'            => 'p4jp_custom_page_settings',
        'title'         => __( 'Custom Page Settings', 'cmb2' ),
        'object_types'  => array( 'page' ), // Post type
				'show_on'				=> array( 'key' => 'page-template', 'value' => 'page-templates/custom.php' ),
        'context'       => 'normal',
        'priority'      => 'high',
        'show_names'    => true, // Show field names on the left
        // 'cmb_styles' => false, // false to disable the CMB stylesheet
				'closed'     => true, // Keep the metabox closed by default
    ) );

    // Regular text field
    $cmb->add_field( array(
        'name'       => __( 'Custom JS', 'cmb2' ),
        'desc'       => __( 'URL / relative path to additional JS file', 'cmb2' ),
        'id'         => 'p4jp_custom_page_js',
        'type'       => 'text',
				// 'show_on_cb' => 'cmb2_hide_if_no_cats', // function should return a bool value
        // 'sanitization_cb' => 'my_custom_sanitization', // custom sanitization callback parameter
        // 'escape_cb'       => 'my_custom_escaping',  // custom escaping callback parameter
        // 'on_front'        => false, // Optionally designate a field to wp-admin only
        // 'repeatable'      => true,
    ) );

    $cmb->add_field( array(
        'name'       => __( 'Custom CSS', 'cmb2' ),
        'desc'       => __( 'URL / relative path to additional CSS file', 'cmb2' ),
        'id'         => 'p4jp_custom_page_css',
        'type'       => 'text',
				// 'show_on_cb' => 'cmb2_hide_if_no_cats', // function should return a bool value
        // 'sanitization_cb' => 'my_custom_sanitization', // custom sanitization callback parameter
        // 'escape_cb'       => 'my_custom_escaping',  // custom escaping callback parameter
        // 'on_front'        => false, // Optionally designate a field to wp-admin only
        // 'repeatable'      => true,
    ) );
    // Add other metaboxes as needed

}
