<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Gaia
 */

?>

</div><!-- #content -->

<footer id="colophon" class="site-footer default-max-width" role="contentinfo"
    aria-label="<?php esc_attr_e('Footer', 'gaia');?>">
    <?php get_template_part('template-parts/footer/footer-content');?>
</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer();?>

</body>

</html>