<?php
/**
 * Template Name: Custom Page
 * The template for displaying evergreen pages.
 *
 * To generate specific templates for your pages you can use:
 * /mytheme/views/page-mypage.twig
 * (which will still route through this PHP file)
 * OR
 * /mytheme/page-mypage.php
 * (in which case you'll want to duplicate this file and save to the above path)
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

use P4\MasterTheme\Context;
use P4\MasterTheme\Post;
use Timber\Timber;

$context        = Timber::get_context();
$post           = new Post(); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
$page_meta_data = get_post_meta( $post->ID );
$page_meta_data = array_map( 'reset', $page_meta_data );

// Set Navigation Issues links.
$post->set_issues_links();

// Get Navigation Campaigns links.
$page_tags = wp_get_post_tags( $post->ID );
$tags      = [];

if ( is_array( $page_tags ) && $page_tags ) {
	foreach ( $page_tags as $page_tag ) {
		$tags[] = [
			'name' => $page_tag->name,
			'link' => get_tag_link( $page_tag ),
		];
	}
	$context['campaigns'] = $tags;
}

$context['post']                = $post;
$context['custom_body_classes'] = 'white-bg';
$context['page_category']       = 'Custom Page';
$context['social_accounts']     = $post->get_social_accounts( $context['footer_social_menu'] );
$context['custom_page_js']       = get_post_meta( get_the_ID(), 'p4jp_custom_page_js', true );
$context['custom_page_css']      = get_post_meta( get_the_ID(), 'p4jp_custom_page_css', true );

$share_buttons_data              = new stdClass();
$share_buttons_data->title       = get_post_meta(get_the_ID(), 'p4_og_title', true);
$share_buttons_data->description = get_post_meta(get_the_ID(), 'p4_og_description', true);
$share_buttons_data->link        = get_permalink();
$context['share_buttons_data']   = $share_buttons_data;

Context::set_header( $context, $page_meta_data, $post->title );
Context::set_background_image( $context );
Context::set_og_meta_fields( $context, $post );

if ( is_page() && $post->post_parent ) {
	$context['is_sub_page'] = true;
}

if ( post_password_required( $post->ID ) ) {
	$context['login_url'] = wp_login_url();

	Timber::render( 'single-page.twig', $context );
} else {
	Timber::render( [ 'custom.twig' ], $context );
}
