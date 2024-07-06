/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, MediaUpload, MediaUploadCheck, InspectorControls, BlockControls } from '@wordpress/block-editor';


/** @wordpress/components */
import { Button, ResizableBox } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import { useState, useEffect } from '@wordpress/element';
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {

	const propsBlock = useBlockProps();
	const { mediaALT, mediaID, srcfull, srclarge, srcmedium, srcthumbnail, widthfull, widthlarge, widthmedium, widththumbnail } = attributes;




	const setImageUpload = (media) => {
		console.log(media);
		setAttributes({
			mediaID: media.id,
			mediaALT: media.alt,
			srcfull: media.sizes.full.url,
			srclarge: media.sizes.large.url,
			srcmedium: media.sizes.medium.url,
			srcthumbnail: media.sizes.thumbnail.url,
			widthfull: media.sizes.full.width,
			widthlarge: media.sizes.large.width,
			widthmedium: media.sizes.medium.width,
			widththumbnail: media.sizes.thumbnail.width,
		});
	}


	return (

		<div {...propsBlock}>

			<BlockControls>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={setImageUpload}
						allowedTypes={['image']}
						value={mediaID}
						render={({ open }) => (
							<Button className="wp-block-codebaou-wp-codebaou-wp-responsiveimage-button" onClick={open}> IMAGEN </Button>
						)}
					/>
				</MediaUploadCheck>
			</BlockControls>

			{/** 
			* SE SIGUE EL PROTOCOLO DE IMAGEN RESPONSIVE --> https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
			*
			*/}
			{mediaID ? (
				<picture>
					
					<source
						media="(max-width: 450px)"
						srcSet={srcthumbnail}
					/>
					
					<source
						media="(max-width: 553px)"
						srcSet={srcmedium}
					/>

					<source
						media="(max-width:1024px)"
						srcSet={srclarge}
					/>

					<img
						src={attributes.srcfull}
						alt={attributes.mediaALT}
						style={{ maxWidth: '100%', height: 'auto' }}
					/>
				</picture>
			) : (
				<div {...propsBlock}>
					<p>Carga una imagen desde el botón</p>
				</div>
			)}
		</div>
	)
}



