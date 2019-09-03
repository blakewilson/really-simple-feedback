<?php
/*
Plugin Name: Really Simple Feedback
Plugin URI: https://wordpress.org/plugins/really-simple-feedback
Description: A really simple way to get feedback from your users.
Version: 1.0.0
Author: Push Labs
Author URI: https://pushlabs.co
Text Domain: really-simple-feedback
Domain Path: /languages
*/

namespace PushLabs\ReallySimpleFeedback;

/**
 * Exit if accessed directly
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue frontend scripts.
 * 
 * @since 1.0.0
 */
function enqueue_scripts() {
	wp_enqueue_script(
		'really-simple-feedback',
		plugin_dir_url( __FILE__ ) . 'dist/really-simple-feedback.js',
		array(),
		'1.0.0',
		true
	);

	wp_enqueue_style(
		'really-simple-feedback', 
		plugin_dir_url( __FILE__ ) . 'dist/style.css',
		array(),
		'1.0.0'
	);

	wp_localize_script(
		'really-simple-feedback',
		'rsf_localized',
		array(
			'site_url' => get_site_url(),
			'feedback_button_text' => __( 'Feedback', 'really-simple-feedback'),
			'thank_you_message' => __( 'Thank you for your feedback!', 'really-simple-feedback'),
			'widget_header_text' => __('Share Your Feedback', 'really-simple-feedback'),
			'satisfaction_message' => __('Are you satisifed with this page?', 'really-simple-feedback'),
			'submit_text' => __( 'Send', 'really-simple-feedback' ),
			'unsatisfied_placeholder_text' => __('What can we do better?', 'really-simple-feedback'),
			'satisfied_placeholder_text' => __('What do you like the most?', 'really-simple-feedback')
		)
	);
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\enqueue_scripts' );

function enqueue_admin_scripts() {
	wp_enqueue_script(
		'really-simple-feedback-admin',
		plugin_dir_url( __FILE__ ) . 'dist/really-simple-feedback-admin.js',
		array(),
		'1.0.0',
		true
	);

	wp_enqueue_style(
		'really-simple-feedback-admin', 
		plugin_dir_url( __FILE__ ) . 'dist/really-simple-feedback-admin.css',
		array(),
		'1.0.0'
	);

	wp_localize_script(
		'really-simple-feedback-admin',
		'rsf_localized',
		array(
			'site_url' => get_site_url(),
			'mark_as_read_text' => 'Mark as Read',
			'mark_as_unread_text' => 'Mark as Unread'	
		)
	);
}
add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\\enqueue_admin_scripts');

// Register Custom Post Type
function create_post_type() {
	$labels = array(
		'name'                  => _x( 'Really Simple Feedback', 'Post Type General Name', 'really-simple-feedback' ),
		'singular_name'         => _x( 'Feedback', 'Post Type Singular Name', 'really-simple-feedback' ),
		'menu_name'             => __( 'Feedback', 'really-simple-feedback' ),
		'name_admin_bar'        => __( 'Feedback', 'really-simple-feedback' ),
	);

	$args = array(
		'label'                 => __( 'Post Type', 'really-simple-feedback' ),
		'description'           => __( 'Post Type Description', 'really-simple-feedback' ),
		'labels'                => $labels,
		'supports'              => array( 'custom-fields' ),
		'public' => false,
		'show_ui' => true,
		'show_in_admin_bar' => false,
	);

	register_post_type( 'rsf', $args );
}
add_action( 'init', __NAMESPACE__ . '\\create_post_type', 0 );

function create_feedback_endpoint( $request ) {
	// Get our data
	$comment = $request['comment'];
	$url = $request->get_header('referer');
	$user_agent = $request['userAgent'];
	$rating = $request['rating'];

	$post = array(
		'post_type' => 'rsf',
		'post_status' => 'publish',
	);

	$post_id = wp_insert_post( $post );

	add_post_meta($post_id, 'rating', $rating, true );
	add_post_meta($post_id, 'comment', $comment, true);
	add_post_meta($post_id, 'url', $url, true);
	add_post_meta($post_id, 'user_agent', $user_agent, true);

	// TODO return an actual response.
	return 'success';
}

function create_mark_as_read_endpoint( $request ) {
	$post = get_post( $request['id'] );

	if ($post->post_type !== 'rsf' ) {
		return 'Post type is not correct';
	}

	add_post_meta($post->ID, 'marked_as_read', true);

	// TODO return an actual response.
	return 'success';
}

function create_mark_as_unread_endpoint( $request ) {
	$post = get_post( $request['id'] );

	if ($post->post_type !== 'rsf' ) {
		return 'Post type is not correct';
	}

	delete_post_meta($post->ID, 'marked_as_read');

	// TODO return an actual response.
	return 'success';
}

add_action( 'rest_api_init', function() {
	register_rest_route( 'really-simple-feedback/v1', '/feedback', array(
		'methods' => 'POST',
		'callback' => __NAMESPACE__ . '\\create_feedback_endpoint',
		'args' => array()
	));

	register_rest_route( 'really-simple-feedback/v1', '/mark_as_read/(?P<id>\d+)', array(
		'methods' => 'POST',
		'callback' => __NAMESPACE__ . '\\create_mark_as_read_endpoint',
		'args' => array()
	));

	register_rest_route( 'really-simple-feedback/v1', '/mark_as_unread/(?P<id>\d+)', array(
		'methods' => 'POST',
		'callback' => __NAMESPACE__ . '\\create_mark_as_unread_endpoint',
		'args' => array()
	));
} );

function set_rsf_columns($columns) {
    return array(
		'cb' => '<input type="checkbox" />',
		'rating' => __( 'Rating', 'really-simple-feedback' ),
		'comment' => __( 'Comment', 'really-simple-feedback' ),
		'url' => __( 'Referred URL', 'really-simple-feedback' ),
		'user_agent' => __( 'User Agent', 'really-simple-feedback' ),
		'date' => __( 'Date', 'really-simple-feedback' )
    );
}
add_filter('manage_rsf_posts_columns', __NAMESPACE__ . '\\set_rsf_columns');

function custom_rsf_column( $column, $post_id ) {
    switch ( $column ) {
		case 'rating':
			$rating = get_post_meta( $post_id, 'rating', true );
			switch ($rating) {
				case 'unsatisfied':
					echo 'Unsatisfied';
					break;
				case 'satisfied':
					echo 'Satisfied';
					break;
			}
			
			break;
		case 'comment':
			echo get_post_meta( $post_id, 'comment', true );
			break;
		case 'url':
			$url = get_post_meta( $post_id, 'url', true );

			if ( $url ) {
				$url = '<a target="_blank" href="' . $url . '">' . $url . '</a>';
			}
			
			echo $url;
			break;
		case 'user_agent':
			$user_agent = get_post_meta( $post_id, 'user_agent', true );
			echo $user_agent;
			break;
    }
}
add_action( 'manage_rsf_posts_custom_column', __NAMESPACE__ . '\\custom_rsf_column', 10, 2 );

function register_bulk_actions( $bulk_actions ) {
	unset($bulk_actions['edit']);
	$bulk_actions['mark_as_read'] = __( 'Mark as Read', 'really-simple-feedback' );
	$bulk_actions['mark_as_unread'] = __( 'Mark as Unread', 'really-simple-feedback' );

	return $bulk_actions;
}
add_filter( 'bulk_actions-edit-rsf', __NAMESPACE__. '\\register_bulk_actions' );

function my_bulk_action_handler( $redirect_to, $action_name, $post_ids ) {
	switch ($action_name) {
		case 'mark_as_read':
			foreach( $post_ids as $post_id ) {
				add_post_meta($post_id, 'marked_as_read', true, true);
			}

			$redirect_to = add_query_arg( 'bulk_posts_processed', count($post_ids), $redirect_to );
			return $redirect_to;
			break;
		default:
			return $redirect_to;
	}
}
add_filter( 'handle_bulk_actions-edit-post', __NAMESPACE__ . '\\my_bulk_action_handler');

function register_actions( $actions, $post ) {
	if ($post->post_type === "rsf") {
		unset($actions['edit']);
		unset($actions['inline hide-if-no-js']);

		$marked_as_read = get_post_meta($post->ID, 'marked_as_read', true);

		if ( empty($marked_as_read ) ) {
			$actions['mark_as_read'] = '<a class="rsf-js-mark-as-read" data-postid="' . $post->ID .'" href="#">Mark as Read</a>';
		} else {
			$actions['mark_as_unread'] = '<a class="rsf-js-mark-as-unread" data-postid="' . $post->ID . '" href="#">Mark as Unread</a>';
		}

		return $actions;
	}
}
add_filter('post_row_actions', __NAMESPACE__ . '\\register_actions', 10, 2);

// todo https://make.wordpress.org/core/2016/10/04/custom-bulk-actions/
// todo https://wordpress.stackexchange.com/questions/14973/row-actions-for-custom-post-types

function add_classes_to_posts_list( $classes ) {

	// Make sure we are in the backend.
	if(!is_admin()) {
		return $classes;
	}

	global $post;

	if($post->post_type === 'rsf') {
		$classes[] = 'rsf-post';

		$marked_as_read = get_post_meta($post->ID, 'marked_as_read', true);

		if( empty($marked_as_read)) {
			$classes[] = 'rsf-post-unread';
		}

		return $classes;
	}
}
add_filter( 'post_class', __NAMESPACE__ . '\\add_classes_to_posts_list');