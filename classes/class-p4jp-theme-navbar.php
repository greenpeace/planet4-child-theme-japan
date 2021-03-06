<?php
/**
 * Navbar customization
 *
 * @package P4NL_CT
 */
use Timber\Menu as TimberMenu;
if ( ! class_exists( 'P4JP_Theme_Navbar' ) ) {
	/**
	 * Class P4JP_Theme_Navbar
	 */

	class P4JP_Theme_Navbar {

		/**
		 * Constructor
		 */
		public function __construct() {
			$this->hooks();
		}

		/**
		 * Initiate our hooks
		 */
		public function hooks() {
			register_nav_menu( 'donation-menu', __( 'P4JP Donation Menu', 'planet4-master-theme-backend' ) );
			$this->add_to_timbercontext( 'donation_navbar_menu', new TimberMenu( 'donation_menu' ) );
		}

		/**
		 * Add new items to the general Timber context
		 *
		 * @param mixed $key The key with which to store data.
		 * @param mixed $val The data to be stored.
		 */
		private function add_to_timbercontext( $key, $val ) {
			add_filter(
				'timber_context',
				function ( $context ) {
					global $timber_context;
					$timber_context = is_array( $timber_context ) ? $timber_context : array();
					$context        = is_array( $context ) ? $context : array();
					$context        = array_merge( $timber_context, $context );
					return $context;
				}
			);

			global $timber_context;
			$timber_context[ $key ] = $val;
		}
	}
}
